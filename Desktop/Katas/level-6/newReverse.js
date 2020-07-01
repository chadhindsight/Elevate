function reverse(arr){
  for (var left = 1; left <= arr.length / 2; left += 1)
  {
    var right = arr.length - left;
    var temporary = arr[left - 1];
    arr[left - 1] = arr[right];
    arr[right] = temporary;
  }
  return arr;
}