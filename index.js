'use strict';

const assert = require('assert');

function Stack(){
    this.data=[];

}

Stack.prototype.push = function(value){
    this.data.push(value);
};  

Stack.prototype.pop  =  function(){
    return this.data.pop();
    
};
 
Stack.prototype.peek = function(){
    return (this.data[this.data.length - 1]);
    
    

};

Stack.prototype.isEmpty = function(){
    return (this.data.length === 0);    
};



module.exports = Stack;

/*Dmitry Sorin, [15 нояб. 2016 г., 10:31]: 
const stack = new Stack;
stack.push(123)
console.log(stack.pop())

const stack = new Stack;
stack.push(123)
console.log(stack.pop())

Dmitry Sorin, [15 нояб. 2016 г., 10:49]: 
const stack = new Stack;
console.log(stack.push(123))
console.log(stack.pop())*/
