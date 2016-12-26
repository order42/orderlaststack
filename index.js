'use strict';

const assert = require('assert');

function Stack(){
    this.data = [];

}
/** 
 * adds element to stack
 * 
 * @function
 * @param element added 
 */
Stack.prototype.push = function(value){
    this.data.push(value);
};  
/** 
 * Removes the last element from stack and returns it
 * 
 * @function
 * @return last element in stack which was removed
 */
Stack.prototype.pop  =  function(){
    return this.data.pop();
    
};

 /** 
 * shows last element from stack
 * 
 * @function
 * @return last element in stack
 */
Stack.prototype.peek = function(){
    return (this.data[this.data.length - 1]);   
};

/** 
 * Checks if stack is empty 
 * 
 * @function
 * @return true/false
 */
Stack.prototype.isEmpty = function(){
    return (this.data.length === 0);    
};


module.exports = Stack;