import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { fonts } from '../styles/vars'

import TextBlock from '../components/TextBlock'
import Images from '../components/Images'
import ContactRow from '../components/ContactRow'
import Latest from '../components/Latest'
import Where from '../components/Where'

const IndexPage = () => (
  <Container>
    <TextBlock>
      <h4>About Sally</h4>
      <div>
        <p>
          Sally fell passionately in love with food in her mother’s cozy
          kitchen. Now she has her own kitchen – a friendly place to enjoy
          delicious, traditional recipes and good company around the table.
        </p>
      </div>
      <h5>
        <span>Sally’s Kitchen serves deliciously simple,</span>
        <br />
        <span>modern food to be enjoyed with fine</span>
        <br />
        <span>wine and great company.</span>
      </h5>
      <div>
        <p>
          Sally’s food is fresh, flavourful and made with love. Using seasonal
          produce, her eclectic menu features anything and everything that takes
          her fancy. Simple dishes are created with care, integrity and quality
          ingredients. This is feel good food, just like Sally’s mother made.
        </p>
        <br />
        <br />
      </div>
    </TextBlock>
    <Images />
    <TextBlock>
      <h4>THE KITCHEN</h4>
      <div>
        <p>
          You’ll find Sally in the kitchen or chatting to guests most days. Take
          the time to sit and sample what’s cooking. It’s that type of local –
          where the people love cooking and know just how you like your coffee.
        </p>
      </div>
    </TextBlock>
    <TextBlock>
      <h4>WHAT’S COOKING</h4>
      <div>
        <p>
          Always fresh and local, here’s a selection of a few things we are
          dishing out at the moment. Come in and check out the full menu.
        </p>
      </div>
    </TextBlock>
    <TextBlock>
      <h4>FUNCTIONS</h4>
      <div>
        <p>
          Sally's Kitchen is perfect for CBD functions with the option of sit
          down meals or canapés matched with carefully selected local and
          international wines.
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
    <Latest />
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
    <Where />
  </Container>
)

export default IndexPage


const Container = styled.div`
  font-family: ${fonts["main-font"]}
`