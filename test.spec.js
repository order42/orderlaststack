'use strict';

const assert = require('assert');
const Stack = require('./index.js');

describe('order-stack', function(){
    it('should use expected API', function(){
        assert.strictEqual(typeof Stack, 'function','this is not a stack element');
        const newelement1 = new Stack(123);
        assert.strictEqual(typeof newelement1.push,'function','Stack is not a function');
    });
   
    it('should add element in stack', function(){
        const a = new Stack;
        a.push(1);
        assert.strictEqual(a.isEmpty(), false, 'not empty');

    });

    it('should push any kind of data in stack', function(){
        const h = new Stack;
        h.push(NaN);
        assert.strictEqual(h.peek[0],NaN, 'could not insert needed element');

    });

    it('should check if empty no matter waht kind of element was inserted in stack', function(){
        const s = new Stack;
        s.push(NaN);
        assert.strictEqual(s.isEmpty(), false, 'not empty');
    });
    
    it('should pull last element from stack', function(){
        const b = new Stack;
        b.push(4);
        assert.strictEqual(b.peek(),4,'not last element');

    });

    it('should peek only the last element', function(){
        const j = new Stack;
        j.push(1);
        j.push(2);
        j.push(3); 
        assert.strictEqual(j.peek(), 3, 'not a peek');  
    }
    
    );
    
    it('should only show last element, but do not delete/modify it', function(){
        const q = new Stack;
        q.push(1);
        q.peek();
        assert.strictEqual(q.peek(), 1, 'element was modified/deleted maybe');  
    }
    
    );
});

   

