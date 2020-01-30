import React from 'react';
import { Checkbox } from 'semantic-ui-react';

export default class SGProductTable extends React.Component {

	render() {
		return (
			<div>
				<div className="header_holder">
			        <div className="row">
			        	{
		            		this.props.data[0].filter(function(item) {
		            			return (typeof item.role !== 'undefined' || item.role == 'main')
		            		}).map(data => (
					            <div className="col-sm-3">
					                <div className="row padds">
					                    <div className="col-sm-2">
					                        <label className="container">
											  <Checkbox />
											</label>
					                    </div>
					                    <div className="col-sm-10">
					                        <p style={{textAlign: 'center'}}>{data.name}</p>
					                    </div>
					                </div>
					            </div>
		            		))
			        	}
			            <div className="col-sm-9">
			            	{
			            		this.props.data[0].filter(function(item) {
			            			return (typeof item.role === 'undefined' || item.role != 'main')
			            		}).map(data => (
					                <div className="sort_by_holder">
					                    <div className="cell_per_box sort_by">{data.name}</div>
					                </div>
			            		))
			            	}
			                <div className="cell_per_box" style={{cursor: 'pointer'}}><i className="fas fa-ellipsis-h"></i></div>
			            </div>
			        </div>
			    </div>
			    {
			    	this.props.data.map(item => (
			    		<SGProductRow data={item} />
			    	))
			    }
			</div>
		);
	}
}

class SGProductRow extends React.Component {
	render() {
		return(
			<div className="body_data_holder">
		        <div className="row" style={{position: 'relative'}}>
		        	{
	            		this.props.data.filter(function(item) {
	            			return (typeof item.role !== 'undefined' || item.role == 'main')
	            		}).map(data => (
				            <div className="col-sm-3">
				            	{data.value}
				            </div>
	            		))
		        	}
		            <div className="col-sm-9 data_line_height">
		            	{
		            		this.props.data.filter(function(item) {
		            			return (typeof item.role === 'undefined' || item.role != 'main')
		            		}).map(data => (
				                <div className="sort_by_holder">
				                    <span className="cell_per_box ">{data.value}</span>
				                </div>
		            		))
		            	}
		                <div className="cell_per_box" style={{lineHeight: 1}}>
		                	<p><button style={{border: 'none', background: 'transparent'}}><i className="fas fa-folder-plus" style={{color: "#98AECA"}}></i></button></p>
		                	<p><button style={{border: 'none', background: 'transparent'}}><i className="fas fa-bell-slash" style={{color: "#98AECA"}}></i></button></p>
		                	<p><button style={{border: 'none', background: 'transparent'}}><i className="fas fa-ellipsis-v" style={{color: "#98AECA"}}></i></button></p>
		                </div>

		            </div>
		            <div className="sort_down" style={{position: 'absolute', bottom: '-10px'}}>
		            	<span className="sort_down_mid"><i className="fas fa-sort-down"></i></span>
		            </div>
		        </div>
		    </div>
		);
	}
}