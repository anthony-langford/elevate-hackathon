import React from 'react';
import { Button, Form } from 'semantic-ui-react'

// JSON.results

// import Form from './Form';

export default class Report extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      form: {
        name: "hi"
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {

    return (
      <React.Fragment>
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </React.Fragment>
    );
  };
};