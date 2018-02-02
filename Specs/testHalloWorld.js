/**
 * Created by nivethida on 6/9/17.
 */
describe("testCase1", function(){
    it("should Return Hello world",function(){
        expect(helloworld()).toBe('World');
    });
    it("when passing negative values", function() {
        expect(helloworld().toBe('hello'))
    })

});
