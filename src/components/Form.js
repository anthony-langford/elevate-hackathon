import React from 'react'
import styled from 'styled-components'

export default class Form extends React.Component {

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
        <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </React.Fragment>
    )
  }
}