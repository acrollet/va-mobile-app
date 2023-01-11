"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9760],{38909:function(e,n,r){r.d(n,{Z:function(){return c}});var t=r(67294),o=r(19055),i=r(26396),s=r(58215),a=r(82224),l=r(36005),d=function(e){var n=e.props;return n?t.createElement(t.Fragment,null,l.ZP.isEmpty(n)?t.createElement("pre",{className:"preText"},"This component does not have props defined"):t.createElement("table",null,t.createElement("thead",null,t.createElement("tr",null,t.createElement("th",null,"Name"),t.createElement("th",null,"Type"),t.createElement("th",null,"Default Value"),t.createElement("th",null,"Required"),t.createElement("th",null,"Description"))),t.createElement("tbody",null,Object.keys(n).map((function(e){var r;return t.createElement("tr",{key:e},t.createElement("td",null,t.createElement("code",null,e)),t.createElement("td",{style:{minWidth:200}},null==(r=n[e].type)?void 0:r.name),t.createElement("td",null,n[e].defaultValue&&n[e].defaultValue.value.toString()),t.createElement("td",null,n[e].required?"Yes":"No"),t.createElement("td",null,n[e].description))}))))):null};function c(e){var n=(0,a.N)(e.componentName)[0],r=n.description,l=n.displayName,c=n.props,p="How to use the "+l+" component",u="Full code for the "+l+" component";return t.createElement(t.Fragment,null,r,t.createElement("br",null),t.createElement("br",null),t.createElement(i.Z,null,t.createElement(s.Z,{value:"props",label:"Properties"},t.createElement(d,{props:c})),t.createElement(s.Z,{value:"example",label:"Example"},e.example&&t.createElement(o.Z,{title:p,className:"language-tsx test"},e.example)),t.createElement(s.Z,{value:"code",label:"Source Code"},e.codeString&&t.createElement(o.Z,{title:u,className:"language-tsx"},e.codeString)),t.createElement(s.Z,{value:"accessibility",label:"Accessibility"},t.createElement("pre",{className:"preText"},e.accessibilityInfo))))}},82224:function(e,n,r){r.d(n,{N:function(){return o}});var t=r(28084),o=function(e){return(0,t.default)()["docusaurus-plugin-react-docgen-typescript"].default.filter((function(n){return n.displayName===e}))}},70581:function(e,n,r){r.r(n),r.d(n,{contentTitle:function(){return d},default:function(){return f},exampleString:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var t=r(87462),o=r(63366),i=(r(67294),r(3905)),s=(r(19055),r(38909)),a=["components"],l={},d=void 0,c={unversionedId:"Engineering/FrontEnd/ComponentsSection/Selection and Input/FormWrapper",id:"Engineering/FrontEnd/ComponentsSection/Selection and Input/FormWrapper",title:"FormWrapper",description:"export const exampleString = `<FormWrapper",source:"@site/docs/Engineering/FrontEnd/ComponentsSection/Selection and Input/FormWrapper.mdx",sourceDirName:"Engineering/FrontEnd/ComponentsSection/Selection and Input",slug:"/Engineering/FrontEnd/ComponentsSection/Selection and Input/FormWrapper",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/Selection and Input/FormWrapper",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FormAttachments",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/Selection and Input/FormAttachments"},next:{title:"RadioGroup",permalink:"/va-mobile-app/docs/Engineering/FrontEnd/ComponentsSection/Selection and Input/RadioGroup"}},p=[],u="<FormWrapper \nfieldsList={pickerField} \nonSave={onUpload} \nonSaveClicked={onSaveClicked} \nsetOnSaveClicked={setOnSaveClicked} />",m={toc:p,exampleString:u};function f(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(s.Z,{componentName:"FormWrapper",example:u,codeString:"import React, { ReactElement, useCallback, useEffect, useState } from 'react'\n\nimport _ from 'lodash'\n\nimport {\n  Box,\n  FormAttachments,\n  FormAttachmentsProps,\n  RadioGroup,\n  RadioGroupProps,\n  VAModalPicker,\n  VAModalPickerProps,\n  VASelector,\n  VASelectorProps,\n  VATextInput,\n  VATextInputProps,\n} from '../index'\nimport { useTheme } from 'utils/hooks'\n\n/** enum to determine field input type */\nexport enum FieldType {\n  Selector = 'Selector',\n  Picker = 'Picker',\n  TextInput = 'TextInput',\n  Radios = 'Radios',\n  FormAttachmentsList = 'FormAttachmentsList',\n}\n\n/** contains function to compare against on save and on focus/blur, and its corresponding error message if the function fails */\nexport type ValidationFunctionItems = {\n  /** function that returns true if the validation fails */\n  validationFunction: () => boolean\n  /** error message to display if the validation fails */\n  validationFunctionErrorMessage: string\n}\n\n/** form field type that includes the index of the field in the list so that it can be used to find a specific field */\ntype FormFieldTypeWithUId<T> = Pick<FormFieldType<T>, 'fieldType' | 'fieldProps' | 'fieldErrorMessage'> & { index: number }\n\nexport type FormFieldType<T> = {\n  /** enum to determine if the field is a picker, text input, or checkbox selector */\n  fieldType: FieldType\n  /** props to pass into form input component */\n  fieldProps: VASelectorProps | VATextInputProps | VAModalPickerProps | RadioGroupProps<T> | FormAttachmentsProps\n  /** optional error message to display if the field is required and it hasn't been filled */\n  fieldErrorMessage?: string\n  /** optional list of validation functions to check against */\n  validationList?: Array<ValidationFunctionItems>\n}\n\n/**\n * Props for FormWrapper component\n */\ntype FormWrapperProps<T> = {\n  /** list of form field objects to display */\n  fieldsList: Array<FormFieldType<T>>\n  /** callback called when onSaveClicked is true and there are no field errors */\n  onSave: () => void\n  /** boolean that when set to true calls the form validation and set field errors if they exist, otherwise it calls onSave */\n  onSaveClicked: boolean\n  /** callback that updates the onSaveClicked prop */\n  setOnSaveClicked: (value: boolean) => void\n  /** optional callback that sets to true if the form currently has an error */\n  setFormContainsError?: (containsError: boolean) => void\n  /** optional boolean that resets all field errors when set to true */\n  resetErrors?: boolean\n  /** optional callback to set the resetErrors prop. must be set when resetErrors is set. */\n  setResetErrors?: (value: boolean) => void\n}\n\n/**A common component to wrap forms in that handles error states of each field*/\nconst FormWrapper = <T,>({ fieldsList, onSave, setFormContainsError, resetErrors, setResetErrors, onSaveClicked, setOnSaveClicked }: FormWrapperProps<T>): ReactElement => {\n  const theme = useTheme()\n  const [errors, setErrors] = useState<{ [key: number]: string }>({})\n\n  const updateFormContainsErrors = useCallback(\n    (value: boolean) => {\n      setFormContainsError && setFormContainsError(value)\n    },\n    [setFormContainsError],\n  )\n\n  useEffect(() => {\n    // if resetErrors is true, it clears the errors object\n    if (resetErrors) {\n      setErrors({})\n      updateFormContainsErrors(false)\n      setResetErrors && setResetErrors(false)\n    }\n  }, [resetErrors, setErrors, updateFormContainsErrors, setResetErrors])\n\n  // when onSaveClicked is true, it checks if all required fields are filled and if the validation functions pass. if true,\n  // calls onSave callback, otherwise calls setErrorsOnFormSaveFailure to update the error messages for the required\n  // fields that are not filled / failing validation functions\n  const onFormSave = useCallback(() => {\n    // Adds the field \"index\", which is the index of the field in the fieldsList, to each item\n    const getFieldListsWithIndexes = (): Array<FormFieldTypeWithUId<T>> => {\n      return fieldsList.map((obj, index) => ({ ...obj, index }))\n    }\n\n    // Using the fieldsList with the index fields, this returns all fields that are required but are\n    // empty or set to false (checkbox)\n    const getAllRequiredFieldsNotFilled = (): Array<FormFieldTypeWithUId<T>> => {\n      const fieldsListWithUIds = getFieldListsWithIndexes()\n\n      return fieldsListWithUIds.filter((el) => {\n        switch (el.fieldType) {\n          case FieldType.TextInput:\n            const textInputProps = el.fieldProps as VATextInputProps\n            return !textInputProps.value && textInputProps.isRequiredField\n          case FieldType.Picker:\n            const pickerProps = el.fieldProps as VAModalPickerProps\n            return !pickerProps.selectedValue && pickerProps.isRequiredField\n          case FieldType.Selector:\n            const checkboxProps = el.fieldProps as VASelectorProps\n            return !checkboxProps.selected && checkboxProps.isRequiredField\n          default:\n            // default returns false because the radio group and form attachments will not have field errors\n            return false\n        }\n      })\n    }\n\n    // Iterates over all required form fields that are not filled and updates the error messages for these fields\n    const setErrorsOnFormSaveFailure = (requiredFieldsNotFilled: Array<FormFieldTypeWithUId<T>>, errorsFromValidationFunctions: { [key: number]: string }): void => {\n      const updatedErrors: { [key: number]: string } = {}\n      _.forEach(requiredFieldsNotFilled, (field) => {\n        updatedErrors[field.index] = field.fieldErrorMessage || ''\n      })\n\n      const updatedErrorsObj = { ...errors, ...errorsFromValidationFunctions, ...updatedErrors }\n      if (!_.isEqual(errors, updatedErrorsObj)) {\n        setErrors(updatedErrorsObj)\n      }\n    }\n\n    // Returns any errors to be set if a validation function failed\n    const checkAgainstValidationFunctions = () => {\n      const updatedErrors: { [key: number]: string } = {}\n\n      _.forEach(fieldsList, (field, index) => {\n        if (field.validationList) {\n          const result = field.validationList.filter((el) => {\n            return el.validationFunction()\n          })\n\n          // if there are items in the result that means that that validation function failed\n          if (result.length > 0) {\n            _.forEach(result, (item) => {\n              updatedErrors[index] = item.validationFunctionErrorMessage\n            })\n          }\n        }\n      })\n\n      return updatedErrors\n    }\n\n    const requiredFieldsNotFilled = getAllRequiredFieldsNotFilled()\n    const errorsFromValidationFunctions = checkAgainstValidationFunctions()\n\n    if (requiredFieldsNotFilled.length === 0 && _.isEmpty(errorsFromValidationFunctions)) {\n      if (!_.isEmpty(errors)) {\n        setErrors({})\n      }\n\n      updateFormContainsErrors(false)\n      onSave()\n    } else {\n      updateFormContainsErrors(true)\n      setErrorsOnFormSaveFailure(requiredFieldsNotFilled, errorsFromValidationFunctions)\n    }\n  }, [onSave, updateFormContainsErrors, errors, fieldsList])\n\n  useEffect(() => {\n    if (onSaveClicked) {\n      onFormSave()\n      setOnSaveClicked(false)\n    }\n  }, [onSaveClicked, onFormSave, setOnSaveClicked])\n\n  // sets the field error in the errors object based on its index, if its a string it sets it to the given errorMessage\n  // otherwise, it sets it to the fieldErrorMessage if it exists\n  const setFormError = (errorMessage: string | undefined, index: number, fieldErrorMessage: string | undefined): void => {\n    if (typeof errorMessage === 'string') {\n      const updatedErrors = { ...errors, [index]: errorMessage }\n      setErrors(updatedErrors)\n      const errorStillExists = _.values(updatedErrors).some((el) => el !== '')\n\n      if (errorStillExists) {\n        updateFormContainsErrors(true)\n      } else {\n        updateFormContainsErrors(false)\n      }\n\n      return\n    }\n\n    updateFormContainsErrors(true)\n\n    if (fieldErrorMessage) {\n      setErrors({ ...errors, [index]: fieldErrorMessage })\n    }\n  }\n\n  // returns the corresponding component based on the fields fieldType\n  const getFormComponent = (field: FormFieldType<T>, index: number): ReactElement => {\n    const { fieldType, fieldProps, fieldErrorMessage, validationList } = field\n\n    switch (fieldType) {\n      case FieldType.Picker:\n        return (\n          <VAModalPicker\n            {...(fieldProps as VAModalPickerProps)}\n            validationList={validationList}\n            setError={(errorMessage?: string) => setFormError(errorMessage, index, fieldErrorMessage)}\n            error={errors[index]}\n          />\n        )\n      case FieldType.TextInput:\n        return (\n          <VATextInput\n            {...(fieldProps as VATextInputProps)}\n            validationList={validationList}\n            setError={(errorMessage?: string) => setFormError(errorMessage, index, fieldErrorMessage)}\n            error={errors[index]}\n          />\n        )\n      case FieldType.Selector:\n        return <VASelector {...(fieldProps as VASelectorProps)} setError={(errorMessage?: string) => setFormError(errorMessage, index, fieldErrorMessage)} error={errors[index]} />\n      case FieldType.Radios:\n        return <RadioGroup {...(fieldProps as RadioGroupProps<T>)} />\n      case FieldType.FormAttachmentsList:\n        return <FormAttachments {...(fieldProps as FormAttachmentsProps)} />\n    }\n  }\n\n  const generateForm = (): ReactElement[] => {\n    return _.map(fieldsList, (field, index) => {\n      return (\n        <Box mt={index === 0 ? 0 : theme.dimensions.formMarginBetween} key={index}>\n          {getFormComponent(field, index)}\n        </Box>\n      )\n    })\n  }\n\n  return <Box>{generateForm()}</Box>\n}\n\nexport default FormWrapper\n",mdxType:"ComponentTopInfo"}))}f.isMDXComponent=!0}}]);