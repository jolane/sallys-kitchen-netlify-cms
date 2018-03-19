import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { injectGlobal } from 'styled-components'
import normalizeCss from '../../static/styles/normalize.css'
import globalCss from '../../static/styles/global.css'
injectGlobal`
  ${normalizeCss}
  ${globalCss}
`

import Header from '../sections/Header'

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header words={data.intro.frontmatter.words} />
    <main>
      {children()}
    </main>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper


export const layoutQuery = graphql`
  query LayoutQuery {
    intro: markdownRemark(fileAbsolutePath: { glob: "/**/Intro.md" }) {
      frontmatter {
        words
      }
    }
  }
`
