/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    // create a new node/list
    let head = new ListNode();
    let current = head;
    // grab start of both lists, add together, set next prop on return node and continue
    let added, newVal;
    let carry = 0;

    // while loop for when node.next !== null (add when both lists have value)
    while (l1 !== null && l2 !== null) {
        added = l1.val + l2.val + carry // add nodes from each list @ same index
        if (added >= 10) {
            newVal = added % 10; // any two digit nums become the single
            carry = 1;
        } else {
            newVal = added;
            carry = 0;
        }

        current.val = newVal // assign single digit value to new list, and iterate

        l1 = l1.next
        l2 = l2.next

        // increment ptr on all lists
        if (l1 !== null || l2 !== null) {
            current.next = new ListNode();
            current = current.next;
        }
    }

    while (l1 !== null) {
        added = l1.val + carry // add nodes from each list @ same index
        if (added >= 10) {
            newVal = added % 10; // any two digit nums become the single
            carry = 1;
        } else {
            newVal = added;
            carry = 0;
        }
        current.val = newVal // assign single digit value to new list, and iterate

        // increment ptr on all lists
        l1 = l1.next
        if (l1 !== null) {
            current.next = new ListNode()
            current = current.next;
        }
    }

    while (l2 !== null) {
        added = l2.val + carry // add nodes from each list @ same index
        if (added >= 10) {
            newVal = added % 10; // any two digit nums become the single
            carry = 1;
        } else {
            newVal = added;
            carry = 0;

        }
        current.val = newVal // assign single digit value to new list, and iterate

        // increment ptr on all lists
        l2 = l2.next
        if (l2 !== null) {
            current.next = new ListNode()
            current = current.next;
        }
    }

    if (carry === 1) {
        current.next = new ListNode(1, null)
    }

    return head;
};