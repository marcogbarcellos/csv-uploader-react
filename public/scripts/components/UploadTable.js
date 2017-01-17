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
	            <th>Expense description</th>
	            <th>Pre-tax amount</th>
	            <th>Tax name</th>
	            <th>Tax amount</th>
	          </tr>
	        </thead>
	        <tbody>
	          {this.props.items.map(item => (
		        	<tr>
		        	  <td>{item.date}</td>
		            <td>{item.category}</td>
		            <td>{item.name}</td>
		            <td>{item.address}</td>
		            <td>{item.expenseDescription}</td>
		            <td>{item.preTaxAmount}</td>
		            <td>{item.taxName}</td>
		            <td>{item.taxAmount}</td>
		          </tr>
		        ))}
	        </tbody>
      	</table>
      )	
  	} else {
  		records = (
  			<div >
  				<span> no data </span>
        </div>
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