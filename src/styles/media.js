import { css } from 'styled-components'

const sizes = {
  hd: 1170,
  l: 992,
  m: 960,
  s: 376,
}

export const below = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

export const above = Object.keys(sizes).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})