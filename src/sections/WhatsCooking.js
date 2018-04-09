import React from 'react'

import TextBlock from '../components/TextBlock'
import ContactRow from '../components/ContactRow'

export default ({ cooking_title, cooking_text }) => (
  <TextBlock>
    <h4>{cooking_title}</h4>
    <div>
      <p>{cooking_text}</p>
    </div>
  </TextBlock>
)
