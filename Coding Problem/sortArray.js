/*  1. Sort an array of 0’s 1’s 2’s without using extra space or sorting algorithm. */

/*  Solution:  */

function sortArray(arr){
  
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



 
