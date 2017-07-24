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

LinkedList.prototype.insertElementAtPosition = function (newElement, position) {
  let counter = 1
  let current = this.head
  if (position < 1) {
    return console.log('invalid position provided')
  } else if (position > 1) {
    while (current && counter < position) {
      if (counter === position - 1) {
        newElement.next = current.next
        current.next = newElement
      }
      current = current.next
      counter++
    }
  } else {
    newElement.next = this.head
    this.head = newElement
  }
}

const e1 = new Element(1)
const e2 = new Element(2)
const e3 = new Element(3)
const e4 = new Element(4)
const e12 = new Element(12)
let myObj = new LinkedList(e1)
myObj.append(e2)
myObj.append(e3)
myObj.append(e4)
// myObj.getLength()
// console.log(myObj._length)
myObj.insertElementAtPosition(e12, 2)
myObj.traverse()
console.log(myObj.getElementOnPosition(5))
