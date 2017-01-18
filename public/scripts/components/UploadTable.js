'use strict'

import React, {Component} from 'react'

export default class UploadTable extends Component {
  render() {
  	let records;
  	if(this.props.items.length > 0) {
  		records = (
  			<table className="table col-md-12">
	        <thead>
	          <tr>
	          	<th>Date</th>
	            <th>Category</th>
	            <th>Name</th>
	            <th>Address</th>
	            <th>Description</th>
	            <th>Tax Name</th>
	            <th>Pre-tax</th>
	            <th>Tax</th>
	          </tr>
	        </thead>
	        <tbody>
	          {this.props.items.map(item => (
		        	<tr>
		        	  <td>{item.date}</td>
		            <td>{item.category}</td>
		            <td>{item.employeename}</td>
		            <td>{item.employeeaddress}</td>
		            <td>{item.expensedescription}</td>
		            <td>{item.taxname}</td>
		            <td>{item.pretaxamount}</td>
		            <td>{item.taxamount}</td>
		          </tr>
		        ))}
	        </tbody>
      	</table>
      )	
  	} else {
  		records = (
  			<div></div>
      )
  	}
  	return (
  		<div className="row">
	      {records}
			</div>
    		
    );
  }
}

UploadTable.propTypes = {
  items: React.PropTypes.func.isRequired
}