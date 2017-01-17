'use strict'

import React, {Component} from 'react'
import {BrowserRouter, Match, Miss} from 'react-router'

import FileUpload from './pages/FileUpload'
import NotFound from './pages/NotFound'
import './../stylesheets/main.scss'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Match pattern="/" exactly component={FileUpload}/>
          <Miss component={NotFound}/>
        </div>
      </BrowserRouter>
    )
  }
}
