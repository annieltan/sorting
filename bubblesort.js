function comparison(){
  return 'compared'
}

function swapped(){
  return 'swapped'
}

function bubbleSort(array){
  var prevArray = array
  var sortedArray = array.slice()

  if (!array.length || array.length == 1){
    return array
  }
  else {
    for (var i=0; i<array.length; i++){
      //comparison()
      //console.log('COMPARING!')
      if (sortedArray[i]>sortedArray[i+1]){
        swap = sortedArray[i] //12
        swapTwo = sortedArray[i+1] //4
        sortedArray[i] = swapTwo
        sortedArray[i+1] = swap
        swapped()
        console.log('SWAPPING')
      }
      else {
        comparison()
        console.log('COMPARING')
      }
    }
  }

  if (sortedArray.toString() === prevArray.toString()){
    return sortedArray
  }
  else {
    return bubbleSort(sortedArray)
  }
};



console.log(bubbleSort([12,4,3,20]))
