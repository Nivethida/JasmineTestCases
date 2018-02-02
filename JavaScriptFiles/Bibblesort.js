/**
 * Created by nivethida on 8/8/17.
 */
var givenArray = [5,1,4,2,8,6];
var bubbleSort = function (givenArray) {
    var temp =[];
    for(var loop = 0; loop < givenArray.length; loop++){
        for(var innerLoop = 0; innerLoop < givenArray.length; innerLoop++){

            if(givenArray[innerLoop] > givenArray[innerLoop+1])
            {

                temp = givenArray[innerLoop];
                givenArray[innerLoop] = givenArray[innerLoop + 1];
                givenArray[innerLoop + 1] = temp;
            }
        }
    }
    return givenArray;

}
bubbleSort(givenArray);
