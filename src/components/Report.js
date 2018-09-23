import React from 'react'
import styled from 'styled-components'

// JSON.results

import Form from './Form'

export default class Report extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      form: {
        name: "kdsljf"
      }
    }

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
        <Form handleChange={handleChange} handleSubmit={handleSubmit} />
      </React.Fragment>
    )
  }
}