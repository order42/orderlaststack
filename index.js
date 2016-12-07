'use strict';

const assert = require('assert');

function Stack(){
    this.data=[];

}

Stack.prototype.push = function(value){
    this.data.push(value);
};  
/** 
 * adds element to stack
 * 
 * @function
 * @param element added 
 */
Stack.prototype.pop  =  function(){
    return this.data.pop();
    
};
/** 
 * Removes the last element from stack and returns it
 * 
 * @function
 * @return last element in stack which was removed
 */
 
Stack.prototype.peek = function(){
    return (this.data[this.data.length - 1]);   
};
/** 
 * shows last element from stack
 * 
 * @function
 * @return last element in stack
 */

Stack.prototype.isEmpty = function(){
    return (this.data.length === 0);    
};
/** 
 * Checks if stack is empty 
 * 
 * @function
 * @return true/false
 */


module.exports = Stack;


/** var n =[]; 
n.push(1);
n.push(2);
n.push(3);
var j = (n[2]);
console.log(j);*/



 /*const n = new Stack;
        n.push(1);
        n.push(2);
        n.push(3);
        assert.strictEqual(console.log(n[2]))*/


        const n = new Stack;
        n.push(1);
        n.push(2);
        console.log(n);
        console.log(n[n.length - 1]);