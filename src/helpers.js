export function getSortedBeers(beers, sort) {
  switch (sort) {
    case 'abv':
    case 'volume':
      return sortOnInt(beers, sort);
    default:
      return sortOnName(beers);
  }
}

function sortOnInt(beers, sort) {
  return Object.keys(beers).map((id) => {
    return {id, [sort]: beers[id][sort]};
  }).sort((a, b) => {
    return a[sort] - b[sort];
  });
}

function sortOnName(beers) {
  return Object.keys(beers).map((id) => {
    return {id, name: beers[id].name};
  }).sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
}

export function getPagedBeers(beers) {
  const pages = {};
  const beersClone = beers.slice();
  let index = 1;

  while (beersClone.length > 0) {
    pages[index] = beersClone.splice(0, 25);
    index++;
  }
  return pages;
}