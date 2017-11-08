import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grid, Header, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import App from '../../../App.js';
import Support from './TopMenuTabs/Support.js';
import Contact from './TopMenuTabs/Contact.js';
/*SideMenu Navigations
import Dashboard from '../../Tools/Dashboard';
import GitHub from '../../Tools/GitHub';
import Jenkins from '../../Tools/Jenkins';
import JIRA from '../../Tools/JIRA';
import Artifactory from '../../Tools/Artifactory';
import UDeploy from '../../Tools/UDeploy';
*/


class TopMenu extends Component{
	state = {activeItem : 'Home'}

	handleItemClick = (e,{name}) => this.setState({activeItem:name})

	render(){
		const {activeItem} = this.state
		return(
		<Router>	
		<div>		
			<Menu color='blue' inverted>
				<Menu.Item>
					<Header color='red'>Devops</Header> 
				</Menu.Item>	
		
				<Menu.Item 
					as={Link} to='/' 
					name='Home' 
					active ={activeItem === 'Home'} 
					onClick={this.handleItemClick}>
						<Header size='small'>Home</Header>
					</Menu.Item>	

				<Menu.Item 
					as={Link} to='/Support' 
					name='Tools' 
					active ={activeItem === 'Tools'} 
					onClick={this.handleItemClick}>
						<Header size='small'>Support</Header>
				</Menu.Item>

				<Menu.Item 
					as={Link} to='/Contact' 
					name='Tools' 
					active ={activeItem === 'Tools'} 
					onClick={this.handleItemClick}>
						<Header size='small'>Contact</Header>
				</Menu.Item>	
			</Menu>
				
			<Grid>
				<Grid.Row>
					<Switch>
						<Route exact path='/' component={App}/>
						<Route path='/Support' component={Support}/>
						<Route path='/Contact' component={Contact}/>
					</Switch>

				{/*SideMenu Navigations
					<Switch>
							<Route path='/Dashboard' component={Dashboard} />
							<Route path='/Jenkins' component={Jenkins} />
							<Route path='/GitHub' component={GitHub} />
							<Route path='/Artifactory' component={Artifactory} />
							<Route path='/UDeploy' component={UDeploy} />
							<Route path='/JIRA' component={JIRA} />
						</Switch>
					*/}
				</Grid.Row>
			</Grid>
		</div>
		</Router>
		)
	}
}

export default TopMenu;