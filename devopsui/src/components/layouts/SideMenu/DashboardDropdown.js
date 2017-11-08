import React from 'react';
import {Dropdown,Input} from 'semantic-ui-react';
import {Link} from 'react-router-dom';



const DashboardDropdown = () => {
  const tagOptions = [
  {
    text:'Jenkins',
    value:'Jenkins'
    //label:{color:'red', empty:'true', circular:'true'}
  },
  {
    text:'GitHub',
    value:'GitHub'
  },
  {
    text:'JIRA',
    value:'Jiira'
  },
  {
    text:'Artifactory',
    value:'Artifactory'
  },
  {
    text:'uDeploy',
    value:'uDeploy'
  },

];
  return(
   <Dropdown text='Tools' floating className='Link Item Icon'>
    <Dropdown.Menu>
      {/*<Input icon='search' iconPosition='left' className='search' />*/}
      <Dropdown.Menu scrolling>
        {tagOptions.map(option => <Dropdown.Item as={Link} to={option.text}
                                      key={option.value} {...option} />)}
      </Dropdown.Menu>
    </Dropdown.Menu>
  </Dropdown>
)
}

export default DashboardDropdown;