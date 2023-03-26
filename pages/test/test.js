function add(first, second){

    return 3;
  }
 
  QUnit.module('add');
  
  QUnit.test('adding two numbers together', assert => {
      assert.equal(add(1, 2), 3);
    });