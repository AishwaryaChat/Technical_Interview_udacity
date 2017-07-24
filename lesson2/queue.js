// stack implementation using array

function Queue (head = null) {
  this._length = 0
  this.storage = [head]
}

Queue.prototype.traverse = function () {
  let i = 0
  while (i < this.storage.length) {
    console.log(this.storage[i])
    i++
  }
}

const queue = new Queue(1)
console.log(queue)
queue.traverse()
