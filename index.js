'use strict';

const assert = require('assert');

function Stack(){
    this.data=[];

}

Stack.prototype.push = function(value){
    this.data.push(value);
};  
/** 
 * Removes the last element from stack and return it
 * 
 * @function
 * @return first element in stack
 */
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

