function countVowels(countVowel) {

    let totalValue = 0

    let a = 'a'
    let e =  'e'
    let I = 'i'
    let o = 'o'
    let u = 'u'
    let y = 'y'

    let word =  countVowel.toLowerCase().split('')


    for(let i = 0 ; i < word.length; i++){



        if(word[i] === a || word[i] === e || word[i] === I  || word[i] ===  o || word[i] === u|| word[i] === y){

            totalValue += 1

        }
    }


         return totalValue

}

module.exports = countVowels;
