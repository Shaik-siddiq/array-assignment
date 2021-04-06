const fetch = require('node-fetch')

// #1) Create a promise that resolves in 4 seconds and returns "success" string

// #2) Run the above promise and make it console.log "success"


// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"

const promise = new Promise((resolve,reject)=>{
    if(/*true*/false){
       setTimeout( resolve,5000,'sucess')
    }else{
        reject('some thing gone wrong')
    }
})

promise.then(value => console.log(value)).catch(error => console.log(error))

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
    'http://swapi.dev/api/people/1',
    'http://swapi.dev/api/people/2',
    'http://swapi.dev/api/people/3',
    'http://swapi.dev/api/people/4'
  ] 
  Promise.all(urls.map(url =>{
      return fetch(url)
      .then(res => res.json())
  }))
  
  .then(array => {
    console.log('1', array[0])
    console.log('2', array[1])
    console.log('3', array[2])
    console.log('4', array[3])
  })
  .catch(err => {console.log('ughhhh fix it!', err)}) 

  fetch(
    "https://sochain.com/api/v2/address/LTC/LMSuo8W7CiXs8oFs1sJh77AQ54tCZM42Ay"
  )
    .then((res) => res.json())
    .then((obj) => console.log(obj["data"]["received_value"])); 
