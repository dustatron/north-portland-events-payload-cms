import type { IframeBlock as IframeBlockProps } from '@/payload-types'

import React from 'react'

export const IframeBlock: React.FC<IframeBlockProps> = async (props) => {
  const { id, iframeLink, blockName } = props

  return (
    <div className="my-16" id={`block-iframe-${id}`}>
      <div>{iframeLink}</div>
      <div>{blockName}</div>
      <div>calendar test</div>
      <iframe src={`${iframeLink}`} width="100%" height="350" frameBorder="0"></iframe>
    </div>
  )
}
