import React from 'react'

import TextBlock from '../components/TextBlock'
import ContactRow from '../components/ContactRow'

export default () => (
  <TextBlock>
    <h4>Where to find sally</h4>
    <h5>
      <span>
        Sally’s Kitchen is a longstanding favourite of Melbourne’s city food
        scene.
      </span>
    </h5>
    <div>
      <p>
        Sally’s Kitchen is a friendly and relaxed place to enjoy great food.
      </p>
      <p>
        Find Sally talking up a storm and serving delicious food at{' '}
        <u>Shop one 295 Exhibition St Melbourne, 3000</u>
      </p>
      <p>
        If you’d like to make a booking or talk about putting together a
        fabulous function, please call Sally and her team.
      </p>
    </div>
    <ContactRow />
  </TextBlock>
)