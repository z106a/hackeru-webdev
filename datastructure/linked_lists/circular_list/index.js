// Given a linked list, return true if the list 
// is circular, false if it is not.
// const l = new List();
// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// l.head = a;
// a.next = b;
// b.next = c;
// c.next = b;
// circular(l); // true

const { LinkedList, Node } = require('../index');

function cicular(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}

const l = new LinkedList();
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
l.head = a;
a.next = b;
b.next = c;
c.next = b;
console.log(cicular(l));
module.exports = cicular;
