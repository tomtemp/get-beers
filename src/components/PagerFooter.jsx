import React, { Component } from 'react';
import { Pager } from 'react-bootstrap';

export default class PagerFooter extends Component {
  render() {
    const { changePage, currentPage, totalPages } = this.props;
    return (
      <Pager>
        <Pager.Item disabled={ currentPage === 1 } onClick={() => changePage(0)}>Previous</Pager.Item>
        <Pager.Item onClick={() => changePage(1)}>Next</Pager.Item>
      </Pager>
    );
  }
}
