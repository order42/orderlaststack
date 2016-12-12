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









































/** ниже-небольшая закладка чисто для меня. Не обращайте на нее внимания, она закомменчена и никак не влияет на остальной код */
/*var charset = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
function crack(value){
    function toRadix(N,radix) {
        var HexN = "", 
            Q = Math.floor(Math.abs(N)), 
            R,
            strv = charset,
            radix = strv.length;
        while (true) {
            R = Q % radix;
            HexN = strv.charAt(R) + HexN;
            Q = (Q - R) / radix; 
            if (Q == 0) 
                break;
        };
        return ((N < 0) ? "-" + HexN : HexN);
    };
    var start = (new Date()) * 1,
        cracked = false,
        index = 0;
    while(!cracked){
        if(toRadix(index) == value)
            cracked = true;
        else
            index++;
    };
    alert(((new Date()) * 1) - start);
};
Console.log(charset); */