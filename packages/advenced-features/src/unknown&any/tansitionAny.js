const human = { name: "john", age: 12 };
function printAge(human) {
    console.log(human.age);
}
printAge(human);
(function () {
    const human = { name: "john", age: 12 };
    function printAge(human) {
        console.log("human ", human.age);
    }
    printAge(human);
})();
//# sourceMappingURL=tansitionAny.js.map