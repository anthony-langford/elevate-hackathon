import React from 'react';
import { Router, navigate } from "@reach/router";
import axios from 'axios';

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: ""
    }
  }

  componentDidMount() {
    // axios.get(`https://jsonplaceholder.typicode.com/users`)
    //   .then(res => {
    //     const persons = res.data;
    //     this.setState({ persons });
    //   })
  }

  onClick = (id) => {
    navigate(`/`);
  }

  render() {
    return (
      <React.Fragment>
        <div class='ui card'>
          <img src='/images/avatar/large/matthew.png' class='ui image' />
          <div class='content'>
            <div class='header'>Matthew</div>
            <div class='meta'>
              <span class='date'>Joined in 2015</span>
            </div>
            <div class='description'>Matthew is a musician living in Nashville.</div>
          </div>
          <div class='extra content'>
            <a>
              <i aria-hidden='true' class='user icon' />
              22 Friends
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  };
};
