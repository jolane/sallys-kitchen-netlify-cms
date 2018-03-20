import React from 'react'
import styled, { css } from 'styled-components'

import { below } from '../styles/media'

class Intro extends React.Component {
  constructor() {
    super()
    this.state = {
      words: [],
      current_word: 0,
      front_word: '',
      back_word: '',
      flip: false,
    }
  }
  componentWillMount() {
    let words = this.props.words.split(',').map(w => w.trim())
    let front_word = words[0]
    let back_word = words[1]

    this.setState({ words, front_word, back_word })
    const intervalID = setInterval(this.myCallback.bind(this), 6000)
  }
  componentWillReceiveProps(nextProps) {
    let words = nextProps.words.split(',').map(w => w.trim())
    let current_word = 0
    let front_word = words[0]
    let back_word = words[1]
    let flip = false

    this.setState({ words, current_word, front_word, back_word, flip })
  }
  myCallback() {
    let current_word = this.state.current_word + 1
    this.setState({ current_word })

    const index = this.state.current_word % this.state.words.length
    const front = document.querySelector('.intro__is-front')
    const back = document.querySelector('.intro__is-back')

    if (this.state.flip === true) {
      let front_word = this.state.words[index]
      this.setState({ front_word })
    } else {
      let back_word = this.state.words[index]
      this.setState({ back_word })
    }

    let flip = !this.state.flip
    this.setState({
      flip,
    })
  }
  render() {
    return (
      <IntroContainer>
        <Table>
          <Cell>
            <Text>
              Sally is
              <IsText
                innerRef={comp => {
                  this.is_text = comp
                }}
                flip={this.state.flip}
              >
                <span className="intro__spacer">test </span>
                <Front
                  innerRef={comp => {
                    this.front = comp
                  }}
                >
                  {this.state.front_word}
                </Front>
                <Back
                  innerRef={comp => {
                    this.back = comp
                  }}
                >
                  {this.state.back_word}
                </Back>
              </IsText>
            </Text>
          </Cell>
        </Table>
      </IntroContainer>
    )
  }
}

export default Intro

const IntroContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 11;

  .intro__spacer {
    opacity: 0;
  }

  .intro__word {
    display: none;
  }

  .intro__word.is-active {
    display: inline-block;
  }
`

const Table = styled.div`
  height: 100%;
  width: 100%;
  display: table;
`

const Cell = styled.div`
  display: table-cell;
  height: 100%;
  width: 100%;
  vertical-align: middle;
  text-align: center;
`

const Text = styled.div`
  font-size: 4.75em;
  color: #fff;
  font-family: 'GT Walsheim Thin';
  font-weight: 200;
  height: 1em;
  line-height: 1em;
  ${below.m`
			font-size: 4.06em;
			line-height: 1.2;
			height: 2.4em;
  `};
`

const IsText = styled.span`
  font-family: 'GT Walsheim Medium';
  font-weight: 400;
  line-height: 1;
  position: relative;
  display: inline-block;
  -webkit-perspective: 1000px;
  perspective: 1000px;
  height: 1em;
  line-height: 1em;
  width: 4em;
  transition: 0.6s;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  margin-left: 0.2em;
  ${props =>
    props.flip === true &&
    css`
      -webkit- transform: rotateX(180deg);
      transform: rotateX(180deg);
    `};
`

const Back = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  height: 1em;
  border-bottom: 1px dashed #fff;
  z-index: 1;
  -webkit-transform: rotateX(180deg);
  transform: rotateX(180deg);
`

const Front = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  height: 1em;
  border-bottom: 1px dashed #fff;
  z-index: 2;
  -webkit-transform: rotateX(0deg);
  transform: rotateX(0deg);
`
