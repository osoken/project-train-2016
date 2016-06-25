import React from 'react'
import Header from './Header'

export default React.createClass({
  render() {
    return (
      <div>
        <Header />

        {/* add this */}
        {this.props.children}

      </div>
    )
  }
})
