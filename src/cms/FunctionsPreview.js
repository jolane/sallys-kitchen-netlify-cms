import React from 'react'
import { StyleSheetManager } from 'styled-components'

import Functions from '../sections/Functions'

class FunctionsPreview extends React.Component {
  getTarget() {
    const frame = document.querySelector('.frame-content')
    return frame
  }
  render() {
    return (
      <StyleSheetManager target={this.getTarget()}>
        <Functions
          title={this.props.entry.getIn(['data', 'title'])}
          text={this.props.entry.getIn(['data', 'text'])}
          large_text={this.props.entry.getIn(['data', 'large_text'])}
        />
    </StyleSheetManager>
    )
  }
}



export default FunctionsPreview
