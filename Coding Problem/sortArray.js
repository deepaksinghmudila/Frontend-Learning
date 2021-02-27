/*  1. Sort an array of 0’s 1’s 2’s without using extra space or sorting algorithm. */

/*  Solution:  */

function sortArray(arr){

/******  for Counting the frequency of all 0's 1's and 2's in the array ********/
  let zero,one,two;
  for( let i=0; i<arr.length; i++  ){
      if( arr[i]==0 )
      zero++;
      else if( arr[i]==1 )
      one++;
      else two++;
  }

  for(let i=0; i<zero; i++)
  {arr[i]=0; }

  for(let i=zero; i<one; i++)
  { arr[i]=1; }
  
  for(let i=one; i<two; i++)
  { arr[i]=2; }

}

/******************************************************************************/

let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1] ;
sortArray(arr);



/*****************************************************************************************************/ 
/******* The following approach is swapping one. It is variant of Dutch Flag Problem  *****************/

function sortArray(arr) {
  
  let low = 0; let mid = 0; let high = arr.length - 1;

  while (mid <= high) { 
        switch (a[mid]) { 
  
        // If the element is 0 
        case 0: 
            swap(a[low++], a[mid++]); 
            break; 
  
        // If the element is 1 . 
        case 1: 
            mid++; 
            break; 
  
        // If the element is 2 
        case 2: 
            swap(a[mid], a[high--]); 
            break; 
        } 
    }   
}



