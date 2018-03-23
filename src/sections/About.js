import React from 'react'

import TextBlock from '../components/TextBlock'

export default ({ title, paragraph, large_text, paragraph2 }) => (
  <TextBlock>
    <h4>{title}</h4>
    <div>
      <p>{paragraph}</p>
    </div>
    <h5>
      <span>{large_text}</span>
    </h5>
    <div>
      <p>{paragraph2}</p>
      <br />
      <br />
    </div>
  </TextBlock>
)
