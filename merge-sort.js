// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {
  let copy = [...arr]
  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  if (copy.length < 2) return copy


  // Divide the array in half
    let firstHalf = Math.floor(copy.length / 2)
    let secondHalf = copy.splice(0,firstHalf)
  // Recursively sort the left half
  // Recursively sort the right half

  // Merge the halves together and return
     return merge(mergeSort(secondHalf), mergeSort(copy))
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  let result = []
  // Point to the first value of each array
  // While there are still values in each array...
  while (arrA.length && arrB.length) {
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array
    if (arrA[0] < arrB[0]) {
      result.push(arrA.shift())
    }
    else {
      result.push(arrB.shift())
  }
}
      // Return the return array
      return [...result, ...arrA, ...arrB]
}

module.exports = [merge, mergeSort];
