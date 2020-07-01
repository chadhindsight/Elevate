// ANAGRAM CHECK
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false

  let strA = str1.split('')

  let obj1 = {}
  // Loop over array and store the frequency of each char in obj1
  for (let val of strA) {
    obj1[val] = (obj1[val] || 0) + 1
  }
  for (let i = 0; i < str2.length; i++) {
    let deez = str2[i]
    if (!obj1[deez]) return false
    else { obj1[deez] -= 1 }
  }
  return true
}