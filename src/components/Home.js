import React from 'react'
import styled from 'styled-components'


export default class Home extends React.Component {
  render() {

    return (
      <React.Fragment>
        <div role='list' class='ui divided relaxed list'>
  <div role='listitem' class='item'>
    <i aria-hidden='true' class='github large icon middle aligned' />
    <div class='content'>
      <a class='header'>Semantic-Org/Semantic-UI</a>
      <a class='description'>Updated 10 mins ago</a>
    </div>
  </div>
  <div role='listitem' class='item'>
    <i aria-hidden='true' class='github large icon middle aligned' />
    <div class='content'>
      <a class='header'>Semantic-Org/Semantic-UI-Docs</a>
      <a class='description'>Updated 22 mins ago</a>
    </div>
  </div>
  <div role='listitem' class='item'>
    <i aria-hidden='true' class='github large icon middle aligned' />
    <div class='content'>
      <a class='header'>Semantic-Org/Semantic-UI-Meteor</a>
      <a class='description'>Updated 34 mins ago</a>
    </div>
  </div>
</div>
      </React.Fragment>
    )
  }
}
