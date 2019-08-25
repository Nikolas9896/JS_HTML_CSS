var array1 = [23, -60, 34, 65, -200, 50];
var array2 = [50, 50, 50, 50, 50, 50];
var array3 = [50, 50, 50,"Super", "Man", 50, -23, 50];

function printReverse(array)
{   
    var maxIndex = array.length-1;
    for(var i=maxIndex; i >= 0; i-- )
    {
        console.log(array[i]);
    }
}
function isUniform(array)
{
    var firstElement=array[0];

    for(var i=1; i<array.length; i++)
    {
        if(firstElement!==array[i])
        {   
            console.log("The "+ i + " element is different");
            return false;
        }
        
    }
    console.log("All elements are identical");
            return true;
}
function sumArray(array)
{
    var sum=0;
    for(var i=0; i < array.length; i++)
    {
        sum +=array[i];
    }
    console.log("The sum of array are: " + sum);
    return sum;
}