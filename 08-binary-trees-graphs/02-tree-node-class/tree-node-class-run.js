const TreeNode = require('./tree-node-class');


// const a = new TreeNode('a');
// const b = new TreeNode('b');
// const c = new TreeNode('c');
// const d = new TreeNode('d');
// const e = new TreeNode('e');
// const f = new TreeNode('f');



// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

// console.log(a);
// console.log(b);


// class BinaryTree2{

//     constructor(){
//         this.root = null
//     }


// }


// class thenode{
//     constructor(value){
//         this.value = value;
//         this.right = null;
//         this.left = null;
//     }
// }



// let thetree = new BinaryTree


class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }



}



class BinaryTree3 {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value)

        if (this.root === null) {
            this.root = newNode;
            return this
        }

        else {
            const current = this.root;
            while (true) {
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return
                    }

                    else {
                        current = current.left;
                    }

                }

                else if (value > current.value) {
                    if (current.right === null) {
                        current.right = newNode;
                    }
                    else {
                        current = current.right;
                    }
                }
            }
        }
    }
}




let tree = new BinaryTree3()


tree.insert(10);


console.log(tree.root, 'this is the root')