"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8731],{8738:function(n,e,t){t.r(e),t.d(e,{contentTitle:function(){return c},default:function(){return f},exampleString:function(){return d},frontMatter:function(){return m},metadata:function(){return l},toc:function(){return p}});var o=t(7462),i=t(3366),r=(t(7294),t(3905)),s=(t(9055),t(8909)),a=["components"],m={},c=void 0,l={unversionedId:"Engineering/FrontEnd/ComponentsSection/FormComponents/FormAttachments",id:"Engineering/FrontEnd/ComponentsSection/FormComponents/FormAttachments",isDocsHomePage:!1,title:"FormAttachments",description:"export const exampleString = `<FormAttachments",source:"@site/docs/Engineering/FrontEnd/ComponentsSection/FormComponents/FormAttachments.mdx",sourceDirName:"Engineering/FrontEnd/ComponentsSection/FormComponents",slug:"/Engineering/FrontEnd/ComponentsSection/FormComponents/FormAttachments",permalink:"/docs/Engineering/FrontEnd/ComponentsSection/FormComponents/FormAttachments",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NetworkConnectionError",permalink:"/docs/Engineering/FrontEnd/ComponentsSection/ErrorComponents/NetworkConnectionError"},next:{title:"FormWrapper",permalink:"/docs/Engineering/FrontEnd/ComponentsSection/FormComponents/FormWrapper"}},p=[],d="<FormAttachments \nattachmentsList={[ { name: 'file.txt' }, { fileName: 'image.jpeg' } ]} \nremoveOnPress={() => {}} \nlargeButtonProps={{ label: 'add files', onPress: () => {} }} />",u={toc:p,exampleString:d};function f(n){var e=n.components,t=(0,i.Z)(n,a);return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(s.Z,{componentName:"FormAttachments",example:d,codeString:'import React, { FC, ReactNode } from \'react\'\n\nimport { Asset, ImagePickerResponse } from \'react-native-image-picker/src/types\'\nimport _ from \'underscore\'\n\nimport { Box, ButtonTypesConstants, TextView, VAButton, VAButtonProps, VAIcon } from \'components/index\'\nimport { DocumentPickerResponse } from \'screens/ClaimsScreen/ClaimsStackScreens\'\nimport { NAMESPACE } from \'constants/namespaces\'\nimport { a11yHintProp, testIdProps } from \'utils/accessibility\'\nimport { bytesToFinalSizeDisplay } from \'utils/common\'\nimport { useRouteNavigation, useTheme, useTranslation } from \'utils/hooks\'\n\nexport type FormAttachmentsProps = {\n  /** header for page title display */\n  originHeader: string\n  /** callback called on click of remove link for an attachment */\n  removeOnPress?: (attachment: ImagePickerResponse | DocumentPickerResponse) => void\n  /** optional props for large button */\n  largeButtonProps?: Omit<VAButtonProps, \'iconProps\' | \'buttonType\'>\n  /** list of current attachments */\n  attachmentsList?: Array<ImagePickerResponse | DocumentPickerResponse>\n  /** optional a11y Hint */\n  a11yHint?: string\n}\n\n/**A common component for form attachments, displays Attachments heading with helper link, already attached items with remove option, and an optional large button. */\nconst FormAttachments: FC<FormAttachmentsProps> = ({ originHeader, removeOnPress, largeButtonProps, attachmentsList, a11yHint }) => {\n  const theme = useTheme()\n  const t = useTranslation(NAMESPACE.COMMON)\n  const tFunction = useTranslation()\n  const navigateTo = useRouteNavigation()\n\n  const renderFileNames = (): ReactNode => {\n    return _.map(attachmentsList || [], (attachment, index) => {\n      let fileName: string | undefined\n      let fileSize: number | undefined\n\n      if (\'assets\' in attachment) {\n        const { fileName: name, fileSize: size } = attachment.assets ? attachment.assets[0] : ({} as Asset)\n        fileName = name || \'\'\n        fileSize = size\n      } else if (\'size\' in attachment) {\n        const { name, size } = attachment\n        fileName = name || \'\'\n        fileSize = size\n      }\n\n      const formattedFileSize = fileSize ? bytesToFinalSizeDisplay(fileSize, tFunction) : \'\'\n      const text = [fileName, formattedFileSize].join(\' \').trim()\n\n      return (\n        <Box display="flex" flexDirection="row" justifyContent="space-between" flexWrap="wrap" mt={index !== 0 ? theme.dimensions.condensedMarginBetween : 0} key={index}>\n          <Box display="flex" flexDirection="row" alignItems="center" flexWrap="wrap">\n            <VAIcon name="PaperClip" width={16} height={16} fill="spinner" />\n            <TextView variant="MobileBodyBold" ml={theme.dimensions.textIconMargin}>\n              {text}\n            </TextView>\n          </Box>\n\n          <Box display="flex" flexDirection="row" alignItems="center">\n            <VAIcon name="Remove" {...iconProps} />\n            <TextView\n              variant="HelperText"\n              ml={theme.dimensions.textIconMargin}\n              color="link"\n              textDecoration="underline"\n              textDecorationColor="link"\n              accessibilityRole="link"\n              {...testIdProps(t(\'remove\'))}\n              {...a11yHintProp(t(\'remove.a11yHint\', { content: fileName }))}\n              onPress={() => (removeOnPress ? removeOnPress(attachment) : {})}>\n              {t(\'remove\')}\n            </TextView>\n          </Box>\n        </Box>\n      )\n    })\n  }\n\n  const iconProps = {\n    width: 16,\n    height: 16,\n    fill: \'link\',\n  }\n\n  const attachmentsDoNotExist = !attachmentsList || attachmentsList.length === 0\n\n  const goToFaq = navigateTo(\'AttachmentsFAQ\', { originHeader: originHeader })\n\n  return (\n    <Box minHeight={theme.dimensions.touchableMinHeight}>\n      <Box display="flex" flexDirection="row" justifyContent="space-between" flexWrap="wrap">\n        <TextView>{t(\'attachments\')}</TextView>\n        <Box display="flex" flexDirection="row" alignItems="center" flexWrap="wrap">\n          <VAIcon name="QuestionMark" {...iconProps} />\n          <TextView\n            onPress={goToFaq}\n            variant="HelperText"\n            ml={theme.dimensions.textIconMargin}\n            color="link"\n            textDecoration="underline"\n            textDecorationColor="link"\n            accessibilityRole="link"\n            accessibilityHint={a11yHint ? a11yHint : undefined}\n            accessibilityLabel={t(\'howToAttachAFile\')}>\n            {t(\'howToAttachAFile\')}\n          </TextView>\n        </Box>\n      </Box>\n      <Box mt={theme.dimensions.standardMarginBetween} mb={attachmentsDoNotExist || !largeButtonProps ? 0 : theme.dimensions.standardMarginBetween}>\n        {renderFileNames()}\n      </Box>\n      {!!largeButtonProps && <VAButton {...largeButtonProps} buttonType={ButtonTypesConstants.buttonSecondary} iconProps={{ ...iconProps, fill: \'active\', name: \'PaperClip\' }} />}\n    </Box>\n  )\n}\n\nexport default FormAttachments\n',mdxType:"ComponentTopInfo"}))}f.isMDXComponent=!0}}]);