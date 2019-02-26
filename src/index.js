/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  arr = ['',];
  for (let i = 0; i < preferences.length;i++) {
    arr[i+1] = preferences[i];
  };

  count = 0;
  for (let i = 1; i <= arr.length; i++) {
    let f = arr[i];
    let s = arr[f];
    let t = arr[s];
    if (t === i) {
        count++;
    }
  };
  
  return Math.floor(count*1/3);
};
