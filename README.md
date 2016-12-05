#orderlaststack
Stack implementation in JS

#How to develop
```bash
git clone https://github.com/order42/orderlaststack.git
cd orderlaststack
npm install
```
#API
```javascript
const Node = require('orderlaststack');

const node1 = new Node(1);
const node2 = new Node(2);
node1.addNext(node2);
console.log(node1.value)// 1
```

#Travis CI
[![Build Status](https://travis-ci.org/order42/orderlaststack.svg?branch=master)]
(https://travis-ci.org/order42/orderlaststack)




