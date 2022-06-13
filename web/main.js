// inner html manipulation
// const headline = document.querySelector(".headline");
// console.log(headline.innerHTML);
// changing innerhtml
// headline.innerHTML = "<h1>Inner HTML changed.</h1>";
// adding to inner html
// headline.innerHTML +="<button class=\"btn\">Learn More</button>";
// console.log(headline.innerHTML);




// Traversing DOM
// browser adds everything in document(js object).
// document : root node
// html : root element/child node of document

// head: html child / child node of html
    // title, meta-tags, etc : child/node of head.
    // text-node: text of the element

// body: html child / child node of html
    // p, a, div, table, etc : child/node of body
    // element-node
    // text-node

const rootNode = document.getRootNode();
console.dir(rootNode.childNodes[1].childNodes[0].nextSibling);
// const sibling = document.
