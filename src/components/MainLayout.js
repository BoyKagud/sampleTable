import React from 'react';
import { Container, Segment } from 'semantic-ui-react';

export default class MainLayout extends React.Component {
	render() {
		const {children} = this.props;
		return(
			<div>
				{children}
			</div>
		);
	}
}