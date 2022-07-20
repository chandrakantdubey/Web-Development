// console.log("file imported");
// data source
const posts = [
    {title: "Post One", body: "This is post one."},
    {title: "Post Two", body: "This is post two."}
];

// this function fetches data from database
// data is converted to JSON format and then sent.
// there is delay to collect and send data.
function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index)=>{
            output += `<div><h1>${post.title}</h1><p>${post.body}</p></div>`;
        });
        // injecting in the body
        document.body.innerHTML = output;
    }, 1000); 
    //settimeout will wait for 1 sec and then execute the callback function.
    // callback is a function provided as argument to other function to execute.
}

// creating post and pushing it to the screen-frontend.
function createPosts(post) {
    return new Promise((resolve, reject)=>{
        posts.push(post);
        const error = true;
        if(!error){
            resolve();
        } else {
            reject("Error: Something went wrong.");
        }
    },2000);
}

// in real life the above two will have different times so it will not load
// hence we have to use a call-back

// pushing to screen
{
createPosts({title:"Post Three", body:"This is post three."})
    .then(getPosts)
    .catch(err => console.log(err));
}


// fetch data from API.

const promise = fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then((data) => {
    console.log(data);
});