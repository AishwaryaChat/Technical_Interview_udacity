class Node {
  constructor (value) {
    this.value = value
    this.edges = []
    this.visited = false
  }
}

class Edge {
  constructor (value, nodeFrom, nodeTo) {
    this.value = value
    this.nodeFrom = nodeFrom
    this.nodeTo = nodeTo
  }
}

class Graph {
  constructor (nodes = [], edges = []) {
    this.nodes = nodes
    this.edges = edges
    this.nodeNames = []
    this.nodeMap = {}
  }

  setNodeNames (names) {
    this.nodeNames = [...names]
  }

  insertNode (newNodeVal) {
    let newNode = new Node(newNodeVal)
    this.nodes.push(newNode)
    this.nodeMap[newNodeVal] = newNode
    return newNode
  }
}

const graph = new Graph()
const nodeNames = ['Mountain View', 'San Francisco', 'London', 'Shanghai',
  'Berlin', 'Sao Paolo', 'Bangalore']
graph.setNodeNames(nodeNames)
console.log(graph.nodeNames)
