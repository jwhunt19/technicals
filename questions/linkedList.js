/* PART 1

Create an ES6 class for a LinkedList that is composed of nodes that have `value` and `next` properties.
The LinkedList should implement at least the following methods:
    - append
    - length

HINT: don't be afraid to ask questions!
*/

class LinkedList {
  constructor(val) {
    this.head = { val, next: null };
    this.tail = this.head;
  }

  append(val) {
    let node = { val, next: null };
    this.tail.next = node;
    this.tail = node;
  }

  length() {
    let node = this.head;
    let len = 0;

    while (node !== null) {
      len += 1;
      node = node.next;
    }

    return len;
  }

  removeLowest() {
    if (this.head.next === null) return this.head;

    let node = this.head.next;
    const lowest = { val: this.head.val, index: 0, last: false };
    let index = 0;

    while (node !== null) {
      index += 1;

      if (node.val < lowest.val) {
        lowest.val = node.val;
        lowest.index = index;
        if (!node.next) lowest.last = true;
      }

      node = node.next;
    }

    if (lowest.index === 0) {
      this.head = this.head.next;
      return;
    }

    node = this.head;
    index = 0;

    while (node !== null) {
      if (index === lowest.index - 1) {
        if (lowest.last) {
          this.tail = node;
        }
        node.next = node.next.next;
        break;
      }

      index += 1;
      node = node.next;
    }
  }
}

/* PART 2

Add a `removeLowest` method that removes the node with the lowest value from the list.
If multiple nodes have the same value, remove the first encountered

*/

(function () {
  // add in the code you will use to test your LinkedList here,
  // then run `node path/to/linkedList.js`
  let ll = new LinkedList(0);
  ll.append(4);
  ll.append(7);
  ll.append(1);

  console.log(JSON.stringify(ll));
  ll.removeLowest();
  console.log(JSON.stringify(ll));
})();

// a helper function to check things
const assertEq = (got, want) => {
  console.assert(got === want, JSON.stringify(got));
};
