/**
 * Created by nivethida on 8/8/17.
 */
describe('Bubble sort test cases by jasmine',function () {
    it('should sort simple interger list',function () {
    var unsorted = [21,2,55,6,8,4];
    var sorted = bubbleSort(unsorted);
    var max = stack.max();
        expect(sorted[0]).toEqual(2);
        expect(sorted[1]).toEqual(4);
        expect(sorted[2]).toEqual(6);
        expect(sorted[3]).toEqual(8);
        expect(sorted[4]).toEqual(21);
        expect(sorted[5]).toEqual(55);
        expect(max).toEqual(55);
    });
})
