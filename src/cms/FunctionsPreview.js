import React from 'react'
import { StyleSheetManager } from 'styled-components'

import Functions from '../sections/Functions'

class FunctionsPreview extends React.Component {
  render() {
    return (
      <StyleSheetManager target={this.styleTarget}>
        <div ref={(el) => { this.styleTarget = el }} />
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
