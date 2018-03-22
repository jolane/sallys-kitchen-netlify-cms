import React from 'react'

import TextBlock from '../components/TextBlock'
import ContactRow from '../components/ContactRow'

export default ({ title, text, large_text }) => (
  <TextBlock>
    <h4>{title}</h4>
    <div>
      <p>{text}</p>
    </div>
    <h5>
      {large_text.split('\n').map((line, index) => (
        <div key={index}>
          <span>{line}</span>
          <br />
        </div>
      ))}
    </h5>
    <ContactRow />
  </TextBlock>
)
