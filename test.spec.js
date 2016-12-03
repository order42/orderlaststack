'use strict';

const assert = require('assert');
const Stack = require('./index.js');

describe('order-stack', function(){
    it('should use expected API', function(){
        assert.strictEqual(typeof Stack, 'function','this is not a stack element');
        const newelement1 = new Stack(123);
        assert.strictEqual(typeof newelement1.push,'function','Stack is not a function');/* I have no freaking Idea what this thing really does*/
    });
   
    it('should add element in stack', function(){
        const a = new Stack;
        a.push(1);
        assert.strictEqual(a.isEmpty(), false, 'not empty'); /*что push вообще вставляет элемент*/

    });

    it('should add element in stack', function(){
        const n = new Stack;
        assert.strictEqual(n.isEmpty(), true, 'well,maybe it is just not empty'); /*что isEmpty вообще работоспособен - на пустом стеке*/

    });
    it('should push any kind of data in stack', function(){
        const h = new Stack;
        h.push(9);
        h.push(null);
        assert.strictEqual(h.peek(),null, 'can not push'); /*что push вставляет элемент любого типа*/

    });

    it('should push element in the end', function(){
        const o = new Stack;
        o.push(-1);
        o.push(-2);
        o.push(-3);
        assert.strictEqual(o.peek,o.length[3], 'not the end of data'); /*что вставляет элемент именно в конец*/

    });

    it('should check if empty no matter what kind of element was inserted in stack', function(){
        const s = new Stack;
        s.push(NaN);
        assert.strictEqual(s.isEmpty(), false, 'not empty'); /*что isEmpty правильно работает с величинами типа NaN*/
    });
    
    it('should show last element from stack', function(){
        const b = new Stack;
        b.push(4);
        assert.strictEqual(b.peek(),4,'not last element');/* что peek работает-показывает последний элемент*/

    });

    it('should peek only the last element', function(){
        const j = new Stack;
        j.push(1);
        j.push(2);
        j.push(3); 
        assert.strictEqual(j.peek(), 3, 'not a peek');/* проверка что peek показывает именно последний элемент*/  
    }
    
    );
    
    it('should only show last element, but do not delete/modify it', function(){ 
        const q = new Stack;
        q.push(1);
        q.peek();
        assert.strictEqual(q.peek(), 1, 'element was modified/deleted maybe'); /*что только показывает его, не удаляя и не модифицируя*/ 
    }
    
    );

    it('should pull last element from stack', function(){
        const r = new Stack;
        r.push(4);
        r.push(-999);
        r.push(null);
        assert.strictEqual(r.peek(),null,'not all elements can be peeked at');/* что peek покажет последний элемент любого типа*/

    });

    /*it('should work togehter', function(){
        const k = new Stack;
        k.isEmpty if isEmpty(true)
        
        { k.push(1);
        j.push(2);
        j.push(3); 
        assert.strictEqual(j.peek(), 3, 'not a peek');/* проверка что все 4 метода могут рабоатть в связке*/  
   
        
});

   

