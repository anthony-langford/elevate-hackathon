import React from 'react';
import { Form } from 'semantic-ui-react';
import axios from 'axios';

// import Form from './Form';

// http://elevate-alphas.herokuapp.com/api/report/new

// export default class Report extends React.Component<Props, State> {
export default class Report extends React.Component {
  state = {
    latitude: '',
    longitude: '',
    description: '',
    safety_hazard: false,
    category: 'Roads',
    citizen_id: 1,
    neighbourhood_id: 1
  };

  componentDidMount() {
    if ("geolocation" in navigator) {
      /* Geolocation is available */
      const successCallback = position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
  
        const errorCallback = error => {
          console.log('ERROR(' + error.code + '): ' + error.message);
        }
      
        const options = { timeout: 15000 };
  
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
      };
    } else {
      /* Geolocation is not available */
      return console.error('I am sorry, we are unable to find your location.');
    }
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    const { latitude, longitude, description, safety_hazard, category, citizen_id, neighbourhood_id } = this.state;

    axios.post('http://elevate-alphas.herokuapp.com/api/report/new', {
      latitude, longitude, description, safety_hazard, category, citizen_id, neighbourhood_id
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  render() {
    const { name, email, number, submittedName, submittedEmail, submittedNumber } = this.state;

    return (
      <div style={{ 'margin': 16 }}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input style={{ 'margin': 8 }} placeholder='Name' name='name' value={name} onChange={this.handleChange} />
            <Form.Input
              style={{ 'margin': 8 }}
              placeholder='Email'
              name='email'
              value={email}
              onChange={this.handleChange}
            />
            <Form.Input style={{ 'margin': 8 }} placeholder='Phone' name='phone' value={number} onChange={this.handleChange} />
            <Form.Button style={{ 'margin': 8 }} content='Submit' />
          </Form.Group>
        </Form>
      </div>
    );
  };
};