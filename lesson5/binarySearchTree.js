function Node (value) {
  this.value = value
  this.left = null
  this.right = null
}

function BinarySearchTree (root) {
  this.root = new Node(root)
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
console.log(bst.traverse(bst.root, ''))
