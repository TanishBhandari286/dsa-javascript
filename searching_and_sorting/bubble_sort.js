let arr = [2, 3, 1, 2, 8, 5, 7];

function Sort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let isSwapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        isSwapped = true;
      }
    }

    if (isSwapped == false) {
      break;
    }
  }
  return arr;
}

console.log(Sort(arr));
