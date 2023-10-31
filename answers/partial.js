
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

        // const recurse = (node, count = 0) => {
        //     return node.next ? recurse(node.next, count + 1) : count + 1
        // }

        // if (this.head === null) {
        //     return 0;
        // }
        // return recurse(this.head);
    }
}

// (function () {
//     const ll = new LinkedList(0);
//     ll.append(1);
//     ll.append(2);
//     ll.append(3);
//     console.log(ll.length())
// })();

(function () {
    const ll = new LinkedList(0);
    ll.append(1);
    ll.append(2);
    ll.append(3);
    console.assert(ll.length() === 4, ll.length());
    console.assert(ll.tail.value === 3, ll.tail.value);
    console.assert(ll.tail.next === null, ll.tail.next);
    console.log(JSON.stringify(ll));
})();
