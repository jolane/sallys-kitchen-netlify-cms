import React from 'react'
import { StyleSheetManager } from 'styled-components'

import TheKitchen from '../sections/TheKitchen'

const TheKitchenPreview = ({ entry, widgetFor }) => {
  const iframe = document.querySelector('.nc-previewPane-frame')
  const iframeHeadElem = iframe.contentDocument.head

  return (
    <StyleSheetManager target={iframeHeadElem}>
      <TheKitchen
        title={entry.getIn(['data', 'title'])}
        paragraph={entry.getIn(['data', 'paragraph'])}
      />
    </StyleSheetManager>
  )
}

export default TheKitchenPreview
