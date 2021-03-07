/**
 * Link to the task
 * https://leetcode.com/problems/add-two-numbers/
 * Definition for singly-linked list. 
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	const val = (l1.val + l2.val) % 10;
	let accumulator = (l1.val + l2.val - val) / 10;

	const head = new ListNode(val);
	let current = head;
	l1 = l1.next;
	l2 = l2.next;

	while (l1 != null && l2 != null) {
		const val = (l1.val + l2.val + accumulator) % 10;

		current.next = new ListNode(val);
		current = current.next;
		accumulator = (l1.val + l2.val + accumulator - val) / 10;
		l1 = l1.next;
		l2 = l2.next;
	}

	if (l1 === null) {
		while (l2 != null) {
			const val = (l2.val + accumulator) % 10;
			current.next = new ListNode(val);

			accumulator = (l2.val + accumulator - val) / 10;

			current = current.next;
			l2 = l2.next;
		}
	}

	if (l2 === null) {
		while (l1 != null) {
			const val = (l1.val + accumulator) % 10;
			current.next = new ListNode(val);

			accumulator = (l1.val + accumulator - val) / 10;

			current = current.next;
			l1 = l1.next;
		}
	}
    
    
	if (accumulator > 0) {
		current.next = new ListNode(accumulator);
	}

	return head;
}
