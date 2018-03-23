import React from 'react'
import styled from 'styled-components'

import { below } from '../styles/media'

export default ({ children }) => (
  <section>
    <Wrapper>{children}</Wrapper>
  </section>
)

const Wrapper = styled.div`
  max-width: 960px;
  position: relative;
  margin: 0 auto;
  padding: 3.4em 0 0 0;
  ${below.m`
	width: 100%;
  `};

  > div {
    padding: 0 180px;
    ${below.m`
      padding: 0 35px;
    `};

    > p {
      margin: 0 0 2.5em 0;
      white-space: pre-line;
    }
  }

  h4 {
    text-transform: uppercase;
    font-weight: normal;
    text-align: center;
    margin: 0 0 1.67em 0;

    &:after {
      content: '';
      display: inline-block;
      height: 3px;
      width: 3px;
      background-color: #000;
      border-radius: 50%;
      vertical-align: middle;
      margin-left: 0.625em;
    }

    &:before {
      content: '';
      display: inline-block;
      height: 3px;
      width: 3px;
      background-color: #000;
      border-radius: 50%;
      vertical-align: middle;
      margin-right: 0.625em;
    }

    ${below.m`
			font-size: 1.25em;
	  `};
  }

  h5 {
    font-family: 'GT Walsheim Thin';
    font-size: 2.25em;
    line-height: 1.33;
    padding: 0;

    & span {
      border-bottom: 1px dashed #1a1a1a;
    }

    ${below.m`
      font-size: 1.68em;
      padding: 0 35px;

      & br {
        display: none;
      }
    `};
  }
`
