import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { fonts } from '../styles/vars'

import TextBlock from '../components/TextBlock'
import ContactRow from '../components/ContactRow'

import About from '../sections/About'
import Images from '../sections/Images'
import Latest from '../sections/Latest'
import TheKitchen from '../sections/TheKitchen'
import WhatsCooking from '../sections/WhatsCooking'
import Functions from '../sections/Functions'
import Where from '../sections/Where'
import Hours from '../sections/Hours'
import Map from '../sections/Map'

const IndexPage = ({ data }) => {
  const content = data.markdownRemark.frontmatter
  return (
    <Container>
      <About {...content} />
      <Images {...content} />
      <TheKitchen {...content} />
      <WhatsCooking {...content} />
      <Functions {...content} />
      <Latest />
      <Where {...content} />
      <Hours {...content} />
      <Map />
    </Container>
  )
}

export default IndexPage

const Container = styled.div`
  font-family: ${fonts['main-font']};
`

export const mainQuery22 = graphql`
  query MainQuery22 {
    markdownRemark(fileAbsolutePath: { glob: "/**/Landing.md" }) {
      frontmatter {
        about_title
        about_paragraph
        about_large_text
        about_paragraph2
        image_one
        image_two
        image_three
        image_four
        kitchen_title
        kitchen_text
        cooking_title
        cooking_text
        functions_title
        functions_text
        functions_large_text
        where_title
        where_large_text
        where_text
        hours_title
        hours_text
      }
    }
  }
`
