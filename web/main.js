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

// const rootNode = document.getRootNode();
// console.log(rootNode.childNodes);
// const htmlElementNode = rootNode.childNodes[0];
// console.log(htmlElementNode.childNodes);
// NodeList(3) [head, text, body]
// const headElementNode = htmlElementNode.childNodes[0];
// const textElementNode = htmlElementNode.childNodes[1];
// const bodyElementNode = htmlElementNode.childNodes[2];
// console.log(headElementNode.childNodes);
// element sibling ignore the white spaces

// const h1 = document.querySelector('h1');
// const nav = h1.parentNode;
// nav.style.color = "blue";
// const body = document.body;
// body.style.color = "steelblue";
// const head = document.querySelector('head');
// title = head.querySelector('title');
// title.innerHTML = "Javascript Tuts";

// const container = document.querySelector('.container');
// console.log(container.children);
// using children slects only the tags and not the white spaces.
