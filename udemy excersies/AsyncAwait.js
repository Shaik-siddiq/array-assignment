const fetch = require('node-fetch');

// #1) Convert the below promise into async await
/* const getData = async function(){
    const data = await fetch("https://jsonplaceholder.typicode.com/users/")
    const response = await data.json()
    console.log(response)
}
getData() */

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
];
const array = async () => {
    try{
        const [users, posts, albums] = await Promise.all(
            urls.map( async  (url) => {
                const response = await fetch(url)
                return response.json()
            })
        )
        console.log('user', users)
        console.log('post', posts)
        console.log('albums', albums)
    }
    catch{
        console.log('you missed something')
    }
    
}
array()