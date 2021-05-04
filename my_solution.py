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
    curr1 = head1
    curr2 = head2
    while curr1:
        sum = curr1.value + curr2.value
        curr1.value = sum
        curr1 = curr1.next
        curr2 = curr2.next
        
    return head1

# Test Cases
LL1 = ListNode(1, ListNode(3, ListNode(5)))
LL2 = ListNode(-1, ListNode(3, ListNode(-10)))
print(arrayify(sumLinkedLists(LL1, LL2))) # [0, 6, -5]
print(arrayify(sumLinkedLists(ListNode(0), ListNode(0)))) # [0]
