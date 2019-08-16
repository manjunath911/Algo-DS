//LIFO principle (Last in first out)
//Manage funcion invocation, undo/redo, routing in react(history object) is treated like satck
//Array Implementation,Defaut,No additional code needed
var stack = [];
stack.push("item");//push at the end
stack.pop();//pop from the end

stack.unshift("item"); //insert at the beginning
stack.shift();//remove from the buginning
//Both approach mimic stack / LIFO principle
