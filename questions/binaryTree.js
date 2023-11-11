class BinaryTree {
  constructor(val) {
    this.val = val
    this.next = []
  }

  insert(val, node = this) {
    let x = val <= node.val ? 0 : 1; // check for placement of child node

    // check if placement is empty, otherwise recurse
    if (node.next[x] === undefined) {
      node.next[x] = new BinaryTree(val)
    } else {
      this.insert(val, node.next[x])
    }
  }

  // return the node that holds the val
  searchDepth(val, node = this) {
    if (node.val === val) return node // check if current node is target

    let x = val <= node.val ? 0 : 1; // check which child tree to go down

    // return null if end of tree, else check next node 
    if (node.next[x] === undefined) {
      return null
    } else {
      return this.searchDepth(val, node.next[x])
    }
  }
}

// part 2
class BinaryTreeTwo extends BinaryTree {
  constructor(val) {
    super(val)
  }

  searchBreadth(val, queue = [this]) {
    if (queue.length === 0) return null // check if the queue is empty

    let node = queue.shift() // set next up in queue to variable
    console.log(node.val)
    if (node.val === val) return node // check if current node is target

    // add children nodes if they exist
    node.next.forEach((n) => {
      if (n !== undefined) queue.push(n)
    })

    // return the search of the next node in queue
    return this.searchBreadth(val, queue)
  }

}


/**
 * what is the space complexity?
 *
 * Assuming a balanced tree:
 * time complexity of insertion?  
 * time complexity of lookup?
 *
 * Now forget about being balanced:
 *
 * time complexity of insertion?
 * time complexity of lookup?
 */
