import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

export default class BeerItem extends Component {
  onClickHandler() {
    return;
  } 

  render() {
    const { name, tagline } = this.props.beer;
    return (
      <Panel header={name} onClick={this.onClickHandler}>
        {tagline}
      </Panel>
    );
  }
}