const binarySearch = (list, val) => {
  let mid = 0
  if (list.length % 2 === 0) {
    mid = (list.length / 2) - 1
  } else {
    mid = Math.ceil(list.length / 2) - 1
  }
  if (val === list[mid]) return 'found'
  if (val < list[mid]) return binarySearch(list.slice(0, mid), val)
  if (val > list[mid]) return binarySearch(list.slice(mid + 1), val)
  return 'Element not found'
}

const list = [1, 3, 9, 11, 15, 19, 29]
const val1 = 25
const val2 = 15

console.log(binarySearch(list, val1))
console.log(binarySearch(list, val2))
