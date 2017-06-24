import React, { Component } from 'react';
import Header from './Header.jsx';
import BeersGrid from './BeersGrid.jsx';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BeersGrid beers={beers}/>
      </div>
    );
  }
}