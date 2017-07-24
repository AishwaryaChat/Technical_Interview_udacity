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
  return this._length
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

LinkedList.prototype.inserAtFirst = function (newElement) {
  newElement.next = this.head
  this.head = newElement
}

LinkedList.prototype.deleteFirst = function () {
  if (this.head) {
    let deletedElement = this.head
    let temp = deletedElement.next
    this.head = temp
    return deletedElement.value
  }
  return 'Stack is empty'
}

function Stack (top = null) {
  this._length = 0
  this.ll = new LinkedList(top)
}

Stack.prototype.traverse = function () {
  this.ll.traverse()
}

Stack.prototype.getLength = function () {
  this._length = this.ll.getLength()
}

Stack.prototype.push = function (newElement) {
  this.ll.inserAtFirst(newElement)
}

Stack.prototype.pop = function () {
  console.log(this.ll.deleteFirst())
}

const e1 = new Element(1)
const e2 = new Element(2)
const e3 = new Element(3)
const e4 = new Element(4)

let stack = new Stack(e1)
stack.push(e2)
stack.push(e3)
stack.push(e4)
stack.pop()
stack.traverse()
stack.getLength()
console.log(stack._length)
