import React from 'react'

import TextBlock from '../components/TextBlock'
import ContactRow from '../components/ContactRow'

export default ({ content }) => (
  <TextBlock>
    <h4>FUNCTIONS</h4>
    <div>
      <p>
        Sally's Kitchen is perfect for CBD functions with the option of sit down
        meals or canapés matched with carefully selected local and international
        wines.
      </p>
    </div>
    <h5>
      <span>Sally and her crew are here to help you</span>
      <br />
      <span>throw a special party, host a business</span>
      <br />
      <span>lunch or grab a bite before a show.</span>
    </h5>
    <ContactRow />
  </TextBlock>
)
