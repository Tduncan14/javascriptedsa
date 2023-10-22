function findMissingNumber(arr) {

    if(arr.length === 0) return 1;


    const n = arr.length  + 1;

     let expectedSum = n *(n+1)/2

   
     


    // for(let i = 0; i < arr.length; i++)
    // {
    //     actualSum += arr[i]
    // }''



    const actualSum = arr.reduce((sum,num))

   
          return expectedSum - actualSum;


}

module.exports = findMissingNumber;
