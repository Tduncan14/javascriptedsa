function titleCase(str) {

    const words = str.toLowerCase().split(' ')


    for(let i = 0; i < words.length; i++){

        words[i] = words[i][0].toUpperCase() + words[i].spice(1);

    }

    return words.join(' ')

}

module.exports = titleCase;
