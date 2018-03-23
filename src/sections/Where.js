import React from 'react'

import TextBlock from '../components/TextBlock'
import ContactRow from '../components/ContactRow'

export default props => (
  <TextBlock>
    <h4>{props.title}</h4>
    <h5>
      <span>{props.large_text}</span>
    </h5>
    <div>
      <p>{props.text}</p>
    </div>
    <ContactRow />
  </TextBlock>
)
