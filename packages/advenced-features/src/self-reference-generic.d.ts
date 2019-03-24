interface TreeNode<T> {
    value: T;
    left: TreeNode<T>;
    right: TreeNode<T>;
}
interface LinkedListNode<T> {
    value: T;
    next: LinkedListNode<T>;
}
interface Action {
    type: string;
}
interface ListNode<T> {
    value: T;
    next: ListNode<T> | null;
    prev: ListNode<T> | null;
}
declare let action1: {
    type: string;
};
declare let action2: {
    type: string;
};
declare let actionNode1: ListNode<Action>;
declare let actionNode2: ListNode<Action>;
declare let currentNode: ListNode<Action> | null;
