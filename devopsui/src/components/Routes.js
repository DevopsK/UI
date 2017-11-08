import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TopMenu from '../components/layouts/TopMenu/TopMenu.js';



const Routes = () => {
	return(		
			<Router>
			<div>
				<TopMenu></TopMenu>		
			</div>
			</Router>
		
	)
}

export default Routes;