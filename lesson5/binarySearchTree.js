function Node (value) {
  this.value = value
  this.left = null
  this.right = null
}

function BinarySearchTree (root) {
  this.root = new Node(root)
}

BinarySearchTree.prototype.insert = function (start, newVal) {
  if (newVal > start.value) {
    if (start.right) this.insert(start.right, newVal)
    else start.right = new Node(newVal)
  } else if (newVal < start.value) {
    if (start.left) this.insert(start.left, newVal)
    else start.left = new Node(newVal)
  } else console.log('Element already exist in the tree, cannot be inserted.')
}

BinarySearchTree.prototype.traverse = function (start, traversal) {
  if (start) {
    traversal = traversal + start.value + ' '
    traversal = this.traverse(start.left, traversal)
    traversal = this.traverse(start.right, traversal)
  }
  return traversal
}

const bst = new BinarySearchTree(4)
bst.root.left = new Node(3)
bst.root.left.left = new Node(2)
bst.insert(bst.root, 5)
bst.insert(bst.root, 6)
bst.insert(bst.root, 2)
console.log(bst)
console.log(bst.traverse(bst.root, ''))
