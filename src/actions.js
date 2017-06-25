import axios from 'axios';

export function getBeers() {
  const reduce = function(acc, beer) {
    acc[beer.id] = {
      id: beer.id,
      name: beer.name,
      abv: beer.abv,
      volume: beer.volume.value,
      firstBrewed: beer.first_brewed,
      tagline: beer.tagline
    };
    return acc;
  };

  return (dispatch, getState) => {
    return axios.get(`https://api.punkapi.com/v2/beers?page=1&per_page=80`)
      .then((res) => {
        const beers = res.data.reduce(reduce, {});
        dispatch({ type: 'ADD_BEERS', beers });
        return axios.get(`https://api.punkapi.com/v2/beers?page=2&per_page=80`);
      })
      .then((res) => {
        const beers = res.data.reduce(reduce, {});
        dispatch({ type: 'ADD_BEERS', beers });
        return axios.get(`https://api.punkapi.com/v2/beers?page=3&per_page=80`);        
      })
      .then((res) => {
        const beers = res.data.reduce(reduce, {});
        dispatch({ type: 'ADD_BEERS', beers });
        dispatch({ type: 'LOADED_BEERS' });
        return getState().beers;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}