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
  const whatsCooking = data.whatsCooking.frontmatter
  const functions = data.functions.frontmatter
  const images = data.images.frontmatter
  const where = data.where.frontmatter
  return <Container>
      <About {...about} />
      <Images {...images} />
      <TheKitchen {...theKitchen} />
      <WhatsCooking {...whatsCooking} />
      <Functions {...functions} />
      <Latest />
      <Where {...where} />
      <Map />
    </Container>
}

export default IndexPage

const Container = styled.div`
  font-family: ${fonts["main-font"]}
`

export const mainQuery4 = graphql`
  query MainQuery4 {
    about: markdownRemark(fileAbsolutePath: { glob: "/**/About.md" }) {
      frontmatter {
        title
        paragraph
        large_text
        paragraph2
      }
    }
    images: markdownRemark(fileAbsolutePath : {glob : "/**/Images.md"}) {
      frontmatter {
        image_one
        image_two
        image_three
        image_four
      }
    }
    theKitchen: markdownRemark(fileAbsolutePath: { glob: "/**/TheKitchen.md" }) {
     frontmatter {
       title
       paragraph
      }
    }
    whatsCooking: markdownRemark(fileAbsolutePath: { glob: "/**/WhatsCooking.md"}) {
      frontmatter {
        title
        text
      }
    }
    functions: markdownRemark(fileAbsolutePath: { glob: "/**/Functions.md"}) {
      frontmatter {
        title
        text
        large_text
      }
    }
    where: markdownRemark(fileAbsolutePath: { glob: "/**/Where.md"}) {
      frontmatter {
        title
        text
        large_text
      }
    }
  }
`
