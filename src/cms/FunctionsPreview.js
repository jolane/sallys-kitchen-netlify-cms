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
        paragraph={entry.getIn(['data', 'paragraph'])}
        paragraph2={entry.getIn(['data', 'paragraph2'])}
        callout={entry.getIn(['data', 'callout'])}
      />
    </StyleSheetManager>
  )
}

export default FunctionsPreview
