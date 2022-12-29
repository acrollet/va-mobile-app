"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1437],{38909:function(e,n,t){t.d(n,{Z:function(){return d}});var o=t(67294),a=t(19055),i=t(26396),l=t(58215),r=t(82224),s=t(36005),c=function(e){var n=e.props;return n?o.createElement(o.Fragment,null,s.ZP.isEmpty(n)?o.createElement("pre",{className:"preText"},"This component does not have props defined"):o.createElement("table",null,o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"Name"),o.createElement("th",null,"Type"),o.createElement("th",null,"Default Value"),o.createElement("th",null,"Required"),o.createElement("th",null,"Description"))),o.createElement("tbody",null,Object.keys(n).map((function(e){var t;return o.createElement("tr",{key:e},o.createElement("td",null,o.createElement("code",null,e)),o.createElement("td",{style:{minWidth:200}},null==(t=n[e].type)?void 0:t.name),o.createElement("td",null,n[e].defaultValue&&n[e].defaultValue.value.toString()),o.createElement("td",null,n[e].required?"Yes":"No"),o.createElement("td",null,n[e].description))}))))):null};function d(e){var n=(0,r.N)(e.componentName)[0],t=n.description,s=n.displayName,d=n.props,u="How to use the "+s+" component",p="Full code for the "+s+" component";return o.createElement(o.Fragment,null,t,o.createElement("br",null),o.createElement("br",null),o.createElement(i.Z,null,o.createElement(l.Z,{value:"props",label:"Properties"},o.createElement(c,{props:d})),o.createElement(l.Z,{value:"example",label:"Example"},e.example&&o.createElement(a.Z,{title:u,className:"language-tsx test"},e.example)),o.createElement(l.Z,{value:"code",label:"Source Code"},e.codeString&&o.createElement(a.Z,{title:p,className:"language-tsx"},e.codeString)),o.createElement(l.Z,{value:"accessibility",label:"Accessibility"},o.createElement("pre",{className:"preText"},e.accessibilityInfo))))}},82224:function(e,n,t){t.d(n,{N:function(){return a}});var o=t(28084),a=function(e){return(0,o.default)()["docusaurus-plugin-react-docgen-typescript"].default.filter((function(n){return n.displayName===e}))}},56318:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return c},default:function(){return b},exampleString:function(){return p},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var o=t(87462),a=t(63366),i=(t(67294),t(3905)),l=(t(19055),t(38909)),r=["components"],s={},c=void 0,d={unversionedId:"Engineering/FrontEnd/ComponentsSection/Form/RadioGroup",id:"Engineering/FrontEnd/ComponentsSection/Form/RadioGroup",title:"RadioGroup",description:"export const exampleString = `const [optionValue, setOptionValue] = useState(options[0].value)",source:"@site/docs/Engineering/FrontEnd/ComponentsSection/Form/RadioGroup.mdx",sourceDirName:"Engineering/FrontEnd/ComponentsSection/Form",slug:"/Engineering/FrontEnd/ComponentsSection/Form/RadioGroup",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/Form/RadioGroup",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PickerList",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/Form/PickerList"},next:{title:"VAModalPicker",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/Form/VAModalPicker"}},u=[],p="const [optionValue, setOptionValue] = useState(options[0].value)\nconst handleRadioOnChange = (radioValue: number): void => {\n  setOptionValue(radioValue)\n}\n\nconst options = [\n  {\n    value: 1,\n    label: '1'\n  },\n  {\n    value: 2,\n    label: '2'\n  },\n]\n\nreturn <RadioGroup<number> options={options} value={optionValue} onChange={handleRadioOnChange} />",m={toc:u,exampleString:p};function b(e){var n=e.components,t=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(l.Z,{componentName:"RadioGroup",example:p,codeString:"import { AccessibilityInfo } from 'react-native'\nimport { isEqual, map } from 'underscore'\nimport { useTranslation } from 'react-i18next'\nimport React, { ReactElement, useEffect } from 'react'\n\nimport { Box, ButtonDecoratorType, DefaultList, DefaultListItemObj, SelectorType, TextLine, TextView, VASelector } from '../../index'\nimport { NAMESPACE } from 'constants/namespaces'\nimport { getTranslation } from 'utils/formattingUtils'\nimport { isIOS } from 'utils/platform'\nimport { useTheme } from 'utils/hooks'\n\nexport type radioOption<T> = {\n  /** translated text displayed next to the checkbox/radio */\n  labelKey: string\n  /** optional arguments to pass in with the labelKey during translation */\n  labelArgs?: { [key: string]: string }\n  /** value of the radio button */\n  value: T\n  /** string for the header if one needed */\n  headerText?: string\n  /** optional accessibilityLabel */\n  a11yLabel?: string\n  /** Additional text to present under label key */\n  additionalLabelText?: Array<string>\n  /** Removes the radio btn icon from radio list and makes it not selectable*/\n  notSelectableRadioBtn?: boolean\n}\n\n/**\n * Signifies props for the component {@link RadioGroup}\n */\nexport type RadioGroupProps<T> = {\n  /** Zero based array of options. An option is an object with both a value which is the relevant data, and a label which is displayed as a string to represent the value. */\n  options: Array<radioOption<T>>\n  /** Currently selected option. An initial value can be used or this can be left undefined which will have nothing initially selected.  */\n  value?: T\n  /** Call back function that passes the newly selected option's value as an argument to.*/\n  onChange: (val: T) => void\n  /** optional boolean that disables the radio group when set to true */\n  disabled?: boolean\n  /** optional boolean to indicate to use the radio buttons in a list */\n  isRadioList?: boolean\n  /** optional text to show as the radio list title */\n  radioListTitle?: string\n}\n\n/**A common component to display radio button selectors for a list of selectable items*/\nconst RadioGroup = <T,>({ options, value, onChange, disabled = false, isRadioList, radioListTitle }: RadioGroupProps<T>): ReactElement => {\n  const theme = useTheme()\n  const { t } = useTranslation(NAMESPACE.PROFILE)\n  const { t: tc } = useTranslation(NAMESPACE.COMMON)\n  const hasSingleOption = options.length === 1\n\n  useEffect(() => {\n    // Auto select the first option if there is only one option\n    if (hasSingleOption && !value) {\n      onChange(options[0].value)\n    }\n  }, [hasSingleOption, value, options, onChange])\n\n  const getOption = (option: radioOption<T>): ReactElement => {\n    const { labelKey, labelArgs, a11yLabel } = option\n\n    // Render option as simple text\n    if (hasSingleOption) {\n      return (\n        <TextView accessibilityLabel={a11yLabel || getTranslation(labelKey, t, labelArgs)} variant=\"VASelector\">\n          {getTranslation(labelKey, t, labelArgs)}\n        </TextView>\n      )\n    }\n\n    const selected = isEqual(option.value, value)\n    const onVASelectorChange = (_selected: boolean): void => {\n      onChange(option.value)\n    }\n\n    return (\n      <VASelector\n        selectorType={SelectorType.Radio}\n        selected={selected}\n        onSelectionChange={onVASelectorChange}\n        labelKey={labelKey}\n        labelArgs={labelArgs}\n        disabled={disabled}\n        a11yLabel={a11yLabel}\n      />\n    )\n  }\n\n  /** creates the radio group with an optiona title and the radio button on the left side */\n  const getStandardRadioGroup = () => {\n    return map(options, (option, index) => {\n      const { headerText } = option\n      return (\n        <Box key={index}>\n          {headerText && (\n            <Box>\n              <TextView variant=\"MobileBodyBold\" accessibilityRole=\"header\">\n                {headerText}\n              </TextView>\n            </Box>\n          )}\n          <Box mb={theme.dimensions.standardMarginBetween} key={index} mt={headerText ? theme.dimensions.contentMarginTop : 0}>\n            {getOption(option)}\n          </Box>\n        </Box>\n      )\n    })\n  }\n\n  /** creates the radio group with a optional title and the radio buttons in a list with the radio button ot the far right */\n  const getRadioGroupList = () => {\n    const listItems: Array<DefaultListItemObj> = options.map((option, index) => {\n      const selected = isEqual(option.value, value)\n      const onSelectorChange = (): void => {\n        if (!disabled && !option.notSelectableRadioBtn) {\n          // Prevents VoiceOver from repeating accessibility label twice on changes\n          isIOS() && AccessibilityInfo.announceForAccessibility('')\n          onChange(option.value)\n        }\n      }\n      const textLines: Array<TextLine> = [{ text: option.labelKey, variant: 'VASelector', color: disabled ? 'checkboxDisabled' : 'primary' }]\n\n      if (option.additionalLabelText && option.additionalLabelText.length > 0) {\n        textLines[0].variant = 'MobileBodyBold'\n        option.additionalLabelText.forEach((item) => {\n          textLines.push({ text: item, variant: 'MobileBody' })\n        })\n      }\n\n      const radioButton: DefaultListItemObj = {\n        textLines,\n        decorator: option.notSelectableRadioBtn\n          ? ButtonDecoratorType.None\n          : disabled\n          ? ButtonDecoratorType.DisabledRadio\n          : selected\n          ? ButtonDecoratorType.FilledRadio\n          : ButtonDecoratorType.EmptyRadio,\n        onPress: onSelectorChange,\n        minHeight: 64,\n        a11yRole: 'radio',\n        a11yState: { selected: selected },\n        backgroundColor: selected ? 'listActive' : undefined,\n        testId: `${option.a11yLabel || option.labelKey} ${tc('optionOutOfTotal', { count: index + 1, totalOptions: options.length })}`,\n      }\n\n      return radioButton\n    })\n    return (\n      <Box>\n        <DefaultList items={listItems} title={radioListTitle} />\n      </Box>\n    )\n  }\n\n  const getRadios = (): ReactElement => {\n    return <Box>{isRadioList ? getRadioGroupList() : getStandardRadioGroup()}</Box>\n  }\n\n  return getRadios()\n}\n\nexport default RadioGroup\n",mdxType:"ComponentTopInfo"}))}b.isMDXComponent=!0}}]);