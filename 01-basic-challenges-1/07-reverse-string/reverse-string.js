function reverseString(str) {

    // first option.
    // const result = str.split('').reverse().join('')


    let reversedStrings = ''


    for(let i = str.length - 1; i >= 0; i--){

        reversedStrings += str[i]


    }


    console.log(reversedStrings,'revese strings')


   return reversedStrings
}





module.exports = reverseString;
