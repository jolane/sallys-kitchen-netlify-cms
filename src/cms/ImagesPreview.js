import React from 'react'
import { StyleSheetManager } from 'styled-components'

import Images from '../sections/Images'

const ImagesPreview = ({ entry, widgetFor }) => {
  const iframe = document.querySelector('.nc-previewPane-frame')
  const iframeHeadElem = iframe.contentDocument.head

  return (
    <StyleSheetManager target={iframeHeadElem}>
      <Images
        image_one={entry.getIn(['data', 'image_one'])}
        image_two={entry.getIn(['data', 'image_two'])}
        image_three={entry.getIn(['data', 'image_three'])}
        image_four={entry.getIn(['data', 'image_four'])}
      />
    </StyleSheetManager>
  )
}

export default ImagesPreview
