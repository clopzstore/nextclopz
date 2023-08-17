import React from 'react';
export default class Layout extends React.Component {
  componentDidMount () {}
  render () {
    return (
      <>
        {this.props.children}
      </>
    )
  }
};