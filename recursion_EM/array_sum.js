let arr = [2, 3, 4, 5];
let index = 0;
function arraySum(arr, index) {
  if (index >= arr.length) {
    return 0;
  }

  return arr[index] + arraySum(arr, index + 1);
}
console.log(arraySum(arr, index));
