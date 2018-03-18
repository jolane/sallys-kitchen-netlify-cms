import React from 'react'
import styled from 'styled-components'

import { below } from '../styles/media'
import { fonts } from '../styles/vars'


export default () => (
  <Wrapper>
    <a href="mailto:orders@sallyskitchen.com.au" className="item">
      <span className="circle">
        <svg className="icon">
          <use xlinkHref="/icons.svg#icon-letter" />
        </svg>
      </span>
      Email Sally
    </a>
    <a className="item">
      <span className="circle">
        <svg className="icon">
          <use xlinkHref="/icons.svg#icon-phone" />
        </svg>
      </span>
      (03) 9650 9222
    </a>
  </Wrapper>
)



const Wrapper = styled.div`
  text-align: center;

  ${below.m`
      padding: 0 35px;
      text-align: left;
  `};

  & .item {
    display: inline-block;
    height: 52px;
    line-height: 52px;
    vertical-align: middle;
    margin: 0 22px;
    font-family: ${fonts['medium-heading']};
    cursor: pointer;
    color: inherit;
    text-decoration: none;

    ${below.m`
      display: block;
      margin: 0 0 0px 0;
      font-size: 1.125em;
	`};
  }

  & .circle {
    height: 52px;
    width: 52px;
    box-sizing: border-box;
    border-radius: 50%;
    display: inline-block;
    border: 1px solid #ccc;
    margin-right: 6px;
    position: relative;
    vertical-align: middle;
    transition: all 0.2s linear;

    ${below.m`
      height: 37px;
      width: 37px;
    `};
  }
  & .item:hover .circle {
    background-color: #000;
  }

  & .icon {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 12px;
    transition: all 0.2s linear;
    ${below.m`
      padding: 8px;
      fill: #666;
    `};
  }

  & .item:hover .icon {
    fill: #fff;
  }
`