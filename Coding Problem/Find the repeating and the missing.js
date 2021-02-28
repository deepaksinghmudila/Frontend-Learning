/* 2. Given an unsorted array of size n.Array elements are in the range from 1 to n.One number from set { 1, 2, …n } is missing and one number occurs twice in the array.Find these two numbers. */

/** SOLUTION **/

/* The sort() method casts elements to strings and compares the strings to determine the orders. */

function find(arr) {
    
    arr.sort( function(a, b) {
     
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });

    let repeat, n = arr.length;
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] ^ arr[i + 1] == 0)
        {repeat = arr[i]; break;}
    }    

    let sum1 = (n * (n + 1)) / 2, sum2 = arr.reduce((a, b) => a + b, 0); 
    let missing = (sum1 - sum2) + repeat;    

    console.log("Missing " + missing + " Repeating ",repeat);
}
/********************  Time Complexity: O(n*Log(n)) *******************/
/************************************************************/
let arr = [8, 4, 4, 3, 1, 2, 6, 7];
find(arr);



/**********************************************************************************************/
/**************************************************************************************************************/ 
/**** It uses index method *****/

void find(arr)
{
    let i;
    cout << " The repeating element is ";
 
    for (let i = 0; i < size; i++) {
        if (arr[abs(arr[i]) - 1] > 0)
            arr[abs(arr[i]) - 1] = -arr[abs(arr[i]) - 1];
        else
            cout << abs(arr[i]) << "\n";
    }
 
    cout << "and the missing element is ";
    for (let i = 0; i < size; i++) {
        if (arr[i] > 0)
            cout << (i + 1);
    }
}

/***** Time Complexity: O(n) ***/