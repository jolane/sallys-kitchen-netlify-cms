import React from 'react'

import TextBlock from '../components/TextBlock'
import ContactRow from '../components/ContactRow'

export default ({ functions_title, functions_text, functions_large_text }) => (
  <TextBlock>
    <h4>{functions_title}</h4>
    <div>
      <p>{functions_text}</p>
    </div>
    <h5>
      <span>{functions_large_text}</span>
    </h5>
    <ContactRow />
  </TextBlock>
)
