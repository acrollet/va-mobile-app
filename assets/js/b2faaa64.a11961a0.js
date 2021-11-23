"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3783],{5305:function(n,e,o){o.r(e),o.d(e,{contentTitle:function(){return d},default:function(){return g},exampleString:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var t=o(7462),i=o(3366),a=(o(7294),o(3905)),r=(o(9055),o(8909)),s=["components"],l={},d=void 0,p={unversionedId:"Engineering/FrontEnd/ComponentsSection/FormComponents/RadioGroup",id:"Engineering/FrontEnd/ComponentsSection/FormComponents/RadioGroup",isDocsHomePage:!1,title:"RadioGroup",description:"export const exampleString = `const [optionValue, setOptionValue] = useState(options[0].value)",source:"@site/docs/Engineering/FrontEnd/ComponentsSection/FormComponents/RadioGroup.mdx",sourceDirName:"Engineering/FrontEnd/ComponentsSection/FormComponents",slug:"/Engineering/FrontEnd/ComponentsSection/FormComponents/RadioGroup",permalink:"/docs/Engineering/FrontEnd/ComponentsSection/FormComponents/RadioGroup",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PickerList",permalink:"/docs/Engineering/FrontEnd/ComponentsSection/FormComponents/PickerList"},next:{title:"VAModalPicker",permalink:"/docs/Engineering/FrontEnd/ComponentsSection/FormComponents/VAModalPicker"}},c=[],u="const [optionValue, setOptionValue] = useState(options[0].value)\nconst handleRadioOnChange = (radioValue: number): void => {\n  setOptionValue(radioValue)\n}\n\nconst options = [\n  {\n    value: 1,\n    label: '1'\n  },\n  {\n    value: 2,\n    label: '2'\n  },\n]\n\nreturn <RadioGroup<number> options={options} value={optionValue} onChange={handleRadioOnChange} />",m={toc:c,exampleString:u};function g(n){var e=n.components,o=(0,i.Z)(n,s);return(0,a.kt)("wrapper",(0,t.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)(r.Z,{componentName:"RadioGroup",example:u,codeString:"import { isEqual, map } from 'underscore'\nimport React, { ReactElement } from 'react'\n\nimport { Box, SelectorType, TextView, VASelector } from '../../index'\nimport { useTheme } from 'utils/hooks'\n\nexport type radioOption<T> = {\n  /** translated labelKey displayed next to the checkbox/radio */\n  labelKey: string\n  /** optional arguments to pass in with the labelKey during translation */\n  labelArgs?: { [key: string]: string }\n  /** value of the radio button */\n  value: T\n  /** string for the header if one needed */\n  headerText?: string\n}\n\n/**\n * Signifies props for the component {@link RadioGroup}\n */\nexport type RadioGroupProps<T> = {\n  /** Zero based array of options. An option is an object with both a value which is the relevant data, and a label which is displayed as a string to represent the value. */\n  options: Array<radioOption<T>>\n  /** Currently selected option. An initial value can be used or this can be left undefined which will have nothing initially selected.  */\n  value?: T\n  /** Call back function that passes the newly selected option's value as an argument to.*/\n  onChange: (val: T) => void\n  /** optional boolean that disables the radio group when set to true */\n  disabled?: boolean\n}\n\n/**A common component to display radio button selectors for a list of selectable items*/\nconst RadioGroup = <T,>({ options, value, onChange, disabled = false }: RadioGroupProps<T>): ReactElement => {\n  const theme = useTheme()\n\n  const getRadios = (): ReactElement => {\n    const radios = map(options, (option, index) => {\n      const selected = isEqual(option.value, value)\n      const onVASelectorChange = (_selected: boolean): void => {\n        onChange(option.value)\n      }\n      const { labelKey, labelArgs, headerText } = option\n      return (\n        <Box key={index}>\n          {headerText && (\n            <Box>\n              <TextView color=\"primary\" variant=\"MobileBodyBold\" accessibilityRole=\"header\">\n                {headerText}\n              </TextView>\n            </Box>\n          )}\n          <Box mb={theme.dimensions.standardMarginBetween} key={index} mt={headerText ? theme.dimensions.contentMarginTop : 0}>\n            <VASelector\n              selectorType={SelectorType.Radio}\n              selected={selected}\n              onSelectionChange={onVASelectorChange}\n              labelKey={labelKey}\n              labelArgs={labelArgs}\n              disabled={disabled}\n            />\n          </Box>\n        </Box>\n      )\n    })\n\n    return <Box>{radios}</Box>\n  }\n\n  return getRadios()\n}\n\nexport default RadioGroup\n",mdxType:"ComponentTopInfo"}))}g.isMDXComponent=!0}}]);