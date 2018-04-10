import React from 'react'

import TextBlock from '../components/TextBlock'
import ContactRow from '../components/ContactRow'

export default ({ cooking_title, cooking_text, breakfast_menu }) => (
  <TextBlock>
    <h4>{cooking_title}</h4>
    <div>
      <p>{cooking_text}</p>
      <p>
        <a href={breakfast_menu} title="Menu">
          Click here to download our menu.
        </a>
      </p>
    </div>
  </TextBlock>
)
