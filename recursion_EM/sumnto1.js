let n = 5;

function Sum(n) {
  if (n < 1) {
    return 0;
  }
  return n + Sum(n - 1);
}

console.log(Sum(n));
