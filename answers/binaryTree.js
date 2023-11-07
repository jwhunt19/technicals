class BinaryTree {
    constructor(val) {
        this.value = val;
        this.right = null;
        this.left = null;
    }

    insert(val) {
        if (val > this.value) {
            if (this.right === null) {
                this.right = new this.constructor(val);
                return;
            }
            this.right.insert(val);
        }
        if (this.left === null) {
            this.left = new this.constructor(val);
            return;
        }
        this.left.insert(val);

        /*
        shorter ternary:

        if (val > this.value) {
            this.right === null ? this.right = new BinaryTree(val) : this.right.insert(val);
        }

        and so on for left
         */
    }

    searchDepth(val) {
        if (val === this.value) {
            return this;
        }
        if (this.right && val > this.value) {
            return this.right.searchDepth(val);
        }
        if (this.left) {
            return this.left.searchDepth(val);
        }
        return null;
    }
}

// part 2
class BinaryTreeTwo extends BinaryTree {
    constructor(val) {
        super(val);
    } // make this inherit the parent's

    searchBreadth(val, queue = []) {
        if (val === this.value) {
            return this;
        }

        // enqueue left, then right (via reassignment)
        if (this.left) {
            queue = [this.left, ...queue]
        }
        if (this.right) {
            queue = [this.right, ...queue]
        }
        if (queue.length === 0) { // nothing more to search
            return null;
        }

        return queue.pop().searchBreadth(val, queue)
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

(() => {
    console.log("BINARY TREE #1\n=============")
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
    console.log("BINARY TREE #2\n=============")
    const tree = new BinaryTreeTwo(3);
    tree.insert(2);
    tree.insert(4);
    tree.insert(1);
    tree.insert(3);

    console.log(tree.searchBreadth(1));
    console.log(tree.searchBreadth(5));
})();