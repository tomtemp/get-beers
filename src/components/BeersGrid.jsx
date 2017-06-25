import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import BeerItem from './BeerItem.jsx';

export default class BeersGrid extends Component {
  render() {
    const { beers, onBeerItemClick } = this.props;
    return (
      <Grid>
        <Row>
          { beers.map((beer) => {
            return (
              <Col key={beer.id} md={4} sm={6}>
                <BeerItem beer={beer} onClickHandler={onBeerItemClick}/>
              </Col>
            );
          })}
        </Row>
      </Grid>
    );
  }
}