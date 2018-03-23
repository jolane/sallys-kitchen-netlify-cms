import React from 'react'
import styled from 'styled-components'

import { box } from '../styles/mixins'
import { below } from '../styles/media'
import { fonts } from '../styles/vars'

import MakeABooking from '../components/MakeABooking'
import Intro from '../components/Intro'

export default ({ words }) => (
  <Wrapper>
    <Inner>
      <Logo>
        <svg>
          <use xlinkHref="/icons.svg#sallys-kitchen-logo" />
        </svg>
      </Logo>
      <MakeABooking />
      <Intro words={words} />
      <ZoomingImage />
    </Inner>
  </Wrapper>
)

const Wrapper = styled.header`
  width: 100%;
  height: 56.25vw;
  position: relative;
  overflow: hidden;
  ${below.m`
	height: 90vw;
  `};
`

const Inner = styled.div`
  position: relative;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  &:after {
    content: '';
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 1;
    background: -moz-radial-gradient(
      center,
      ellipse cover,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.8) 100%
    ); /* FF3.6-15 */
    background: -webkit-radial-gradient(
      center,
      ellipse cover,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.8) 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.8) 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#cc000000',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  }
`

const Logo = styled.h1`
  ${box(262, 32)} margin: 0;
  padding: 0;
  position: absolute;
  z-index: 200;
  left: 80px;
  top: 70px;
  width: 18%;
  ${below.m`
	top: 30px;
	left: 25px;
	width: 47%;
  `};

  > svg {
    fill: #fff;
  }
`

const ZoomingImage = styled.div`
  background-size: cover;
  background-position: center center;
  background-image: url('/images/header.jpg');
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transform: scale(2);
  transition: all 25s linear;

  &.is-zooming {
    transform: scale(1);
  }
`
