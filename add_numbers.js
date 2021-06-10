/*
You are given two non-empty linked lists representing two non-negative integers. 
The digits are stored in reverse order, and each of their nodes contains a 
single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, 
except the number 0 itself.
 */




/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


 var addTwoNumbers = function(l1, l2) {
    
    let carry = 0
    let current1 = l1
    let current2 = l2
    let result = new ListNode(0, null)
    let curr = result
    while(current1!==null || current2 !==null){
        let newValue = carry 
        if(current1!==null) newValue+=current1.val
        if(current2!==null) newValue +=current2.val
        // if(current1!==null && current2!==null){
        //     newValue+=current1.val
        //     newValue+=current2.val
        // }
        // else {
        //     if(current1===null)newValue+=current2.val
        //     else newValue+=current1.val
        // }
        if(newValue>9){
            carry = 1
            newValue-=10
        }
        else carry = 0
        
        let newNode = new ListNode(newValue, null)
        curr.next = newNode
        curr = curr.next
        
        if(current1!==null) current1 = current1.next
        if (current2!==null) current2 = current2.next
        
    }
    
    if(carry===1) curr.next = new ListNode(1, null)
    
    return result.next
    
    
    
    
};

/*

Recursive Solution 

let carry = 0;

let addTwoNumbers = function(l1, l2) {
    if(!l1 && !l2 && carry === 0) {
        return null;
    }
    
    let x = l1 ? l1.val : 0;
    let y = l2 ? l2.val : 0;
    let nextL1 = l1 ? l1.next : null;
    let nextL2 = l2 ? l2.next : null;
    
    let sum = x + y + carry;

    carry = Math.floor(sum/10);
    sum = sum % 10;
        
    return {
        val: sum,
        next: addTwoNumbers(nextL1, nextL2)
    };
};

*/