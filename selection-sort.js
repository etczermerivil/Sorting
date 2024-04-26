

function selectionSort(arr) {

  // Copy the original array
  let copy = [...arr]

  // Create an array to store the sorted values
  let sorted = []
  // While the array is not empty...
  while(copy.length > 0 ){
    // Do not move this console.log
    console.log(sorted.join(","));

    let min = copy[0]
    let index = 0

    for ( let i = 0; i < copy.length; i++){
    // Find the index of the minimum value in the unsorted half
      if (min >= copy[i] ){
          min = copy[i]
          index = i
      }
    // Save and remove the value at the min index
    // Add the min value to the end of the sorted array

    }
    sorted.push(min)
    copy.splice(index,1)
  }

    return sorted
}

console.log(selectionSort([1,7,3,8,9]))

function selectionSortInPlace(arr) {

  // Set a pointer at zero diving the array into sorted and unsorted halves
  let divided = 0
  // Repeat while the unsorted half is not empty:
  while(divided < arr.length) {
    // Do not move this console.log
    console.log(arr.join(","));

    // Find the index of the minimum value in the unsorted half
    let minIndex = divided
    for (let i = divided + 1; i < arr.length; i++){
      if (arr[i] < arr[minIndex]) {
        minIndex = i
      }
    }

    // Save the min value
      let min = arr[minIndex]
      for (let j = minIndex; j > divided; j-- ){
    // Shift every unsorted value to the left of the min value to the right by 1
       arr[j] = arr[j- 1]
      }
    // Put the min value at the divider
       arr[divided] = min
    // Increment the divider and repeat
       divided ++

}
       return arr
}
module.exports = [selectionSort, selectionSortInPlace];
