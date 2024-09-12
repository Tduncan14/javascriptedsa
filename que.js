

class node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {

    constructor(value) {
        const newNode = new node(value)
        this.first = newNode
        this.last = newNode
        this.length = 1
    }
    enqueue(value) {
        const newNode = new node(value)
        if (this.length === 0) {
            this.first = newNode
            this.last = newNode
        }
        else {
            this.last.next = newNode
            this.last = newNode
        }
        this.length++
        return this


    }


    dequeue() {
        if (this.length === 0) return undefined
        let temp = this.first
        if (this.length === 1) {
            this.first = null
            this.last = null
        }
        else {
            this.first = this.first.next
            temp.next = null

        }

        this.length--
        return temp



    }


}



let myQueue = new Queue(4)
myQueue.enqueue(3)
myQueue.enqueue(7)
myQueue.dequeue()




console.log('this is my queue', myQueue)

