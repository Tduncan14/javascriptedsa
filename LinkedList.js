
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value); // Create a new node
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode; // Point the current tail to the new node
            this.tail = newNode;      // Update the tail to be the new node
        }
        this.length++;  // Increment the length
        return this;
    }


    pop() {
        if (!this.head) return undefined
        let temp = this.head
        let pre = this.head

        while (temp.text) {
            pre = temp
            temp = temp.next
        }

        this.tail = pre
        this.tail.next = null
        this.length--

        if (this.length === 0) {
            this.head = null
            this.tail = null
        }

        return temp
    }




    unshift(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }

        else {
            newNode.next = this.head
            this.head = newNode
        }

        this.length++
        return this


    }
    // shift

    shift() {

        if (!this.head === null) return undefined

        let temp = this.head
        this.head = this.head.next
        //     to break the connect
        temp.next = null
        this.length--

        if (this.length === 0) {
            this.tail = null
        }

        return temp
    }


    get(index) {
        if (index < 0 || index >= this.length) {
            return undefined
        }

        let temp = this.head


        for (let i = 0; i < index; i++) {
            temp = temp.next
        }

        return temp

    }


    set(index, value) {

        if (index < 0 && index >= this.length) return null


        let temp = this.get(index)


        if (temp) {
            temp.value = value
            return
        }


    }



    insert(index, value) {
        if (index === 0) return this.unshift(value)
        if (index === this.length) return this.push(value)
        if (index < 0 || index > this.length) return false

        const newNode = new Node(value)
        const temp = this.get(index - 1)
        newNode.next = temp.next
        temp.next = newNode
        this.length++
        return true
    }


    remove(index) {

        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()
        if (index < 0 || index >= this.length) return undefined

        const before = this.get(index - 1)
        const temp = before.next

        before.next = temp.next
        temp.next = null
        this.length--
        return temp

    }


}




let myLinkedList = new LinkedList(7)
myLinkedList.push(3)
myLinkedList.push(4)
myLinkedList.push(5)

console.log(myLinkedList)


myLinkedList.unshift(8)

console.log(myLinkedList)