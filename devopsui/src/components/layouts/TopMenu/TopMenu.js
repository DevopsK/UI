import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Grid, Header, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import App from '../../../App.js';
import Blog from '../../Tools/Blog.js';


class TopMenu extends Component{
	state = {activeItem : 'Home'}

	handleItemClick = (e,{name}) => this.setState({activeItem:name})

	render(){
		const {activeItem} = this.state
		return(
			<Router>
				
			<div>
				
					
			<Menu  inverted>
				<Menu.Item>
					<Header color='red'>Devops</Header> 
				</Menu.Item>	
		
				<Menu.Item as={Link} to='/' name='Home' active ={activeItem === 'Home'} onClick={this.handleItemClick}/>	
				<Menu.Item as={Link} to='/Blog' name='Tools' active ={activeItem === 'Tools'} onClick={this.handleItemClick}/>	
				<Menu.Item name='Contact' active ={activeItem === 'Contact'} onClick={this.handleItemClick}/>	
			</Menu>
				<Grid>

				<Grid.Row>
			<Switch>
				<Route exact path='/' component={App}/>
				<Route path='/Blog' component={Blog}/>
			</Switch>
				</Grid.Row>
			
			</Grid>
			</div>
			</Router>
		)
	}
}

export default TopMenu;