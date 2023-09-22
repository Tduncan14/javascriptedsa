function calculator(a,b,operator) {

    let result

    if(operator === '+'){


        result = a + b
        return result
    }
    else if( operator === '-') {

        result = a - b
        return result

    }

    else if (operator === '*'){

        result = a * b 
        return result 
    }

    else if (operator === '/'){

        result = a / b
        return result
    }


    else{
        throw new Error('invalid operator')
    }
    

}


calculator(3,5,'*')

module.exports = calculator;
