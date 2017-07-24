// stack implementation using linked list
function Element (value) {
  this.value = value
  this.next = null
}

function LinkedList (head = null) {
  this._length = 0
  this.head = head
}

LinkedList.prototype.getLength = function () {
  let counter = 0
  let current = this.head
  while (current !== null) {
    current = current.next
    counter++
  }
  this._length = counter
}

LinkedList.prototype.traverse = function () {
  let current = this.head
  while (current !== null) {
    console.log(current.value)
    current = current.next
  }
}

LinkedList.prototype.append = function (newElement) {
  let current = this.head
  if (this.head) {
    while (current.next) {
      current = current.next
    }
    current.next = newElement
  } else {
    this.head = newElement
  }
}

LinkedList.prototype.getElementOnPosition = function (position) {
  let counter = 1
  let current = this.head
  if (position < 1) {
    return null
  }
  while (current && counter <= position) {
    if (counter === position) {
      return current.value
    }
    current = current.next
    counter++
  }
}

function Stack (top = null) {
  this.ll = new LinkedList(top)
}

const e1 = new Element(1)
// const e2 = new Element(2)
// const e3 = new Element(3)
// const e4 = new Element(4)

let stack = new Stack(e1)
console.log(stack)
