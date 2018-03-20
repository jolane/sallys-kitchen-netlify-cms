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
      title="Sally's Kitchen - Shop one, 295 Exhibition St Melbourne, 3000"
      meta={[
        {
          name: 'description',
          content:
            'Sally’s Kitchen serves deliciously simple, modern food to be enjoyed with fine wine and great company.',
        },
      ]}
    />
    <Header words={data.intro.frontmatter.is_words} />
    <main>{children()}</main>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper


export const layoutQuery2 = graphql`
  query LayoutQuery2 {
    intro: markdownRemark(fileAbsolutePath: { glob: "/**/Intro.md" }) {
      frontmatter {
        is_words
      }
    }
  }
`
