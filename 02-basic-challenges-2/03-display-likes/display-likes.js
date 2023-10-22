function displayLikes(arr) {

    let reply 

    let totallength = arr.length;

    let subtracttotal = 0


    if(arr.length === 0){
        return 'no one like this post'
    }


    for( let i = 0; i <= arr.length; i++){

        console.log(arr[i],'this is the issue')


     if(arr.length === 1){
            return  reply =`${arr[0]} like this post`
        }
    
        else if(arr.length === 2 ){
           return  reply =`${arr[0]} and ${arr[1]} like this post`
        }
        else if(arr.length === 3) {
           return   reply = `${arr[0]},${arr[1]} and ${arr[2]} like this `
    }
        else if (arr.length <= 4){
            
        return  reply =  `${arr[0]}, ${arr[1]} and ${arr.length - 2} other like this`
        }

    
    // if(arr.length === 0 ){

    //     reply = 'no one like this post'

    // }

    // else if(arr.length === 1){
    //     reply = `${arr[0]} like this post`
    // }

    // else if(arr.length === 2 ){
    //     reply = `${arr[0]} and ${arr[1]} like this post`
    // }
    // else if(arr.length === 3) {
    //     reply = `${arr[0]},`
    // }
}

  console.log(reply,'hello')

}

module.exports = displayLikes
