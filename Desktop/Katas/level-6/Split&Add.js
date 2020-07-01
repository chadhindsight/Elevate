
// Split and then add both sides of an array together
function splitAndAdd(arr, num) {
  if (num <= 0)
    return arr;

  const ln = arr.length;
  if ((ln % 2) === 1)
    arr.unshift(0);

  return splitAndAdd(arr.splice(0, Math.ceil(ln / 2)).map((a, i) => a + arr[i]), num-1);
}