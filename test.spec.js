'use strict';

const assert = require('assert');
const Stack = require('./index.js');

describe('order-stack', function(){
    it('should use expected API', function(){
        assert.strictEqual(typeof Stack, 'function','this is not a stack element');
        const newelement1 = new Stack(123);
        assert.strictEqual(typeof newelement1.push,'function','Stack is not a function');/***I have no freaking Idea what this thing really does*/
    });
   
    it('should add element in stack', function(){
        const n = new Stack;
        n.push(1);
        assert.strictEqual(n.isEmpty(), false, 'not empty'); /**что push вообще вставляет элемент*/

    });

    it('should add element in stack', function(){
        const n = new Stack;
        assert.strictEqual(n.isEmpty(), true, 'well,maybe it is just not empty'); /**что isEmpty вообще работоспособен - на пустом стеке*/

    });
    it('should push any kind of data in stack', function(){
        const n = new Stack;
        n.push(9);
        n.push(null);
        assert.strictEqual(n.peek(),null, 'can not push'); /**что push вставляет элемент любого типа*/

    });

    it('should push element in the end', function(){
        const n = new Stack;
        n.push(1);
        n.push(2);
        n.push(3);
        assert.strictEqual(n.peek(), 3, 'not the end of data'); /**что вставляет элемент именно в конец*/

    });

    it('should check if empty no matter what kind of element was inserted in stack', function(){
        const n = new Stack;
        n.push(NaN);
        assert.strictEqual(n.isEmpty(), false, 'not empty'); /**что isEmpty правильно работает с величинами типа NaN*/
    });
    
    it('should show last element from stack', function(){
        const n = new Stack;
        n.push(4);
        assert.strictEqual(n.peek(),4,'not last element');/** что peek работает-показывает последний элемент*/

    });

    it('should peek only the last element', function(){
        const n = new Stack;
        n.push(1);
        n.push(2);
        n.push(3); 
        assert.strictEqual(n.peek(), 3, 'not a peek');/** проверка что peek показывает именно последний элемент*/  
    }
    
    );
    
    it('should only show last element, but do not delete/modify it', function(){ 
        const n = new Stack;
        n.push(1);
        n.peek();
        assert.strictEqual(n.peek(), 1, 'element was modified/deleted maybe'); /**что только показывает его, не удаляя и не модифицируя*/ 
    }
    
    );

    it('should pull last element from stack', function(){
        const n = new Stack;
        n.push(4);
        n.push(-999);
        n.push(null);
        assert.strictEqual(n.peek(),null,'not all elements can be peeked at');/** что peek покажет последний элемент любого типа*/

    });

    it('should pop last element from stack', function(){
        const n = new Stack;
        n.push(1);
        n.push(2);
        n.push(3); 
        assert.strictEqual(n.pop(), 3, 'pop not working');/** проверка что pop вообще работает*/  
    }
    
    );

    it('should remove popped element from stack', function(){
        const n = new Stack;
        n.push(1);
        n.pop(); 
        assert.strictEqual(n.isEmpty(), true, 'pop not working');/** проверка что pop работает и элемент именно удаляется*/  
    }
    
    );


    it('should work togehter', function(){
        const n = new Stack;
        n.isEmpty();
        n.push(1);
        n.push(2);
        n.pop();
        assert.strictEqual(n.peek(), 1, 'coworking is not always a good thing');/** проверка что все 4 метода могут работать в связке*/  
   
    });
});


   

