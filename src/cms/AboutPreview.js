import React from 'react'
import { StyleSheetManager } from 'styled-components'

import About from '../sections/About'

const AboutPreview = ({ entry, widgetFor }) => {
  const iframe = document.querySelector('.nc-previewPane-frame')
  const iframeHeadElem = iframe.contentDocument.head

  return (
    <StyleSheetManager target={iframeHeadElem}>
      <About
        title={entry.getIn(['data', 'title'])}
        paragraph={entry.getIn(['data', 'paragraph'])}
        paragraph2={entry.getIn(['data', 'paragraph2'])}
        large_text={entry.getIn(['data', 'large_text'])}
      />
    </StyleSheetManager>
  )
}

export default AboutPreview
