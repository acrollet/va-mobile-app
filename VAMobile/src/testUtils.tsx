import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import { RenderAPI, RenderOptions, render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components'
import React, { FC, ReactElement } from 'react'
import i18n from 'utils/i18n'
import store, { RootState } from 'store'
import { SuiteFunction } from 'mocha'
import path from 'path'
import { AnyAction, configureStore, Store } from '@reduxjs/toolkit'
export * from 'jest-when'
import { allReducers, InitialState } from 'store/slices'

const AllTheProviders: FC = ({ children }) => {
  return (
    <ThemeProvider theme="light">
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
      </Provider>
    </ThemeProvider>
  )
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>): RenderAPI => render(ui, { wrapper: AllTheProviders, ...options })
export * from '@testing-library/react-native'
export { customRender as render }

type fn = () => any
type ActionState = AnyAction & {
  state: RootState
  payload: any
}

export class TrackedStore {
  constructor(state?: RootState) {
    this.actions = []
    this.realStore = configureStore({
      reducer: {
        ...allReducers,
      },
      middleware: (getDefaultMiddleWare) => getDefaultMiddleWare({ serializableCheck: false }),
      preloadedState: { ...state },
    })
    this.subscribe = this.realStore.subscribe
  }

  subscribe: (listener: any) => void
  actions: Array<ActionState>
  realStore: Store<RootState, AnyAction>

  //&ts-ignore
  dispatch(action: AnyAction | fn | any): Promise<AnyAction> | AnyAction {
    if ((action as AnyAction).type) {
      const result = this.realStore.dispatch(action as AnyAction)
      //@ts-ignore
      this.actions.push({ ...(action as AnyAction), state: this.realStore.getState() })
      return result
    } else {
      //@ts-ignore
      return action(
        (action: any) => this.dispatch(action),
        () => this.realStore.getState(),
      )
    }
  }

  getState() {
    return this.realStore.getState()
  }

  getActions() {
    return this.actions
  }

  getStateField = <T extends keyof RootState, P extends keyof RootState[T]>(stateType: T, field: P) => {
    let state = this.realStore.getState()[stateType]
    return state[field]
  }
}

export const realStore = (state?: Partial<RootState>) => {
  return new TrackedStore({ ...InitialState, ...state })
}

//@ts-ignore
const realFetch = global.fetch

export const fetch: jest.Mock = realFetch as jest.Mock

export const generateRandomString = (): string => {
  // generate a random number between 0 and 1
  // convert to base 36 (a-z,0-9)
  // drop the leading "0."
  // these are generally 11 chars long
  const gen = (): string => {
    return Math.random().toString(36).substring(2)
  }
  return gen() + gen()
}

export const mockNavProps = (props?: any, navigationMock?: any, routeMock?: any) => ({
  navigation: navigationMock || { navigate: jest.fn() },
  route: routeMock || {},
  ...props,
})

const { describe: origDescribe } = global

const buildRecurse = (vals: Array<string>, fn: () => void, only?: boolean, skip?: boolean): void => {
  let fnDesc: any = origDescribe
  if (only) {
    fnDesc = origDescribe.only
  } else if (skip) {
    fnDesc = origDescribe.skip
  }
  if (vals.length > 1) {
    const name = vals.shift() || ''
    return fnDesc(name, () => buildRecurse(vals, fn))
  } else {
    return fnDesc(vals[0], fn)
  }
}

//@ts-ignore
const ctxFn: any = (name: string, fn: () => void) => {
  return ctxReq(name, fn)
}

const ctxReq: any = (name: string, fn: () => void, only?: boolean, skip?: boolean) => {
  const dir = path.dirname(module?.parent?.filename || '')
  const cwd = process.cwd()
  const relPath = dir.substr((cwd + '/src/').length)
  const pathParts = relPath.split('/')
  return buildRecurse(pathParts.concat(name), fn, only, skip)
}

//@ts-ignore
ctxFn.only = (name: string, fn: () => void) => {
  return ctxReq(name, fn, true, false)
}

//@ts-ignore
ctxFn.skip = (name: string, fn: () => void) => {
  return ctxReq(name, fn, false, true)
}

export const context: SuiteFunction = ctxFn
