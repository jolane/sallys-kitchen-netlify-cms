import React from 'react'
import { StyleSheetManager } from 'styled-components'

import About from '../sections/About'
import Images from '../sections/Images'
import TheKitchen from '../sections/TheKitchen'
import WhatsCooking from '../sections/WhatsCooking'
import Where from '../sections/Where'

const AboutPreview = ({ entry, widgetFor }) => {
  const iframe = document.querySelector('.nc-previewPane-frame')
  const iframeHeadElem = iframe.contentDocument.head

  return (
    <StyleSheetManager target={iframeHeadElem}>
      <div>
        <About
          about_title={entry.getIn(['data', 'about_title'])}
          about_paragraph={entry.getIn(['data', 'about_paragraph'])}
          about_large_text={entry.getIn(['data', 'about_large_text'])}
          about_paragraph2={entry.getIn(['data', 'about_paragraph2'])}
        />

        <Images
          image_one={entry.getIn(['data', 'image_one'])}
          image_two={entry.getIn(['data', 'image_two'])}
          image_three={entry.getIn(['data', 'image_three'])}
          image_four={entry.getIn(['data', 'image_four'])}
        />

        <TheKitchen
          kitchen_title={entry.getIn(['data', 'kitchen_title'])}
          kitchen_text={entry.getIn(['data', 'kitchen_text'])}
        />

        <WhatsCooking
          cooking_title={entry.getIn(['data', 'cooking_title'])}
          cooking_text={entry.getIn(['data', 'cooking_text'])}
        />

        <WhatsCooking
          cooking_title={entry.getIn(['data', 'cooking_title'])}
          cooking_text={entry.getIn(['data', 'cooking_text'])}
        />

        <Where
          where_title={entry.getIn(['data', 'where_title'])}
          where_large_text={entry.getIn(['data', 'where_large_text'])}
          where_paragraph={entry.getIn(['data', 'where_paragraph'])}
        />
      </div>
    </StyleSheetManager>
  )
}

export default AboutPreview
