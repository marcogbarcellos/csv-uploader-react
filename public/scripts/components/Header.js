'use strict'

/* @flow */

import React from 'react'

type Props = {
  step: string,
  title: string
}

const Header = (props: Props) => {
  return (
    <header className="header">
      <span className="step">{props.step}</span>
      <h2 className="title">{props.title}</h2>
    </header>
  )
}

Header.propTypes = {
  step: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired
}

export default Header
