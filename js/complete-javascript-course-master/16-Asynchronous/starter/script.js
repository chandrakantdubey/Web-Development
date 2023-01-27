'use strict';

// selecting the DOM insert points
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


// creating the country card function
const renderCountry = function(data, className = ''){
    const html = `
        <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
                +data.population / 1000000
            ).toFixed(2)} people</p>
            <p class="country__row"><span>🗣️</span>${
                data.languages[0].name
            }</p>
            <p class="country__row"><span>💰</span>${
                data.currencies[0].name
            }</p>
        </div>
        </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}



// rendering error function
const renderError = function(message){
    countriesContainer.insertAdjacentText('beforeend',message);
    countriesContainer.style.opacity = 1;
}



// handling the error msg
function errMsg(res, errorMsg="Oooops! Something went wrong."){
    if (!res.ok) throw new Error(`${errorMsg} (${res.ok?res.status:404})`);
}


/*
//////// making ajax calls using xml //////////
const getCountryAndNeighbour = function(country){
    // ajax call country 1
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    request.send();
    request.addEventListener('load',function(){
        let data = JSON.parse(this.responseText);
        data = data.length > 1 ? data[1] : data[0];
        console.log(data);
        // rendering the country 1
        renderCountry(data)

        // getting the country 2
        const neighbour = data.borders?.[0];
        // checking if neigbour exists
        if(!neighbour) return;
        // AJAX call country 2
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
        request2.send();
        request2.addEventListener('load', function(){
            let data2 = JSON.parse(this.responseText);
            // data2 = data2.length === 1 ? data2[0] : data2[1];
            console.log(data2);
            renderCountry(data2, 'neighbour')
        })
    })
}
getCountryAndNeighbour('india');
getCountryAndNeighbour('usa');
//this calls run in parallel hence we cant control them

// this is a call-back hell
setTimeout(()=>{
    console.log('1 second passed');
    setTimeout(() => {
        console.log('2 second passed');
        setTimeout(() => {
            console.log('3 second passed');
            setTimeout(() => {
                console.log('4 second passed');
                setTimeout(() => {
                    console.log('5 second passed');
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
},1000);
*/


/** 
//////// using promises and fetch ////////
const getCountryData = function(country){
    // country 1
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(res => {
        errMsg(res,'Country not found!');
        return res.json()
    })
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) errMsg(data,'No neighbour found');

      // country 2
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(res => {
        errMsg(res, 'Country not found!');
        return res.json()
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => { 
        console.error(`${err}`)
        renderError(`${err.message}. Try again!!`)
    })
    .finally(()=>{
        countriesContainer.style.opacity = 1;
    })
};
// getCountryData('argentina');
// fetch returns a promise which we handled using .then method
// to read the response we called json method on response which returns a promise
// to handle the promise we call .then method
*/



/*
///////////////////////////////////////
// Coding Challenge #1
function whereAmI(lat,lng){
    fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`)
        .then(res => res.json())
        .then(data => {
            if(data.error) throw new Error(data.error)
            console.log(`You are in ${data.address.city}, ${data.address.country}`);
            getCountryData((data.address.country).toLowerCase());
        })
        .catch(e=>console.log(`${e.message} wrong coordinates.`))
}
whereAmI(-33.933, 18.470);
whereAmI(52.508, 13.381);

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:
PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/


//////// Event Loop in practice ////////
/** 
console.log("Test start");
setTimeout(()=>console.log('0 sec timer'),0);
Promise.resolve('Resolved promise 1').then(res => console.log(res))
Promise.resolve('Resolved promise 2').then(res => {
    for(let i = 0; i < 1000000000; i++) {}
    console.log(res)
});
console.log('Test end');
*/

/** 
//////// Building a promise //////////
// new Promise(executor(resolve, rejected))
const lotteryPromise = new Promise(function(resolve,reject){
    console.log('Lottery draw started');
    setTimeout(()=>{
        if (Math.random() >= 0.5) {
          resolve('YOU WIN 💰');
        } else {
          reject(new Error('You lost your money 💩'));
        }
    }, 6000)
})
lotteryPromise.then(res => console.log(res)).catch(err => console.log(err))

//promisifying >> convert callback based to promise based
// promisifying setTimeout
const wait = (seconds)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,seconds*1000)
    })
}
wait(2).then(()=>{
    console.log('I waited for 2 sec')
    return wait(1)
})

// 18.5344,73.883
// promisifying geolocation api
const getPosition = ()=>{
    return new Promise((res, rej) => {
        // navigator.geolocation.getCurrentPosition(
        //     position => res(position),
        //     err => rej(err)
        // );
        navigator.geolocation.getCurrentPosition(res,rej)
    });
}
getPosition().then(pos=>console.log(pos))
*/


///////////////////////////////////////
// Coding Challenge #2
/*
const imgContainer = document.querySelector('.images');
const wait = seconds => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = (imagePath)=>{
  return new Promise((res, rej) => {

    const img = document.createElement('img');
    img.src = imagePath;

    img.addEventListener('load', () => {
      imgContainer.append(img);
      res(img)
    });

    img.addEventListener('error', ()=>{
        rej(new Error('Image not found'));
    })
  });
}
let currentImg ;
createImage('./img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('./img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  }).catch(err => console.error(err));

/* 
Build the image loading functionality that I just showed you on the screen.
Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

/*
const getPosition = () => {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej);
  });
};
////////////   async & await   ////////////
async function whereAmI() {
  const pos = await getPosition();
  const {latitude: lat, longitude: lng} = pos.coords;

  const address = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
  );
  const location = await (address.json())
  const country = location.address.country.toLowerCase()

  const res = await fetch(`https://restcountries.com/v2/name/${country}`);
  const data = await res.json();

  if(data.length > 1){
    renderCountry(data[0]);
    renderCountry(data[1]);
  }else{
    renderCountry(data[0])
  }
}
whereAmI();
*/

/////////// try & catch //////////
// try {
//     let y = 1;
//     const x = 2;
//     y = 3;
// }
// catch (err){
//     console.log(err.message);
// }

// handling errors in async functions
const getPosition = () => {
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej);
  });
};
async function whereAmI() {
    try{
        const pos = await getPosition();
        let { latitude: lat, longitude: lng } = pos.coords;

        const address = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
        );
        const location = await address.json();
        const country = location.address.country.toLowerCase();

        const res = await fetch(`https://restcountries.com/v2/name/${country}`);
        const data = await res.json();

        if (data.length > 1) {
            renderCountry(data[0]);
            renderCountry(data[1]);
        } else {
            renderCountry(data[0]);
        };

        return `You are in ${location.address.city} ${location.address.country}`;
  }
  catch(err){
    console.error(err.message);
    renderError(`Something went wrong ${err.message}`)

    // reject promise returned from async function
    throw err;
  };
};
/** 
console.log('1: Will get location');
whereAmI()
    .then(res => console.log(`2: ${res}`))
    .catch(error => {
        console.error(`2: ${error.message}`);
    })
    .finally(() => console.log('3: Finished getting location'));
*/

/** 
// using async await & IIFE
// async function calling other async function
console.log('1: Will get location');
(async function(){
    try {
        const city = await whereAmI()
        console.log(`2: ${city}`);
    } catch (error) {
        console.error(`2: ${error.message}`);
    }
    console.log('3: Finished getting location');
})()
*/


///// running promises in parallel //////
const get3Countries = async function(c1,c2,c3){
    try {
        // const [data1] = await fetch(`https://restcountries.com/v2/name/${c1}`).then(
        //   res => {
        //     errMsg(res, 'Country not found!');
        //     return res.json();
        //   }
        // );
        // const [data2] = await fetch(
        //   `https://restcountries.com/v2/name/${c2}`
        // ).then(res => {
        //   errMsg(res, 'Country not found!');
        //   return res.json();
        // });
        // const [data3] = await fetch(
        //   `https://restcountries.com/v2/name/${c3}`
        // ).then(res => {
        //   errMsg(res, 'Country not found!');
        //   return res.json();
        // });
        // console.log([data1.capital, data2.capital, data3.capital]);

        const data = await Promise.all([
          fetch(`https://restcountries.com/v2/name/${c1}`).then(res => {
            errMsg(res, 'Country not found!');
            return res.json();
          }),
          fetch(`https://restcountries.com/v2/name/${c2}`).then(res => {
            errMsg(res, 'Country not found!');
            return res.json();
          }),
          fetch(`https://restcountries.com/v2/name/${c3}`).then(res => {
            errMsg(res, 'Country not found!');
            return res.json();
          })
        ]);
        console.log(data.map(d => d[0].capital));
        
    } catch (error) {
        console.log(error);
    }
}
get3Countries('portugal','canada','tanzania')

