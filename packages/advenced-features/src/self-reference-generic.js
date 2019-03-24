let action1 = { type: 'LOGIN' };
let action2 = { type: 'LOAD_POSTS' };
let actionNode1 = {
    value: action1,
    next: null,
    prev: null
};
let actionNode2 = {
    value: action2,
    next: null,
    prev: actionNode1
};
actionNode1.next = actionNode2;
let currentNode = actionNode2;
while (currentNode) {
    console.log(currentNode.value);
    currentNode = currentNode.prev;
}
;
//# sourceMappingURL=self-reference-generic.js.map