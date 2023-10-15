// function removeDuplicates(arr) {

//     let newArray = []
//     let placement 


//     if(!Array.isArray(arr)){
//         //  turn it into array
//     }

//     else{

//     }

// }


// function removeDuplicates(arr){
//     const uniqueArr = []


//     for( let i  = 0 ; i < arr.length; i++){
//         if(!uniqueArr.includes(arr[i])){
//             uniqueArr.push(arr[i])
//         }
//     }
//     return uniqueArr
// }

//  second way of doing it.


// build in data scutrue 


function removeDuplicates(arr){
    return  Array.from(new Set(arr))
}



module.exports = removeDuplicates;
