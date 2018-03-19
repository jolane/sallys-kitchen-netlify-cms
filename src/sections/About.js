import React from 'react'

import TextBlock from '../components/TextBlock'
import ContactRow from '../components/ContactRow'

export default ({title, paragraph, callout, paragraph2}) => (
  <TextBlock>
    <h4>{title}</h4>
    <div>
      <p>{paragraph}</p>
    </div>
    <h5>
      {callout.map((line, index) => (
        <div key={index}>
          <span>{line}</span>
          <br />
        </div>
      ))}
    </h5>
    <div>
      <p>{paragraph2}</p>
      <br />
      <br />
    </div>
  </TextBlock>
)