// https://www.hackerrank.com/challenges/js10-count-objects/problem


/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
  let count = 0;
  objects.forEach((obj) => {
    if (obj.x === obj.y) {
      count += 1;
    }
  });
  return count;
}

getCount([{ x: 1, y: 2 }, { x: 3, y: 4 }]);
