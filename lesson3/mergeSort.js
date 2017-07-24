const merge = (list1, list2, mergeList = []) => {
  if (list1.length === 0 && list2.length === 0) return mergeList
  if (list1.length !== 0 && list2.length === 0) return mergeList.concat(list1)
  if (list1.length === 0 && list2.length !== 0) return mergeList.concat(list2)
  if (list1[0] <= list2[0]) {
    mergeList.push(list1[0])
    list1.shift()
    return merge(list1, list2, mergeList)
  } else {
    mergeList.push(list2[0])
    list2.shift()
    return merge(list1, list2, mergeList)
  }
}

const mergeSort = list => {
  if (list.length < 2) {
    return list
  }
  let m = 0
  if (list.length % 2 === 0) m = list.length / 2
  else m = Math.floor(list.length / 2)
  return merge(mergeSort(list.slice(0, m)), mergeSort(list.slice(m)))
}

const list = [10, 29, 9, 154, 15, 4, 2]

console.log(mergeSort(list))
