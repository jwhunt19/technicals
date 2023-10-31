// Given a linked list with `n` nodes, find and remove the node
// that has the lowest value. Return the value of the node that was removed.
//
// If multiple nodes have the same lowest value, return the first encountered.
//
// If no nodes are removed, return -1.

/* PART 1

Create an ES6 class for a LinkedList that is composed of nodes that have `value` and `next` properties.
The LinkedList should implement at least the following methods:
    - append
    - length

HINT: don't be afraid to ask questions!
*/

/* PART 2

Add a `removeLowest` method that removes the node with the lowest value from the list.
If multiple nodes have the same value, remove the first encountered

*/

class LinkedList {
    head = null;
    tail = null;

    constructor(x) {
        this.head = {
            value: x,
            next: null,
        };
        this.tail = this.head;
    }

    append(x) {
        const newNode = {
            value: x,
            next: null,
        };

        if (this.length() === 0) {
            this.head = newNode;
            this.tail = newNode;
        }

        if (this.length() === 1) {
            this.head.next = newNode;
            this.tail = newNode;
            return;
        }

        this.tail.next = newNode;
        this.tail = this.tail.next;
    }

    length() {
        let node = this.head;
        let len = 0;
        if (node != null) {
            len++;
            while (node.next !== null) {
                len++;
                node = node.next;
            }
        }
        return len;
    }

    // For part 2
    removeLowest() {
        // edge case
        if (this.length() < 2) {
            this.head = null;
            this.tail = null;
            return;
        }

        // satisfies edge case
        let lowest = this.head.value;

        // we don't need to keep track of the lowest node, we need
        // to keep track of the node BEFORE the lowest node, so that we can reassign its `next` pointer
        //
        // if it's null, that means the lowest is the head, so we drop it
        let nodeBeforeLowest = null;

        let node = this.head;
        while (node.next != null) {
            if (node.next.value < lowest) {
                lowest = node.next.value;
                nodeBeforeLowest = node;
            }
            node = node.next;
        }

        if (nodeBeforeLowest === null) {
            // nothing has a lower value than the head, reassign head
            this.head = this.head.next;
            return;
        }

        // reassign tail, just in case it was the lowest and is going to be dropped
        this.tail = nodeBeforeLowest.next === this.tail ? nodeBeforeLowest : this.tail;

        nodeBeforeLowest.next = nodeBeforeLowest.next.next;
    }
}

(function () {
    const ll = new LinkedList(0);
    ll.append(1);
    ll.append(2);
    ll.append(3);
    console.assert(ll.length() === 4, ll.length());
    console.assert(ll.tail.value === 3, ll.tail.value);
    console.assert(ll.tail.next === null, ll.tail.next);
    console.log(JSON.stringify(ll));

    console.log('Drop lowest (which is head)');
    console.assert(ll.head.value === 0, JSON.stringify(ll.head));
    ll.removeLowest();
    console.assert(ll.length() === 3, ll.length());
    console.assert(ll.head.value === 1, JSON.stringify(ll.head), ll.head.value);

    ll.append(-1);
    console.log('Drop lowest (which is tail)');
    console.assert(ll.tail.value === -1, JSON.stringify(ll.tail));
    ll.removeLowest();
    console.assert(ll.length() === 3, ll.length());
    console.assert(ll.tail.value === 3, JSON.stringify(ll.tail));

    ll.append(-1);
    ll.append(0);
    console.log('Drop lowest (which is somewhere in the middle)');
    console.log('==== Before ====');
    console.log(JSON.stringify(ll));
    ll.removeLowest();
    console.assert(ll.length() === 4, ll.length());
    console.log('==== After ====');
    console.log(JSON.stringify(ll));

    console.log("PASSED\n")
})();

(function () {
    console.log('edge cases');
    const ll = new LinkedList(0);
    ll.removeLowest();
    ll.removeLowest();
    console.assert(ll.length() === 0, ll.length());

    // append to zero-length
    ll.append(1);
    console.assert(ll.head != null);
    console.assert(ll.tail != null);
    console.log("PASSED\n")
})();
