import React from 'react'

import TextBlock from '../components/TextBlock'

export default props => (
  <TextBlock>
    <h4>{props.where_title}</h4>
    <h5>
      <span>{props.where_large_text}</span>
    </h5>
    <div>
      <p>{props.where_text}</p>
    </div>
  </TextBlock>
)
