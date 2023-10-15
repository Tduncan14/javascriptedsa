function arrayIntersection(arr1,arr2) {



    if(!arr1.length === arr2.length){
        return
    }

    else{

    const interSectArray = []


    for(let i = 0; i < arr1.length; i++){


        if(arr2.includes(arr1[i])){

            interSectArray.push(arr1[i])
        }



    }

    console.log(interSectArray,'this is awesome')

    return interSectArray

}
}

module.exports = arrayIntersection;
