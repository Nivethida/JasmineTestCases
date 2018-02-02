/**
 * Created by nivethida on 8/12/17.
 */
describe("testing calculator",function (){

    it("testing to be undefined",function () {
        expect(calc).toBeUndefined();
    });

    it(" testing to eual to 0",function () {
        expect(calc1).toBeDefined();
    });
    it("testing addition",function(){
        expect(add(4,3)).toEqual(7);
    });
    it("testing boolean values",function () {
        expect(calc2).toBeTruthy();
    });
    it("sequential test",function () {
        expect([1,3,5,6]).toContain(3);
    });
    var num = 8;
    it("greater than",function () {
        expect(num).toBeGreaterThan(5);
    })
});
