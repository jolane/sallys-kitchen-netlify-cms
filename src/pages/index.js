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
import Map from '../sections/Map'


const IndexPage = ({ data }) => {
  const about = data.about.frontmatter;
  return (
    <Container>
      <About { ...about} />
      <Images />
      <TheKitchen />
      <WhatsCooking />
      <Functions />
      <Latest />
      <Where />
      <Map />
    </Container>
  )
}

export default IndexPage

const Container = styled.div`
  font-family: ${fonts["main-font"]}
`

export const mainQuery = graphql`
  query MainQuery {
    about: markdownRemark(fileAbsolutePath: { glob: "/**/About.md" }) {
      frontmatter {
        title
        paragraph
        callout
        paragraph2
      }
    }
  }
`
