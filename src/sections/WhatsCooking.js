import React from 'react'

import TextBlock from '../components/TextBlock'
import ContactRow from '../components/ContactRow'

export default ({ title, text }) => (
  <TextBlock>
    <h4>{title}</h4>
    <div>
      <p>{text}</p>
    </div>
  </TextBlock>
)
