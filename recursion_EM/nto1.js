function nto1(n) {
  if (n == 0) return;

  console.log(n);
  n = n - 1;
  nto1(n);
}

nto1(10);
