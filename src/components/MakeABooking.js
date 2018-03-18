import React from 'react'
import styled from 'styled-components'

import { fonts, colors } from '../styles/vars'
import { below } from '../styles/media' 

class MakeABooking extends React.Component {
  componentDidMount() {
    const script = document.createElement('script')

    script.src = 'https://www.dimmi.com.au/embed/button-script?restaurantId=33472'
    script.async = true

    document.body.appendChild(script)
  }
  render() {
    return (
      <Wrapper
        href="https://www.dimmi.com.au/make-booking/sallys-kitchen-melbourne?mode=Widget"
        target="_blank"
        rel="nofollow"
      >
        <span className="copy">Make a booking</span>
        <span className="circle">
          <svg className="icon icon">
            <use xlinkHref="/icons.svg#icon-calendar" />
          </svg>
        </span>
      </Wrapper>
    )
  }
}

export default MakeABooking


const Wrapper = styled.a`
  position: absolute;
  top: 57px;
  right: 80px;
  z-index: 200;
  color: #fff;
  font-family: ${fonts['medium-heading']};
  cursor: pointer;
  display: block;

  ${below.m`
		top: 15px;
		right: 25px;
  `};

  & .copy {
    ${below.m`
		display: none;
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
    margin: 0 0 0 0.8em;
    transition: all 0.3s linear;
  }

  &:hover .circle {
    background-color: #fff;
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
    fill: #fff;
    padding: 14px;
  }

  &:hover .icon {
    fill: ${colors.black};
  }
`