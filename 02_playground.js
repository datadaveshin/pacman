function dfs(sourceNode, destinationNode) {
  // in JS Arrays have push and pop, which behave as we expect a stack to behave.
  let frontier = [];
  let explored = new Set();

  let queueObj = {
    node: sourceNode,
    path: []
  };

  frontier.push(sourceNode);

  // Search until we're out of nodes
  while(frontier.length > 0) {
    let currentQueueObj = frontier.pop();
    let curNode = currentQueueObj.node;
    let curPath = currentQueueObj.path;

    // Found a solution, return the path.
    if(curNode === destinationNode) {
      return curPath;
    }
    else if(explored.has(curNode)) {
      continue;
    }

    for(let i = 0; i < curNode.neighbors.length; i++) {
      let newNode = curNode.neighbors[i];
      let newPath = curPath.slice();
      newPath.push(curNode);

      // We use this format so we can track the path
      let newQueueObj = {
        node: newNode,
        path: newPath
      }

      // If the new node isn't a solution, add it to the queue and search more.
      frontier.push(newQueueObj);
    }

    explored.add(curNode);
  }

  // No solution.
  return null;
}
