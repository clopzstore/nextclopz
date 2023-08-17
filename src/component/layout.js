import React from 'react';
export const dynamic = 'auto'
export const dynamicParams = true
export const revalidate = false
export const fetchCache = 'auto'
export const runtime = 'nodejs'
export const preferredRegion = 'auto'
export const maxDuration = 5
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