import React from 'react'

import TextBlock from '../components/TextBlock'

export default ({
  about_title,
  about_paragraph,
  about_large_text,
  about_paragraph2,
}) => (
  <TextBlock>
    <h4>{about_title}</h4>
    <div>
      <p>{about_paragraph}</p>
    </div>
    <h5>
      <span>{about_large_text}</span>
    </h5>
    <div>
      <p>{about_paragraph2}</p>
      <br />
      <br />
    </div>
  </TextBlock>
)
