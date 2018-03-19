import React from 'react'

import About from '../sections/About'

const AboutPreview = ({ entry, widgetFor }) => (
  <About
    title={entry.getIn(['data', 'title'])}
    paragraph={entry.getIn(['data', 'paragraph'])}
    paragraph2={entry.getIn(['data', 'paragraph2'])}
    callout={entry.getIn(['data', 'callout'])}
  />
)

export default AboutPreview
