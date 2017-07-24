const bubbleSort = list => {
  let temp = 0
  for (var j = 0; j < list.length; j++) {
    for (var i = 0; i < list.length - j; i++) {
      if (list[i] > list[i + 1]) {
        temp = list[i]
        list[i] = list[i + 1]
        list[i + 1] = temp
      }
    }
  }
  return list
}

const list = [10, 29, 9, 154, 15, 4, 2]
const list1 = [1, 2, 3, 4, 5]
const list2 = [5, 4, 3, 2, 1]

console.log(bubbleSort(list))
console.log(bubbleSort(list1))
console.log(bubbleSort(list2))
