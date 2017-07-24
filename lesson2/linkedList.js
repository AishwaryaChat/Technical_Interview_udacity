function Element (value) {
  this.value = value
  this.next = null
}

function LinkedList (head = null) {
  this._length = 0
  this.head = head
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

const e1 = new Element(1)
const e2 = new Element(2)
let myObj = new LinkedList(e1)
myObj.append(e2)
console.log('myObj', myObj)
myObj.traverse()
