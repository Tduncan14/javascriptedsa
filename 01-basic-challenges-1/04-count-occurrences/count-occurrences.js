function countOccurrences(word,char) {



    let countme = 0



      for(let i = 0 ; i < word.length; i++){

         if (word[i] === char) {

             countme++
         }


        
        
      }



      return countme 

}


module.exports = countOccurrences;
