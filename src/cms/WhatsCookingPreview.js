import React from 'react'
import { StyleSheetManager } from 'styled-components'

import WhatsCooking from '../sections/WhatsCooking'

const WhatsCookingPreview = ({ entry, widgetFor }) => {
  const iframe = document.querySelector('.nc-previewPane-frame')
  const iframeHeadElem = iframe.contentDocument.head

  return (
    <StyleSheetManager target={iframeHeadElem}>
      <WhatsCooking
        title={entry.getIn(['data', 'title'])}
        text={entry.getIn(['data', 'text'])}
      />
    </StyleSheetManager>
  )
}

export default WhatsCookingPreview
