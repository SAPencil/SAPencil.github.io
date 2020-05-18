/*
Write a function to see if a binary tree ↴ is "superbalanced" (a new tree property we just made up).

A tree is "superbalanced" if the difference between the depths of any two leaf nodes ↴ is no greater than one.

Here's a sample binary tree node class:

  class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}
*/
class BinaryTreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insertLeft(value) {
      this.left = new BinaryTreeNode(value);
      return this.left;
    }
  
    insertRight(value) {
      this.right = new BinaryTreeNode(value);
      return this.right;
    }
  }
    
  function inside_depths(tree) { //This function references variables which are declared in another function, depth and depths. I'm not very comfortable about this, but it seems like a solution to the problem of a recursive function redeclaring a variable at every recursion. I'd be interested to know if this is actually a problem/messy and if there is a neater solution.
      
    //If this node has a left branch, inspect it.
    if (tree.left) {
        depth++;
      inside_depths(tree.left);
    }
  
  //Once the left branch has been inspected, inspect the right branch
    if (tree.right) {
    depth++;
      inside_depths(tree.right);
    }
  
  //If this node has no branches, it is a leaf. Push the current depth to the depths array
    if (!tree.left && !tree.right) {
      depths.push(depth);
      depth = 0;
    }
    return depths;
  }
  
  function findDepths(tree) {
      depths = [];
    depth = 0;
    return inside_depths(tree);
  }
  
  function isSuperBalanced(tree) {
      leafDepths = findDepths(myTree);
    if(Math.max(...leafDepths) - Math.min(...leafDepths) > 1) {
    return false
    } else {
    return true
    }
  }
  
  var myTree = new BinaryTreeNode(1);
  myTree.insertLeft(2);
  myTree.insertRight(3).insertLeft(4).insertLeft(5);
  console.log(isSuperBalanced(myTree));