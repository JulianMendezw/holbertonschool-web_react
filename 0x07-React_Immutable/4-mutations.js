import { Map, List } from 'immutable';

export const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

export const map2 = List(map).withMutations((list) => {
  list.set(2, 'Benjamin');
  list.set(4, 'Oliver');
});
