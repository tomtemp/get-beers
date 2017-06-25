import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

export default class DetailsModal extends Component {
  render() {
    const { beer, show, hideModal } = this.props;
    return (
      <Modal show={ show } onHide={ hideModal }>
        <Modal.Header closeButton>
          <Modal.Title>{ beer.name }</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          { beer.tagline }
        </Modal.Body>
      </Modal>
    );
  }
}