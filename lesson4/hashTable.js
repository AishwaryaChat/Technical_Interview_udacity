function HashTable () {
  this.table = []
  for (var i = 0; i < 10000; i++) {
    this.table[i] = null
  }
}

HashTable.prototype.calculateHashValue = function (key) {
  let hashValue = key.charCodeAt(0) * 100 + key.charCodeAt(1)
  return hashValue
}

HashTable.prototype.storeKey = function (key) {
  let hashValue = this.calculateHashValue(key)
  if (hashValue !== -1) {
    if (this.table[hashValue] !== null) this.table[hashValue].push(key)
    else this.table[hashValue] = [key]
  }
}

let hashTable = new HashTable()

// console.log(hashTable.calculateHashValue('UDACITY'))

console.log(hashTable.storeKey('UDACITY'))
console.log(hashTable.storeKey('UDACIOUS'))
console.log(hashTable.table[8568])
