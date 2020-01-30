import React from 'react';
import { BrowserRouter, Redirect, Route, Switch, Link } from 'react-router-dom';

export default class HomePage extends React.Component {

    render() {
	    return (
	    	<div>
	    		<Link to="/products">View Products</Link>
	    	</div>
	    );
	}
}