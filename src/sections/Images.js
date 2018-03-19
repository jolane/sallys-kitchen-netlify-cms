import React from 'react'
import styled from 'styled-components'

export default props => (
  <Container>
    <div className="image-block">
      <div
        className="image-block__inner"
        style={{ backgroundImage: 'url(/images/full1.jpg)' }}
      />
    </div>
    <div className="image-block">
      <div
        className="image-block__inner"
        style={{ backgroundImage: 'url(/images/full2.jpg)' }}
      />
    </div>
    <div className="image-block">
      <div
        className="image-block__inner"
        style={{ backgroundImage: 'url(/images/full3.jpg)' }}
      />
    </div>
    <div className="image-block">
      <div
        className="image-block__inner"
        style={{ backgroundImage: 'url(/images/full4.jpg)' }}
      />
    </div>
  </Container>
)

const Container = styled.section`
  position: relative;

  .image-block {
    position: relative;
  }

  .image-block:before {
    content: '';
    display: block;
    padding-bottom: 47.85714%;
  }

  .image-block > :first-child {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }

  .image-block__inner {
    background-size: cover;
    background-color: #ddd;
    background-position: 50%;
    background-attachment: fixed;
  }
`
