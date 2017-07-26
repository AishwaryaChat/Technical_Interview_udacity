function Node (value) {
  this.value = value
  this.edges = []
}

function Edge (value, nodeFrom, nodeTo) {
  this.value = value
  this.nodeFrom = nodeFrom
  this.nodeTo = nodeTo
}

function Graph (nodes = [], edges = []) {
  this.nodes = nodes
  this.edges = edges
}

Graph.prototype.insertNode = function (newNodeVal) {
  let newNode = new Node(newNodeVal)
  this.nodes.push(newNode)
}

Graph.prototype.insertEdge = function (newEdgeVal, nodeFromVal, nodeToVal) {
  let fromFound = null
  let toFound = null
  this.nodes.map(node => {
    if (nodeFromVal === node.value) fromFound = node
    if (nodeToVal === node.value) toFound = node
  })

  if (fromFound === null) {
    fromFound = new Node(nodeFromVal)
    this.nodes.push(fromFound)
  }

  if (toFound === null) {
    toFound = new Node(nodeToVal)
    this.nodes.push(toFound)
  }

  let newEdge = new Edge(newEdgeVal, fromFound, toFound)
  this.edges.push(newEdge)
  fromFound.edges.push(newEdge)
  toFound.edges.push(newEdge)
}

Graph.prototype.getEdgeList = function () {
  let list = []
  this.edges.map(edge => {
    let ed = []
    ed.push(edge.value)
    ed.push(edge.nodeFrom.value)
    ed.push(edge.nodeTo.value)
    list.push(ed)
  })
  return list
}

Graph.prototype.getAdjacencyList = function () {
  let maxIndex = findMaxIndex(this.nodes)
  let adjacencyList = []
  for (var i = 0; i <= maxIndex; i++) adjacencyList[i] = null
  this.edges.map(edge => {
    if (adjacencyList[edge.nodeFrom.value]) adjacencyList[edge.nodeFrom.value].push([edge.nodeTo.value, edge.value])
    else adjacencyList[edge.nodeFrom.value] = [[edge.nodeTo.value, edge.value]]
  })
  return adjacencyList
}

Graph.prototype.getAdjacencyMatrix = function () {
  let maxIndex = findMaxIndex(this.nodes)
  let adjacencyMatrix = []
  for (var i = 0; i <= maxIndex; i++) {
    adjacencyMatrix[i] = []
  }
  for (var k = 0; k <= maxIndex; k++) {
    for (var j = 0; j <= maxIndex; j++) adjacencyMatrix[k].push(0)
  }
  this.edges.map(edge => {
    adjacencyMatrix[edge.nodeFrom.value][edge.nodeTo.value] = edge.value
  })
  return adjacencyMatrix
}

const findMaxIndex = (nodes) => {
  let maxIndex = -1
  nodes.map(node => {
    if (node.value > maxIndex) {
      maxIndex = node.value
    }
  })
  return maxIndex
}

const graph = new Graph()
graph.insertEdge(100, 1, 2)
graph.insertEdge(101, 1, 3)
graph.insertEdge(102, 1, 4)
graph.insertEdge(104, 3, 2)
// console.log(graph)
// console.log(graph.getEdgeList())
// console.log(graph.getAdjacencyList())
console.log(graph.getAdjacencyMatrix())
