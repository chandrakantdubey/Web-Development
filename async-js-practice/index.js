"use strict";
"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
function renderCountry(data, className = "") {
  const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1_000_000
            ).toFixed(1)} Mil people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
        </div>
    </article>
`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
}

function renderError(msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
}

// function getCountryData(country) {
//   const request = new XMLHttpRequest();
//   request.open(
//     "GET",
//     `https://restcountries.com/v2/name/${country.toLowerCase()}`
//   );
//   request.send();

//   request.addEventListener("load", function () {
//     const country = JSON.parse(this.responseText);
//     let data;
//     if (country.length > 1) {
//       data = country[1];
//     } else {
//       data = country[0];
//     }
//     console.log(data);
//     renderCountry(data);

//     // get neighbour
//     const neighbour = data.borders?.[0];
//     if (!neighbour) return;
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener("load", function () {
//       const country = JSON.parse(this.responseText);
//       let data;
//       if (country.length > 1) {
//         data = country[1];
//       } else {
//         data = country;
//       }
//       console.log(data);
//       renderCountry(data, "neighbour");
//     });
//   });
// }
// getCountryData("india");

// this is again a callback hell
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then((res) => res.json())
//     .then((data) => {
//       // country 1
//       renderCountry(data[0]);

//       // neighbour
//       const neighbour = data[0].borders?.[0];
//       if (!neighbour) return;
//       fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
//         .then((res) => res.json())
//         .then((data) => renderCountry(data, "neighbour"));
//     });
// };
// getCountryData("germany");

const getJSON = function (url, errorMsg = "Something went wrong!") {
  return fetch(url).then((res) => {
    if (!res.ok) throw new Error(`${errorMsg} (${res.status})`);
    return res.json();
  });
};

// using a flat chain
const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v2/name/${country}`, "Country not found!")
    .then((data) => {
      // country 1
      renderCountry(data[0]);

      // neighbour
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;

      return getJSON(
        `https://restcountries.com/v2/name/${neighbour}, 'Country not found!`
      );
    })
    .then((data) => renderCountry(data, "neighbour"))
    .catch((err) => {
      console.error(`${err} 💥💥`);
      renderError(`${err.message} Try Again`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener("click", () => {
  getCountryData("germany");
});

//Testing micro-task queue
// console.log("Test Start");
// setTimeout(() => console.log("0 sec timer"), 0);
// Promise.resolve("Resolved Promise").then((res) => console.log(res));
// Promise.resolve("Resolved promise 2").then((res) => {
//   for (let i = 0; i < 10_000; i++) {
//     console.log(i);
//   }
// });
// console.log("Test end");

// building a simple promise
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log("Lottery draw started");
//   setTimeout(function () {
//     if (Math.random() > 0.5) {
//       resolve("You Win 💥");
//     } else {
//       reject(new Error("You lost the money!!"));
//     }
//   }, 2000);
// });

// consuming promises
// lotteryPromise.then((res) => console.log(res)).catch((err) => console.log(err));

// Promisifying
// const wait = function (secs) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, secs * 1000);
//   });
// };
// wait(2)
//   .then(() => {
//     console.log("I waited for 2 secs");
//     return wait(1);
//   })
//   .then(() => console.log("I waited for 1 secs"));

navigator.geolocation.getCurrentPosition(
  (position) => console.log(position),
  (err) => console.log(err)
);
