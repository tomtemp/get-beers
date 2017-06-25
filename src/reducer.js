const initialState = {
  sort: 'name',
  modalOpen: false,
  selectedBeer: null,
  loadedBeers: false,
  pages: {},
  currentPage: 1,
  beers: {}
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_SORT':
      return Object.assign({}, state, {
        sort: action.sort,
        currentPage: 1
      });
    case 'SHOW_MODAL':
      return Object.assign({}, state, {
        modalOpen: true,
        selectedBeer: action.id
      });
    case 'HIDE_MODAL':
      return Object.assign({}, state, {
        modalOpen: false
      });
    case 'ADD_BEERS':
      return Object.assign({}, state, {
        beers: Object.assign({}, state.beers,
          action.beers
        )
      });
    case 'ADD_PAGE':
      return Object.assign({}, state, {
        pages: Object.assign({}, state.pages, {
          [action.sort]: action.pages
        })
      });
    case 'LOADED_BEERS':
      return Object.assign({}, state, {
        loadedBeers: true
      });
    case 'DECREMENT_PAGE':
      return Object.assign({}, state, {
          currentPage: state.currentPage - 1
      });
    case 'INCREMENT_PAGE':
      return Object.assign({}, state, {
        currentPage: state.currentPage + 1
      });
    default:
      return state;
  }
}