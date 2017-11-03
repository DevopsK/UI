import React, {Component} from 'react';
import {Dropdown} from 'semantic-ui-react';

const DashboardDropdown = () => (
	<Dropdown text='Tools' pointing='left' className='link item'>
      <Dropdown.Menu>
        <Dropdown.Item>GitHub</Dropdown.Item>
        <Dropdown.Item>Docker</Dropdown.Item>
        <Dropdown.Item>Jenkins</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>SCM</Dropdown.Item>
        <Dropdown.Item>uDeploy</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
)

export default DashboardDropdown;