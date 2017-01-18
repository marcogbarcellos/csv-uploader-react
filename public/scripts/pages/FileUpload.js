'use strict'

import React, {Component} from 'react'
import Uploader from './../components/Uploader'

export default class FileUpload extends Component {
  render() {
    return (
      <main role="main">
        <div className="col-md-11">
          <Uploader/>
        </div>
      </main>
    )
  }
}
