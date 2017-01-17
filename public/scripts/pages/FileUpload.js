'use strict'

import React, {Component} from 'react'
import Uploader from './../components/Uploader'

export default class FileUpload extends Component {
  render() {
    return (
      <main role="main">
        <div className="col-md-3 npl">
          <section className="intro">
            <h1 className="title">Challenge</h1>
          </section>
        </div>

        <div className="col-md-9">
          <Uploader/>
        </div>
      </main>
    )
  }
}
