'use strict';

const assert = require('assert');
const Stack = require('./index.js');

describe('order-stack', function()

{
    it('should use expected API', function(){
        const n = new Stack();
        assert.strictEqual(typeof n.push,'function','push is not a function');/**now I have some freaking Idea what this thing really does*/
        assert.strictEqual(typeof n.peek,'function','pop is not a function');
        assert.strictEqual(typeof n.pop,'function','peek is not a function');
        assert.strictEqual(typeof n.isEmpty,'function','isEmpty is not a function');
    });
   
    it('should add element in stack', function(){
        const n = new Stack;
        n.push(1);
        assert.strictEqual(n.isEmpty(), false, 'nothing was pushed in the stack'); /**что push вообще вставляет элемент*/

    });

    it('should check if stack is empty', function(){
        const n = new Stack;
        assert.strictEqual(n.isEmpty(), true, 'well,maybe it is just not empty'); /**что isEmpty вообще работоспособен - на пустом стеке*/

    });
    it('should push any kind of data in stack', function(){
        const n = new Stack;
        n.push(9);
        n.push(null);
        assert.strictEqual(n.peek(),null, 'can not push this element'); /**что push вставляет элемент любого типа*/

    });


    it('should push element in the end', function(){
        const n = new Stack;
        n.push(1);
        n.push(2);
        assert.strictEqual(n.peek(),2, 'not the end of data'); /**что вставляет элемент именно в конец */

    });

    it('should check if empty no matter what kind of element was inserted in stack', function(){
        const n = new Stack;
        n.push(NaN);
        assert.strictEqual(n.isEmpty(), false, 'if you add this element, emptiness check fails'); /**что isEmpty правильно работает с величинами типа NaN*/
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
        assert.strictEqual(n.peek(), 3, 'if you peek at element long enough, it may peek back');/** проверка что peek показывает именно последний элемент*/  
    }
    
    );
    
    it('should only show last element, but do not delete/modify it', function(){ 
        const n = new Stack;
        n.push(1);
        n.peek();
        assert.strictEqual(n.peek(), 1, 'element was modified/deleted maybe'); /**что только показывает его, не удаляя и не модифицируя*/ 
    }
    
    );

    it('should pull any last element from stack', function(){
        const n = new Stack;
        n.push(4);
        n.push(-999);
        n.push(null);
        assert.strictEqual(n.peek(),null,'not all elements can be peeked at');/** что peek покажет последний элемент любого типа*/

    });

it('should pull even undefined last element from stack', function(){
    const n = new Stack;
    n.push(undefined);
assert.strictEqual(n.peek(),undefined,'undefined' ); /**что обработка undefined идет корректно */

});

    it('should remove popped element from stack', function(){
        const n = new Stack;
        n.push(1);
        n.pop(); 
        assert.strictEqual(n.isEmpty(), true, 'pop not working');/** проверка что pop работает и элемент именно удаляется*/  
        
    } );


    it('should work togehter', function(){
        const n = new Stack;
        n.isEmpty();
        n.push(1);
        n.push(2);
        n.pop();
        assert.strictEqual(n.peek(), 1, 'some of the methods just do not get along');/** проверка что все 4 метода могут работать в связке*/  
   
    });


/**it('should work with cycles', function(){
    const n = new Stack 
     var i = 0;
      while (i<3) 
    n.push(i);
    i++;
    assert.strictEqual(n.peek(),3,'cycles are not good');
});   */






   

