var assert = require("assert")
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })

  describe('#length()', function(){
    it('should return 3 when the value is not present', function(){
      assert.equal(4, [1,2,3,4].length);
    })
  })
})

