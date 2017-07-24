// stack implementation using array

function Queue (head = null) {
  this._length = 0
  this.storage = [head]
}

const queue = new Queue(1)
console.log(queue)
