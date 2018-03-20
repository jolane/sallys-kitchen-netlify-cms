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
  const theKitchen = data.theKitchen.frontmatter
  return (
    <Container>
      <About { ...about} />
      <Images />
      <TheKitchen {...theKitchen} />
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

export const mainQuery1 = graphql`
  query MainQuery {
    about: markdownRemark(fileAbsolutePath: { glob: "/**/About.md" }) {
      frontmatter {
        title
        paragraph
        large_text
        paragraph2
      }
    }
    theKitchen: markdownRemark(fileAbsolutePath: { glob: "/**/TheKitchen.md" }) {
     frontmatter {
       title
       paragraph
      }
    }
  }
`
