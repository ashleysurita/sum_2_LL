class ListNode {
    constructor(value = 0, next = null) {
        this.value = value
        this.next = next
    }
}

function arrayify(head) {
    let ptr = head
    var array = []
    while (ptr != null) {
        array.push(ptr.value)
        ptr = ptr.next
    }
    return array
}

function sumLinkedLists(head1, head2) {
    let curr1 = head1
    let curr2 = head2
    
    while(curr1){
        const sum = curr1.value + curr2.value
        curr1.value = sum
        curr1 = curr1.next
        curr2 = curr2.next
    }
    
    return head1
}

// Test Cases
var LL1 = new ListNode(1, new ListNode(3, new ListNode(5)))
var LL2 = new ListNode(-1, new ListNode(3, new ListNode(-10)))
console.log(arrayify(sumLinkedLists(LL1, LL2))) // [0, 6, -5]
console.log(arrayify(sumLinkedLists(new ListNode(0), new ListNode(0)))) // [0]
