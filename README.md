# sum_2_LL

### Problem:
Javascript
```
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
    // Write your code here.
    return new ListNode()
}

// Test Cases
var LL1 = new ListNode(1, new ListNode(3, new ListNode(5)))
var LL2 = new ListNode(-1, new ListNode(3, new ListNode(-10)))
console.log(arrayify(sumLinkedLists(LL1, LL2))) // [0, 6, -5]
console.log(arrayify(sumLinkedLists(new ListNode(0), new ListNode(0)))) // [0]
```

Python
```
class ListNode:
    def __init__(self, value = 0, next = None): 
        self.value = value
        self.next = next
        
def arrayify(head) -> [int]:
    array = []
    ptr = head
    while ptr != None:
        array.append(ptr.value)
        ptr = ptr.next
    return array

def sumLinkedLists(head1: ListNode, head2: ListNode) -> ListNode:
    # Write your code here.
    pass

# Test Cases
LL1 = ListNode(1, ListNode(3, ListNode(5)))
LL2 = ListNode(-1, ListNode(3, ListNode(-10)))
print(arrayify(sumLinkedLists(LL1, LL2))) # [0, 6, -5]
print(arrayify(sumLinkedLists(ListNode(0), ListNode(0)))) # [0]
```
