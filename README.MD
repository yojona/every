# Every.js

### Call function every second
```javascript
const {call} = require('every')

function sayHello() {
    console.log('Hi')
}

call(sayHello).every(2000)

```
### Call function immediately and every second
```javascript
const {call} = require('every')
function sayHello() {
    console.log('Hi')
}

call(sayHello).now().and().every(2000)

```

### Call function, wait 1 second and run it again
```javascript
const {sleep} = require('every')
async function main() {
    sayHello()
    await sleep(1000)
    sayHello()
}

main()
```
