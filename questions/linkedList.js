/* PART 1

Create an ES6 class for a LinkedList that is composed of nodes that have `value` and `next` properties.
The LinkedList should implement at least the following methods:
    - append
    - length

HINT: don't be afraid to ask questions!
*/

class LinkedList {
    append() {

    }

    length() {

    }
}

/* PART 2

Add a `removeLowest` method that removes the node with the lowest value from the list.
If multiple nodes have the same value, remove the first encountered

*/

(function () {
    // add in the code you will use to test your LinkedList here,
    // then run `node path/to/linkedList.js`
})();

// a helper function to check things
const assertEq = (got, want) => {
    console.assert(got === want, JSON.stringify(got));
}
