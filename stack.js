class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor(value) {
        const newNode = new Node(value)
        this.top = newNode
        this.height = 1
        // height or length
    }

    push(value) {
        const newNode = new Node(value)

        if (this.length === 0) {
            this.top = newNode
        }

        else {
            newNode.top = next
            this.top = newNode
        }


        this.length++
        return this

    }
}


let myStack = new Stack(5)



console.log(myStack, 'this is my stack')