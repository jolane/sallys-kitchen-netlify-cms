import React from 'react'
import { StyleSheetManager } from 'styled-components'

import WhatsCooking from '../sections/WhatsCooking'

const WherePreview = ({ entry, widgetFor }) => {
  const iframe = document.querySelector('.nc-previewPane-frame')
  const iframeHeadElem = iframe.contentDocument.head

  return (
    <StyleSheetManager target={iframeHeadElem}>
      <Where
        title={entry.getIn(['data', 'title'])}
        text={entry.getIn(['data', 'text'])}
        large_text={entry.getIn(['data', 'large_text'])}
      />
    </StyleSheetManager>
  )
}

export default WherePreview
