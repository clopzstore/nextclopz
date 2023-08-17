import React from 'react';
export const runtime = 'edge';
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