import { Box, ButtonDecoratorType, ButtonTypesConstants, SimpleList, SimpleListItemObj, TextArea, TextView, VAButton, VAScrollView } from 'components'
import { logout } from 'store/slices/authSlice'
import { useAppDispatch, useTheme } from 'utils/hooks'
import React, { FC, ReactNode, useState } from 'react'
import remoteConfig from '@react-native-firebase/remote-config'

import { FeatureToggleType, featureEnabled, getFeatureToggles, overrideRemote, setDebugConfig } from 'utils/remoteConfig'

const RemoteConfigScreen: FC = () => {
  const theme = useTheme()
  const dispatch = useAppDispatch()
  const { gutter, contentMarginTop, contentMarginBottom, standardMarginBetween, condensedMarginBetween } = theme.dimensions
  const currentConfig = getFeatureToggles()
  const [toggles, setToggles] = useState({ ...currentConfig })
  const [override, setOverride] = useState(overrideRemote)

  const toggleList = (): ReactNode => {
    const toggleItems = Object.keys(toggles).map((key): SimpleListItemObj => {
      return {
        text: `${key}`,
        decorator: ButtonDecoratorType.Switch,
        decoratorProps: {
          on: toggles[key as FeatureToggleType],
        },
        onPress: () => {
          setToggles({
            ...toggles,
            [key]: !toggles[key as FeatureToggleType],
          })
        },
      }
    })

    return (
      <Box mt={condensedMarginBetween}>
        <SimpleList items={toggleItems} />
      </Box>
    )
  }

  return (
    <VAScrollView>
      <Box mt={contentMarginTop} mb={contentMarginBottom}>
        <Box mt={theme.dimensions.condensedMarginBetween}>
          <TextArea>
            <TextView variant="MobileBodyBold">Last fetch status</TextView>
            <TextView>{remoteConfig().lastFetchStatus}</TextView>
          </TextArea>
        </Box>
        <TextView variant={'MobileBodyBold'} accessibilityRole={'header'} mx={gutter} mt={standardMarginBetween}>
          Remote Config Values
        </TextView>
        <Box mb={theme.dimensions.condensedMarginBetween}>
          {Object.keys(remoteConfig().getAll()).map((key: string) => {
            const val = remoteConfig().getValue(key)
            return (
              <Box key={key} mt={theme.dimensions.condensedMarginBetween}>
                <TextArea>
                  <TextView variant="MobileBodyBold">
                    {key} ({val.getSource()})
                  </TextView>
                  <TextView>{val.asBoolean().toString()}</TextView>
                </TextArea>
              </Box>
            )
          })}
        </Box>

        <TextView variant={'MobileBodyBold'} accessibilityRole={'header'} mx={gutter} mt={standardMarginBetween}>
          App Values
        </TextView>
        <Box mb={theme.dimensions.condensedMarginBetween}>
          {Object.keys(getFeatureToggles()).map((key: string) => {
            const value = featureEnabled(key as FeatureToggleType).toString()
            const isOverridden = override && featureEnabled(key as FeatureToggleType) !== remoteConfig().getValue(key).asBoolean()
            return (
              <Box key={key} mt={theme.dimensions.condensedMarginBetween}>
                <TextArea>
                  <TextView variant="MobileBodyBold">
                    {key} {isOverridden && '(overridden)'}
                  </TextView>
                  <TextView>{value}</TextView>
                </TextArea>
              </Box>
            )
          })}
        </Box>
        <TextView variant={'MobileBodyBold'} accessibilityRole={'header'} mx={gutter} mt={standardMarginBetween}>
          Override Toggles
        </TextView>
        {toggleList()}
        <Box mt={theme.dimensions.contentMarginTop}>
          <TextArea>
            <VAButton
              onPress={() => {
                setOverride(true)
                dispatch(logout())
                setDebugConfig(toggles, dispatch)
              }}
              label={'Apply Overrides'}
              buttonType={ButtonTypesConstants.buttonPrimary}
              disabled={JSON.stringify(currentConfig) === JSON.stringify(toggles)}
            />
          </TextArea>
        </Box>
      </Box>
    </VAScrollView>
  )
}

export default RemoteConfigScreen
