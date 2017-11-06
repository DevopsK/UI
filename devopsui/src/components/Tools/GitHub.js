import React, { Component } from 'react';
import { Form,Checkbox, Button,Grid } from 'semantic-ui-react';
class GitHub extends Component{
render(){
return(
<Grid centered>
	<Grid.Column width={10}>
		<Form >
			<Form.Field>
				<label>Question 1</label>
				<input placeholder='Question 1' />
			</Form.Field>
			<Form.Field>
				<label>Question 2</label>
				<input placeholder='Question 2' />
			</Form.Field>
			<Form.Field>
				<label>Question 3</label>
				<input placeholder='Question 3' />
			</Form.Field>
			<Form.Field>
				<Checkbox label='I agree to the Terms and Conditions' />
			</Form.Field>
			<Button type='submit'>Submit</Button>
		</Form>
	</Grid.Column>
</Grid>
);
}
}
export default GitHub;