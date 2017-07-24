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

Queue.prototype.getLength = function () {
  this._length = this.storage.length
}

Queue.prototype.enqueue = function (value) {
  this.storage.push(value)
}

Queue.prototype.dequeue = function () {
  this.storage.shift()
}

const queue = new Queue(1)
queue.enqueue(3)
queue.enqueue(10)
queue.enqueue(4)
// console.log(queue)
queue.dequeue()
queue.traverse()
queue.getLength()
console.log(queue._length)
