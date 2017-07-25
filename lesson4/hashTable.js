function HashTable () {
  this.table = [null] * 1000
}

HashTable.prototype.calculateHashValue = function (key) {
  let hashValue = key.charCodeAt(0) * 100 + key.charCodeAt(1)
  return hashValue
}

let hashTable = new HashTable()

console.log(hashTable.calculateHashValue('UDACITY'))
