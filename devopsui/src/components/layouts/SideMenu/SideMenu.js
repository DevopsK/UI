import React,{Component} from 'react';
import {Grid,Menu,Segment} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import DashboardDropdown from './DashboardDropdown';
import '../../../styles/grid.css';

class SideMenu extends Component{
	state = {activeItem : 'Dashboard'}

	handleItemClick = (e,{name}) => this.setState({activeItem:name})

	render(){
		const {activeItem} = this.state

		return(
			<div>
				
	{/*pages*/}
	<Grid>
		<Segment basic>
			<Menu vertical fluid inverted>
				<Menu.Item as={Link} to='/Dashboard' 
					name='Dashboard' 
					active ={activeItem === 'Dashboard'} 
					onClick={this.handleItemClick} />

					<Menu.Item>
					<DashboardDropdown></DashboardDropdown>	
					</Menu.Item>
				{/*
				<Menu.Item as={Link} to='/Jenkins'
					name='Jenkins'  
					active ={activeItem === 'Jenkins'} 
					onClick={this.handleItemClick}/>
				<Menu.Item name='GitHub' active ={activeItem === 'GitHub'} onClick={this.handleItemClick}/>
				<Menu.Item name='JIRA' active ={activeItem === 'JIRA'} onClick={this.handleItemClick}/> <Menu.Item name='Blog' active ={activeItem === 'Blog'} onClick={this.handleItemClick}/>
				<Menu.Item name='Artifactory' active ={activeItem === 'Panels'} onClick={this.handleItemClick}/>	
				<Menu.Item name='uDeploy'  active ={activeItem === 'uDeploy'} onClick={this.handleItemClick}/>
				<Menu.Item name='Docker' active ={activeItem === 'Docker'} onClick={this.handleItemClick}/>
				<Menu.Item name='Dependency Analyzer' active ={activeItem === 'Dependency Analyzer'} onClick={this.handleItemClick}/>
				<Menu.Item name='SCM' active ={activeItem === 'SCM'} onClick={this.handleItemClick}/>
				<Menu.Item name='Build/Deploy' active ={activeItem === 'Build/Deploy'} onClick={this.handleItemClick}/>
				<Menu.Item name='Puppet' active ={activeItem === 'Puppet'} onClick={this.handleItemClick}/>
				<Menu.Item name='Manual' active ={activeItem === 'Manual'} onClick={this.handleItemClick}/>
				<Menu.Item name='Migration' active ={activeItem === 'Migration'} onClick={this.handleItemClick}/>
				*/}
			</Menu>	
		</Segment>
	</Grid>
			</div>
		)
	}
}

export default SideMenu;