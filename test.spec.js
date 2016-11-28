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

    it('should check if empty no matter waht kind of element was inserted in stack', function(){
        const s = new Stack;
        s.push(NaN);
        assert.strictEqual(s.isEmpty(), false, 'not empty');
    });
    
    it('should pull last element from stack', function(){
        const b = new Stack;
        b.push(2);
        assert.strictEqual(b.pop(),2,'no pop');
        
    });

    it('should peek only the last element', function(){
        const v = new Stack;
        v.push(1);
        c.push(2);
        c.push(3); 
        assert.strictEqual(c.peek(), 3, 'not a peek');  
    }
    
    );
});
   


