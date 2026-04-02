let n = 5;

function giveFact(n) {
  if (n == 1) {
    return 1;
  }
  return n * giveFact(n - 1);
}

console.log(giveFact(n));
