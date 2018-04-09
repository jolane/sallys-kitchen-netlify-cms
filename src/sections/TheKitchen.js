import React from 'react'

import TextBlock from '../components/TextBlock'

export default ({ kitchen_title, kitchen_text }) => (
  <TextBlock>
    <h4>{kitchen_title}</h4>
    <div>
      <p>{kitchen_text}</p>
    </div>
  </TextBlock>
)
