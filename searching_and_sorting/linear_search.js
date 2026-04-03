let target = 7;
let arr = [1, 2, 3, 4, 5, 5, 6, 5, 6, 7];

function LinearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}

console.log(LinearSearch(arr, target));
