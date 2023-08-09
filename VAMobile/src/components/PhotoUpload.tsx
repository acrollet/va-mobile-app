// import { Asset } from 'react-native-image-picker/src/types'
import { Image, Pressable, PressableProps } from 'react-native'
import { ImagePickerResponse, launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { useTranslation } from 'react-i18next'
import React, { FC, ReactNode, useState } from 'react'
import styled from 'styled-components'

import { NAMESPACE } from 'constants/namespaces'
import { VAIcon } from './index'
import { themeFn } from 'utils/theme'
import { useDestructiveActionSheet, useShowActionSheet } from 'utils/hooks'
import { useTheme } from 'utils/hooks'
import Box, { BorderColorVariant, BoxProps } from './Box'
import TextView from './TextView'
import theme from 'styles/themes/standardTheme'

type PhotoUploadProps = {
  /** width of the photo */
  width: number
  /** height of the photo */
  height: number
  /** imagePickerResponse with asset to style for component and fileSize */
}

type StyledImageProps = {
  /** prop to set image width */
  width: number
  /** prop to set image height */
  height: number
  /** Hardcoded radius of 50 due to circular design plan */
  borderRadius: number
  /** Hardcoded radius of 2 due to design plan */
  borderWidth: number
  /** Hardcoded border color of white */
  borderColor: string
}

const StyledImage = styled(Image)<StyledImageProps>`
  width: ${themeFn<StyledImageProps>((_theme, props) => props.width)}px;
  height: ${themeFn<StyledImageProps>((_theme, props) => props.height)}px;
  border-radius: ${themeFn<StyledImageProps>((_theme, props) => props.borderRadius)}px;
  border-width: ${themeFn<StyledImageProps>((_theme, props) => props.borderWidth)}px;
  border-color: ${themeFn<StyledImageProps>((_theme, props) => props.borderColor)};
`

const PhotoUpload: FC<PhotoUploadProps> = ({ width, height }) => {
  const { t } = useTranslation(NAMESPACE.COMMON)
  const confirmAlert = useDestructiveActionSheet()
  const photoUploadBorderRadius = 50
  const photoUploadBorderWidth = 2
  const showActionSheetWithOptions = useShowActionSheet()
  const [uri, setUri] = useState('')
  const theme = useTheme()
  const options = [t('fileUpload.camera'), t('fileUpload.photoGallery'), t('cancel')]
  const uploadBorderColor = theme.colors.border.photoUpload

  const photo = (): ReactNode => {
    return (
      <StyledImage source={{ uri }} width={width} height={height} borderRadius={photoUploadBorderRadius} borderWidth={photoUploadBorderWidth} borderColor={uploadBorderColor} />
    )
  }

  const uploadCallback = (response: ImagePickerResponse): void => {
    const { assets, errorMessage, didCancel } = response
    if (didCancel) {
      return
    } else if (errorMessage) {
      //TODO Snackbar in this case? Discuss error cases
      return
    } else {
      if (assets?.length === 0) {
        return
      }
      if (assets && assets[0] && assets[0].uri) {
        setUri(assets[0].uri)
      }
    }
  }

  const onPress = (): void => {
    if (uri) {
      confirmAlert({
        title: t('removePhoto'),
        cancelButtonIndex: 0,
        destructiveButtonIndex: 1,
        buttons: [
          {
            text: t('keep'),
            onPress: () => {},
          },
          {
            text: t('remove'),
            onPress: () => {
              setUri('')
            },
          },
        ],
      })
    } else {
      showActionSheetWithOptions(
        {
          options,
          cancelButtonIndex: 2,
        },
        (buttonIndex) => {
          switch (buttonIndex) {
            case 0:
              launchCamera({ mediaType: 'photo', quality: 0.9, includeBase64: true }, (response: ImagePickerResponse): void => {
                uploadCallback(response)
              })
              break
            case 1:
              launchImageLibrary({ selectionLimit: 1, mediaType: 'photo', quality: 0.9, includeBase64: true }, (response: ImagePickerResponse): void => {
                uploadCallback(response)
              })
              break
          }
        },
      )
    }
  }

  const pressableProps: PressableProps = {
    onPress,
    accessibilityRole: 'button',
  }

  const boxProps: BoxProps = {
    borderRadius: photoUploadBorderRadius,
    width: width,
    height: height,
  }

  return (
    <Pressable {...pressableProps}>
      <Box {...boxProps}>
        {uri ? (
          <Box>{photo()}</Box>
        ) : (
          <Box alignItems="center">
            <VAIcon name="UploadPhoto" />
            <TextView variant="HelperText">Upload Photo</TextView>
          </Box>
        )}
      </Box>
    </Pressable>
  )
}

export default PhotoUpload
