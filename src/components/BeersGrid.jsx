import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import BeerItem from './BeerItem.jsx';

export default class BeersGrid extends Component {
  getRows(beers) {
    let index = 0;
    return beers.reduce((acc, val) => {
      if (!acc[index]) acc[index] = [];
      acc[index].push(val);
      if (acc[index].length === 5) index++;
      return acc;
    }, []);
  }

  getColumns(row) {
    return row.map((beer, index) => {
      return (
        <Col key={beer.id} mdOffset={index === 0 ? 1 : 0} md={2}>
          <BeerItem beer={beer}/>
        </Col>
      );
    });
  }

  render() {
    const rows = this.getRows(this.props.beers);
    return (
      <Grid>
        {rows.map((row, index) => {
          return (
            <Row key={index}>
              { this.getColumns(row) }
            </Row>
          );
        })}
      </Grid>
    );
  }
}