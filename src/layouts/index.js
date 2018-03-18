import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import styledNormalize from 'styled-normalize'
import { injectGlobal } from 'styled-components'
import '../styles/fonts'
import { below } from '../styles/media'

injectGlobal`
  ${styledNormalize}
  body {
    background-color: #efede4;
    font-size: 24px;
    line-height: 2;
    color: #1a1a1a;
    font-family: "Courier New", Courier, "Lucida Sans Typewriter", "Lucida Typewriter", monospace;

    ${below.m`
      font-size: 16px;
      line-height: 1.5;
    `}
  }
`

import Header from '../components/Header'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <main>
      {children()}
    </main>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
