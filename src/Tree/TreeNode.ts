export default class TreeNode {
    key: number;
    p1: number[];
    p2: number[];
    p3: number[];
    parent: number;
    children: number[];

    constructor(key,p1,p2,p3, parent, children) {
      this.key = key;
      this.p1 = p1
      this.p2 = p2
      this.p3 = p3
      this.parent = parent;
      this.children = [];
    }
  
    get isLeaf() {
      return this.children.length === 0;
    }
  
    get hasChildren() {
      return !this.isLeaf;
    }
}