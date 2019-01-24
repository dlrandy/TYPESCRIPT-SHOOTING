interface TreeNode<T> {
  value: T;
  left: TreeNode<T>;
  right: TreeNode<T>;
}

interface LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T>;
}

// let node: LinkedListNode<string>;
// node.next.next.next.value;

interface Action {
  type: string;
}

interface ListNode<T> {
  value: T;
  next: ListNode<T>|null;
  prev: ListNode<T>|null;
}

let action1 = {type: 'LOGIN'};
let action2 = {type: 'LOAD_POSTS'};

let actionNode1: ListNode<Action> = {
  value: action1,
  next: null,
  prev: null
};


let actionNode2: ListNode<Action> = {
  value: action2,
  next: null,
  prev: actionNode1
}
actionNode1.next = actionNode2;
// actionNode1.next.next.value;

let currentNode:ListNode<Action>|null  = actionNode2;

while (currentNode){
  console.log(currentNode.value);
  currentNode = currentNode.prev;
} ;






