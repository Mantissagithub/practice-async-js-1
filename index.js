// ### synchronous callback
// write a funnction higherOrder that takes a callback function as an argument. Inside higherOrder, call the callback synchronously.

function higherOrder(callback) {
    console.log('Higher-order function is executing.');
    callback();
    console.log('Higher-order function completed.');
  }

  function synchronousCallback() {
    console.log('Synchronous callback is executing.');
  }
  
  higherOrder(synchronousCallback);

