import React from 'react'
import { StyleSheetManager } from 'styled-components'

import Functions from '../sections/Functions'

const FunctionsPreview = ({ entry, widgetFor }) => {
  const iframe = document.querySelector('.nc-previewPane-frame')
  const iframeHeadElem = iframe.contentDocument.head

  return (
    <StyleSheetManager target={iframeHeadElem}>
      <Functions
        title={entry.getIn(['data', 'title'])}
        text={entry.getIn(['data', 'text'])}
        large_text={entry.getIn(['data', 'large_text'])}
      />
    </StyleSheetManager>
  )
}

export default FunctionsPreview
