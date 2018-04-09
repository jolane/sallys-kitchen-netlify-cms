import React from 'react'

import TextBlock from '../components/TextBlock'
import ContactRow from '../components/ContactRow'

export default props => (
  <TextBlock>
    <h4>{props.hours_title}</h4>
    <div>
      <p>{props.hours_text}</p>
    </div>
    <ContactRow />
  </TextBlock>
)
