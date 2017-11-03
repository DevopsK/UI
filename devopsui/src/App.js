import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import Layouts from './components/Layouts';

class App extends Component {
  render() {
    return (
      <Container fluid>
  		<Layouts></Layouts>
      </Container>
    );
  }
}
export default App;