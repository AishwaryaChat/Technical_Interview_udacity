const quickSort = (list, l, r) => {
  let pivot = 0
  let partitionIndex = 0

  if (l < r) {
    pivot = r
    partitionIndex = partition(list, pivot, l, r)
    quickSort(list, l, partitionIndex - 1)
    quickSort(list, partitionIndex + 1, r)
  }
  return list
}

const partition = (list, pivot, l, r) => {
  const pivotVal = list[pivot]
  let partitionIndex = l
  for (var i = l; i < r; i++) {
    if (list[i] < pivotVal) {
      swap(list, i, partitionIndex)
      partitionIndex++
    }
  }
  swap(list, r, partitionIndex)
  return partitionIndex
}

const swap = (list, i, j) => {
  let temp = list[i]
  list[i] = list[j]
  list[j] = temp
}

const list = [10, 29, 9, 154, 15, 4, 2]
console.log(quickSort(list, 0, list.length - 1))
