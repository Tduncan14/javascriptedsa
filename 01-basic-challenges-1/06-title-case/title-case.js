function titleCase(str) {

    const words = str.toLowerCase().split(' ')


    for(let i = 0; i < words.length; i++){

        words[i] = words[i][0].toUpperCase() + words[i].slice(1);

    }

    console.log(words,'this is words');
    return words.join(' ')

}

module.exports = titleCase;
