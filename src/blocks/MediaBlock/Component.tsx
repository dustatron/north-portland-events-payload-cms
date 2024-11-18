import type { StaticImageData } from 'next/image'

import { cn } from 'src/utilities/cn'
import React from 'react'
import RichText from '@/components/RichText'

import type { MediaBlock as MediaBlockProps } from '@/payload-types'

import { Media } from '../../components/Media'

type Props = MediaBlockProps & {
  breakout?: boolean
  captionClassName?: string
  className?: string
  enableGutter?: boolean
  imgClassName?: string
  staticImage?: StaticImageData
  disableInnerContainer?: boolean
  iframeLink?: String | null
  iframeLinkHeight?: String | null
  iframeLinkWidth?: String | null
}

export const MediaBlock: React.FC<Props> = (props) => {
  const {
    captionClassName,
    className,
    enableGutter = true,
    imgClassName,
    media,
    position = 'default',
    staticImage,
    disableInnerContainer,
    iframeLink,
    iframeLinkHeight,
    iframeLinkWidth,
  } = props

  let caption
  if (media && typeof media === 'object') caption = media.caption

  return (
    <div
      className={cn(
        'flex justify-center',
        {
          container: position === 'default' && enableGutter,
        },
        className,
      )}
    >
      {position === 'fullscreen' && (
        <div className="relative md:px-25 sm:px-2 md:w-5/6 ">
          {iframeLink && (
            <iframe
              src={`${iframeLink}`}
              width={`${iframeLinkWidth || '100%'}`}
              height={`${iframeLinkHeight}`}
            />
          )}
          {!iframeLink && media && <Media resource={media} src={staticImage} />}
        </div>
      )}
      {position === 'default' && media && (
        <Media imgClassName={cn('rounded', imgClassName)} resource={media} src={staticImage} />
      )}
      {caption && (
        <div
          className={cn(
            'mt-6',
            {
              container: position === 'fullscreen' && !disableInnerContainer,
            },
            captionClassName,
          )}
        >
          <RichText content={caption} enableGutter={false} />
        </div>
      )}
    </div>
  )
}
