class BinaryTree {
  constructor(val) {
    this.val = val
    this.next = []
  }

  insert(val, node = this) {
    let x = val <= node.val ? 0 : 1; // check for placement of child node

    // check if placement is empty, otherwise recurse
    if (node.next[x] === undefined) {
      node.next[x] = new this.constructor(val)
    } else {
      this.insert(val, node.next[x])
    }
  }

  // return the node that holds the val
  searchDepth(val) {
    console.log(this.val)
    if (this.val === val) return this // check if current node is target

    let x = val <= this.val ? 0 : 1; // check which child tree to go down

    // return null if end of tree, else check next node 
    if (this.next[x] === undefined) {
      return null
    } else {
      return this.next[x].searchDepth(val)
    }
  }
}

// part 2
class BinaryTreeTwo extends BinaryTree {
  constructor(val) {
    super(val)
  }

  searchBreadth(val, queue = []) {
    console.log(this.val)
    if (this.val === val) return this // check if current node is target
    
    // add children nodes if they exist
    this.next.forEach((n) => {
      if (n !== undefined) queue.push(n)
    })
  
    if (queue.length === 0) return null // check if the queue is empty
    // return the search of the next node in queue
    return queue[0].searchBreadth(val, queue.slice(1))
  }

}

(() => {
  console.log('BINARY TREE #1\n=============');
  const tree = new BinaryTree(3);
  tree.insert(2);
  tree.insert(4);
  tree.insert(1);
  tree.insert(3);
  console.log(JSON.stringify(tree));

  console.log(tree.searchDepth(1));
  console.log(tree.searchDepth(5));
})();

(() => {
  console.log('BINARY TREE #2\n=============');
  const tree = new BinaryTreeTwo(3);
  tree.insert(2);
  tree.insert(4);
  tree.insert(1);
  tree.insert(3);

  console.log(tree.searchBreadth(1));
  console.log(tree.searchBreadth(5));
})();


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
