import React from 'react'
import { List } from 'semantic-ui-react'
import axios from 'axios';
import { Router, navigate } from "@reach/router";

const ListExampleDivided = (props) => (
  <List divided relaxed>
    <List.Item>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content onClick={() => props.clicked(5)}>
        <List.Header as='a'>Semantic-Org/Semantic-UI</List.Header>
        <List.Description as='a'>Updated 10 mins ago</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>Semantic-Org/Semantic-UI-Docs</List.Header>
        <List.Description as='a'>Updated 22 mins ago</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='github' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a'>Semantic-Org/Semantic-UI-Meteor</List.Header>
        <List.Description as='a'>Updated 34 mins ago</List.Description>
      </List.Content>
    </List.Item>
  </List>
)

export default class Home extends React.Component {
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
    navigate(`/issue/${id}`)
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <div class='ui pointing menu'>
            <a class='active item'>Recent Issues</a>
            <a class='item'>Completed Issues</a>
            <div class='right menu'>
              <div class='item'>
                <div class='ui icon input'>
                  <input type='text' placeholder='Search...' />
                  <i aria-hidden='true' class='search icon' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ListExampleDivided clicked={this.onClick} />
      </React.Fragment>
    );
  };
};
