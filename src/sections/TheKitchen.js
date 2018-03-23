import React from 'react'

import TextBlock from '../components/TextBlock'

export default ({ title, paragraph }) => (
  <TextBlock>
    <h4>{title}</h4>
    <div>
      <p>{paragraph}</p>
    </div>
  </TextBlock>
)
