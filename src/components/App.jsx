import React, { Component } from 'react';
import { connect } from 'react-redux'
import Header from './Header.jsx';
import BeersGrid from './BeersGrid.jsx';
import DetailsModal from './DetailsModal.jsx';
import PagerFooter from './PagerFooter.jsx';
import { getBeers } from '../actions';
import { getSortedBeers, getPagedBeers } from '../helpers';

class App extends Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.setSort = this.setSort.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  componentDidMount() {
    const { dispatch, sort } = this.props;
    dispatch(getBeers())
      .then((beers) => {
        const sortedBeers = getSortedBeers(beers, sort);
        const sortedAndPagedBeers = getPagedBeers(sortedBeers);
        dispatch({ type: 'ADD_PAGE', pages: sortedAndPagedBeers, sort});
      });
  }

  showModal(id) {
    this.props.dispatch({type: 'SHOW_MODAL', id});
  }

  hideModal() {
    this.props.dispatch({type: 'HIDE_MODAL'});
  }

  setSort(sort) {
    const { pages, beers, dispatch } = this.props;
    if (!pages[sort]) {
      const sortedBeers = getSortedBeers(beers, sort);
      const sortedAndPagedBeers = getPagedBeers(sortedBeers);
      dispatch({ type: 'ADD_PAGE', pages: sortedAndPagedBeers, sort});
    }
    dispatch({type: 'SET_SORT', sort});
  }

  changePage(direction) {
    const { dispatch } = this.props;
    direction
      ? dispatch({type: 'INCREMENT_PAGE'})
      : dispatch({type: 'DECREMENT_PAGE'});
  }

  render() {
    const { beers, loadedBeers, currentPage, pages, sort, modalOpen, selectedBeer } = this.props;
    const beersToDisplay = pages[sort] && pages[sort][currentPage] && pages[sort][currentPage].map((id) => {
      return beers[id.id];
    });
    return (
      <div>
        <Header sort={sort} handleSortSelect={this.setSort}/>
        { loadedBeers
          ? <BeersGrid beers={ beersToDisplay ? beersToDisplay : [] } onBeerItemClick={this.showModal}/>
          : <div>Loading...</div>
        }
        { modalOpen &&
          <DetailsModal beer={beers[selectedBeer]} show={modalOpen} hideModal={this.hideModal}/>        
        }
        <PagerFooter
          changePage={this.changePage}
          currentPage={currentPage}
        />
      </div>
    );
  }
}

export default connect(state => state)(App)