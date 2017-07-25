function Node (value) {
  this.value = value
  this.left = null
  this.right = null
}

function BinaryTree (root) {
  this.root = new Node(root)
}

BinaryTree.prototype.traverse = function (start, traversal) {
  if (start) {
    traversal = traversal + start.value + ' '
    traversal = this.traverse(start.left, traversal)
    traversal = this.traverse(start.right, traversal)
  }
  return traversal
}

BinaryTree.prototype.search = function (start, value) {
  if (start) {
    if (start.value === value) return 'Found'
    return this.search(start.left, value) || this.search(start.right, value)
  }
  return 'Did not found'
}

const tree = new BinaryTree(1)
tree.root.left = new Node(2)
tree.root.right = new Node(3)
tree.root.left.left = new Node(4)
tree.root.left.right = new Node(5)
console.log(tree.traverse(tree.root, ''))
console.log(tree.search(tree.root, 4))
console.log(tree.search(tree.root, 9))
