import React from 'react'
import styled, { injectGlobal } from 'styled-components'

import { below } from '../styles/media'
import { fonts } from '../styles/vars'

export default props => (
  <section>
    <Heading>The Latest</Heading>
    <Wrapper>
      <div>
        <div
          className="cell"
          id="instagram-image"
          style={{ backgroundImage: 'url(/images/instagram.jpg)' }}
        >
          <div className="cell-inner">
            <h6 className="cell-heading">From Instragram</h6>
            <p className="cell-text" id="instagram-caption">
              Great food everyday with a few laughs.
            </p>
          </div>

          <a
            href="https://www.instagram.com/sallyskitchen_melb/"
            target="_blank"
            className="cell-action"
          >
            <span className="cell-circle">
              <svg className="icon cell-icon">
                <use xlinkHref="./icons.svg#icon-instagram" />
              </svg>
            </span>
            FOLLOW ON INSTAGRAM
          </a>
        </div>
        <div
          className="cell"
          style={{ backgroundImage: 'url(/images/facebook.jpg)' }}
        >
          <div className="cell-inner">
            <h6 className="cell-heading">From Facebook</h6>
            <p className="cell-text">Stop by, feel welcome, eat well.</p>
          </div>

          <a
            href="https://www.facebook.com/sallys.kitchen/"
            target="_blank"
            className="cell-action"
          >
            <span className="cell-circle">
              <svg className="icon cell-icon">
                <use xlinkHref="./icons.svg#icon-facebook" />
              </svg>
            </span>
            LIKE US ON FACEBOOK
          </a>
        </div>
        <div
          className="cell"
          style={{ backgroundImage: 'url(/images/events.jpg)' }}
        >
          <div className="cell-inner">
            <h6 className="cell-heading">Upcoming events</h6>
            <p className="cell-text">
              Sally is celebrating 8 years on July 13th
            </p>
          </div>

          <a
            href="https://www.facebook.com/sallys.kitchen/events"
            target="_blank"
            className="cell-action"
          >
            <span className="cell-circle">
              <svg className="icon cell-icon">
                <use xlinkHref="./icons.svg#icon-facebook" />
              </svg>
            </span>
            RSVP ON FACEBOOK
          </a>
        </div>
      </div>
    </Wrapper>
  </section>
)

const Wrapper = styled.section`
  width: 100%;
  height: 49.64vw;
  overflow: hidden;
  position: relative;

  ${below.m`
		height: auto;
	`};

  > div {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    ${below.m`
			position: relative;
		`};
  }

  .cell-inner {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    font-family: ${fonts['thin-heading']};
    font-size: 1.5em;
    line-height: 1.12;
    padding: 0 14%;
    box-sizing: border-box;
    color: #fff;
    position: relative;
    transition: all 0.3s linear;
    z-index: 2;

    ${below.m`
      display: block;
      width: 100%;
      padding: 50px 35px;
    `};
  }

  .cell {
    width: 33.3332%;
    height: 100%;
    float: left;
    display: table;
    position: relative;
    background-size: cover;
    background-position: center center;

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.35);
      transition: all 0.3s linear;

      ${below.m`
        height: calc(100% - 85px);
      `};
    }
    &:hover:after {
      background-color: rgba(0, 0, 0, 0.55);
    }

    ${below.m`
      width: 100%;
      height: auto;
      float: none;
    `};
  }

  /* .cell:hover .cell-inner {
    transform: translateY(-85px);
  } */

  .cell-action {
    background-color: #fff;
    display: block;
    width: 100%;
    height: 85px;
    line-height: 85px;
    position: absolute;
    top: 100%;
    left: 0;
    text-align: center;
    transition: all 0.3s linear;
    font-family: ${fonts['bold-heading']};
    font-size: 0.83em;
    color: inherit;
    text-decoration: none;
    z-index: 3;

    ${below.m`
      position: static;
      font-size: 1em;
    `};
  }

  .cell:hover .cell-action {
    transform: translateY(-85px);

    ${below.m`
      transform: none;
    `};
  }

  .cell-heading {
    font-size: 1.5rem;
    text-transform: uppercase;
    margin: 0 0 1.4em 0;
    font-family: ${fonts['main-font']};
    font-weight: normal;

    ${below.m`
      margin-bottom: 0.4em;
    `};
  }

  .cell-text {
    ${below.m`
      margin: 0;
      font-size: 1.35em;
    `};
  }

  .cell-circle {
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
    height: 47px;
    width: 47px;
    margin-right: 15px;
  }

  .cell-icon {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 12px;
    transition: all 0.2s linear;
    position: absolute;
    fill: $black;
    padding: 14px;
  }
`

const Heading = styled.h4`
  text-transform: uppercase;
  font-weight: normal;
  text-align: center;
  margin: 0 0 1.67em 0;
  padding-top: 3.4em;
  ${below.m`
    font-size: 1.25em;
  `};
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
`
