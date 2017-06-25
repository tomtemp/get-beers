import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

export default class BeerItem extends Component {
  render() {
    const { beer: { id, name, tagline }, onClickHandler } = this.props;
    return (
      <Panel header={name} onClick={() => onClickHandler(id)}>
        {tagline}
      </Panel>
    );
  }
}