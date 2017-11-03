import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SideMenu from './layouts/SideMenu/SideMenu';
import TopMenu from './layouts/TopMenu/TopMenu';
import Content from './layouts/Content/Content';
import App from '../App.js';
import Jenkins from './Tools/Jenkins.js';
import Dashboard from './Tools/Dashboard.js';

import '../styles/grid.css'

class Layouts extends Component{
	render(){
		return(
			
				<Router>
					
			<div>
				<Grid>
					<Grid.Row columns={2}>
					<Grid.Column width={3} color='grey'>
						{/*sideMenu*/}
						<SideMenu></SideMenu>
					</Grid.Column>
					<Grid.Column width={13} color='teal'>
						{/*Content*/}
						<Switch>
							<Route path='/Dashboard' component={Dashboard} />
							<Route path='/Jenkins' component={Jenkins} />
						</Switch>
					</Grid.Column>
				</Grid.Row>
				</Grid>	
			</div>
				</Router>
			
		);
	}
}

export default Layouts;