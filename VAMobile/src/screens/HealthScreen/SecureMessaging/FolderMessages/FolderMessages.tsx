import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types'
import { useTranslation } from 'react-i18next'
import React, { FC, ReactNode, useEffect } from 'react'

import { BackButton, Box, ChildTemplate, ErrorComponent, LoadingComponent, MessageList, Pagination, PaginationProps } from 'components'
import { BackButtonLabelConstants } from 'constants/backButtonLabels'
import { HealthStackParamList } from 'screens/HealthScreen/HealthStackScreens'
import { NAMESPACE } from 'constants/namespaces'
import { RootState } from 'store'
import { ScreenIDTypesConstants } from 'store/api/types/Screens'
import { SecureMessagingState, dispatchResetDeleteDraftComplete, listFolderMessages, resetSaveDraftComplete } from 'store/slices'
import { getMessagesListItems } from 'utils/secureMessaging'
import { useAppDispatch, useError, useTheme } from 'utils/hooks'
import { useSelector } from 'react-redux'
import ComposeMessageButton from '../ComposeMessageButton/ComposeMessageButton'
import NoFolderMessages from '../NoFolderMessages/NoFolderMessages'

type FolderMessagesProps = StackScreenProps<HealthStackParamList, 'FolderMessages'>

const FolderMessages: FC<FolderMessagesProps> = ({ navigation, route }) => {
  const { folderID, folderName } = route.params

  const { t } = useTranslation(NAMESPACE.HEALTH)
  const { t: tc } = useTranslation(NAMESPACE.COMMON)
  const dispatch = useAppDispatch()
  const theme = useTheme()
  const { messagesByFolderId, loading, paginationMetaByFolderId, saveDraftComplete, deleteDraftComplete } = useSelector<RootState, SecureMessagingState>(
    (state) => state.secureMessaging,
  )

  const paginationMetaData = paginationMetaByFolderId?.[folderID]
  const title = tc('text.raw', { text: folderName })

  useEffect(() => {
    // Load first page messages
    dispatch(listFolderMessages(folderID, 1, ScreenIDTypesConstants.SECURE_MESSAGING_FOLDER_MESSAGES_SCREEN_ID))
    // If draft saved message showing, clear status so it doesn't show again
    dispatch(resetSaveDraftComplete())
  }, [dispatch, folderID])

  useEffect(() => {
    if (saveDraftComplete) {
      // If draft saved message showing, clear status so it doesn't show again
      dispatch(resetSaveDraftComplete())
    }
  }, [dispatch, saveDraftComplete])

  useEffect(() => {
    if (deleteDraftComplete) {
      dispatch(dispatchResetDeleteDraftComplete())
    }
  }, [deleteDraftComplete, dispatch, t])

  const onMessagePress = (messageID: number, isDraft?: boolean): void => {
    const screen = isDraft ? 'EditDraft' : 'ViewMessageScreen'
    const args = isDraft
      ? { messageID, attachmentFileToAdd: {}, attachmentFileToRemove: {} }
      : { messageID, folderID, currentPage: paginationMetaData?.currentPage || 1, messagesLeft: messages.length }
    navigation.navigate(screen, args)
  }

  useEffect(() => {
    navigation.setOptions({
      headerLeft: (props): ReactNode => (
        <BackButton
          onPress={() => {
            navigation.goBack()
          }}
          canGoBack={props.canGoBack}
          label={BackButtonLabelConstants.back}
          focusOnButton={deleteDraftComplete ? false : true}
          showCarat={true}
        />
      ),
    })
  })

  if (useError(ScreenIDTypesConstants.SECURE_MESSAGING_FOLDER_MESSAGES_SCREEN_ID)) {
    return (
      <ChildTemplate backLabel={tc('messages')} backLabelOnPress={navigation.goBack} title={title}>
        <ErrorComponent screenID={ScreenIDTypesConstants.SECURE_MESSAGING_FOLDER_MESSAGES_SCREEN_ID} />
      </ChildTemplate>
    )
  }

  if (loading) {
    const text = t('secureMessaging.messages.loading')
    return (
      <ChildTemplate backLabel={tc('messages')} backLabelOnPress={navigation.goBack} title={title}>
        <LoadingComponent text={text} />
      </ChildTemplate>
    )
  }

  const folderMessages = messagesByFolderId ? messagesByFolderId[folderID] : { data: [], links: {}, meta: {} }
  const messages = folderMessages ? folderMessages.data : []

  if (messages.length === 0) {
    return (
      <ChildTemplate backLabel={tc('messages')} backLabelOnPress={navigation.goBack} title={title}>
        <NoFolderMessages folderName={folderName} />
      </ChildTemplate>
    )
  }

  const requestPage = (requestedPage: number) => {
    // request the next page
    dispatch(listFolderMessages(folderID, requestedPage, ScreenIDTypesConstants.SECURE_MESSAGING_FOLDER_MESSAGES_SCREEN_ID))
  }

  const renderPagination = (): ReactNode => {
    const page = paginationMetaData?.currentPage || 1
    const paginationProps: PaginationProps = {
      onNext: () => {
        requestPage(page + 1)
      },
      onPrev: () => {
        requestPage(page - 1)
      },
      totalEntries: paginationMetaData?.totalEntries || 0,
      pageSize: paginationMetaData?.perPage || 0,
      page,
    }

    return (
      <Box flex={1} mt={theme.dimensions.paginationTopPadding} mb={theme.dimensions.contentMarginBottom} mx={theme.dimensions.gutter}>
        <Pagination {...paginationProps} />
      </Box>
    )
  }

  return (
    <ChildTemplate backLabel={tc('messages')} backLabelOnPress={navigation.goBack} title={title}>
      <ComposeMessageButton />
      <Box mt={theme.dimensions.standardMarginBetween}>
        <MessageList items={getMessagesListItems(messages, t, onMessagePress, folderName)} />
      </Box>
      {renderPagination()}
    </ChildTemplate>
  )
}

export default FolderMessages
