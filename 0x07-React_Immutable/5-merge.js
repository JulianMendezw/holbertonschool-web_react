import { List, Map } from 'immutable';

export function concatElements(page1, page2) {
  const lst1 = List(page1);
  const lst2 = List(page2);
  return lst1.concat(lst2);
}

export function mergeElements(page1, page2) {
  const map1 = Map(page1);
  const map2 = Map(page2);
  return map1.merge(map2);
}
