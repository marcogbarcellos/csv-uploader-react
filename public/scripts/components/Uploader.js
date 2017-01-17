'use strict'

import React, {Component} from 'react'
import axios from 'axios'
import NotificationSystem from 'react-notification-system'
import Header from './Header'
import UploadTable from './UploadTable'
import _ from 'lodash'

export default class Uploader extends Component {
  constructor() {
    super()

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.state = {items: []};
  }

  handleKeyPress(event) {
    if (event.which === 13) {
      event.preventDefault();
    }
  }

  handleSubmit(e) {
    if (e) {
      e.preventDefault();
    }
    var fd = new FormData();
        
    fd.append('file', this.refs.file.files[0]);

    axios.post('http://localhost:3000/upload', fd)
    .then(response => {
      console.log('uploaded successfully:',response);
      if (response && response.data && response.data.length>0) {
        this.setState((prevState) => ({
          items: prevState.items.concat(response.data)
        }));
        console.log(this.state.items);
      }
    })
    .catch(err => {
      const errorMessage = _.get(err, 'response.data.error.message', err.message);

      this.notificationSystem.addNotification({
        title: 'Error',
        message: errorMessage,
        level: 'error'
      })
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Header title="Csv Uploader" step="1"/>
          </div>
          
          <div className="col-md-12">
            <form ref="uploadForm" className="uploader" encType="multipart/form-data" onSubmit={this.handleSubmit} onKeyPress={this.handleKeyPress}>
              <input ref="file" type="file" name="file" className="upload-file fileupload-new"/>
              <input type="submit" ref="button" value="Upload" className="btn btn-lg upload-btn"/>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-default">
              <div class="panel-heading">Records Inserted</div>
              <UploadTable items={this.state.items} />   
            </div>
          </div>
        </div>  
        <NotificationSystem ref={notificationSystem => {this.notificationSystem = notificationSystem}}/>
      </div>  
      
    )
  }
}

Uploader.contextTypes = {
  router: React.PropTypes.object
}
