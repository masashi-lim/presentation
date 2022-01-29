'use strict'
// 1行目に記載している 'use strict' は削除しないでください

console.log(" - presentation - ");

const everyDayItems = {};
const everyWeekItems = {};
const everyMonthItems = {};

let everyDayUl = document.querySelector(".everyday > ul");
let everyDayH2 = document.querySelector(".everyday > h2");

let form = document.querySelector("form");
let input = document.querySelector("input");

everyDayH2.addEventListener("click", () => {
  everyDayUl.classList.toggle("hidden");
})


form.addEventListener("submit", e => {
  e.preventDefault();
  console.log("submit");
  const listItem = document.createElement("li");
  listItem.textContent = input.value;
  // if ()
  everyDayUl.appendChild(listItem);

  if (input.value === "DIG2") {
    document.body.classList.add("hidden");
  }
})





// --------------------------------------------------------------------------------

// function makeMovie(title, director, year, duration, rating) {
//   return {
//     title: title,
//     director: director,
//     year: year,
//     duration: duration,
//     rating: rating
//   }
// }

// const movie1 = makeMovie("Porco Rosso", "Hayao Miyazaki", 1992, 93, 5)
// const movie2 = makeMovie("Howl's Moving Castle", "Hayao Miyazaki", 2004, 119, 5)
// const movie3 = makeMovie("Kiki's Delivery Service", "Hayao Miyazaki", 1989, 102, 4.8)
// const movie4 = makeMovie("Nausicaa of the vally of the wind", "Hayao Miyazaki", 1984, 116, 4.9)
// const movie5 = makeMovie("Spirited Away", "Hayao Miyazaki", 2001, 124, 4.9)

// const movies = [
//   movie1,
//   movie2,
//   movie3,
//   movie4,
//   movie5
// ]

// console.log(movies);

// function displayMovie (movie) {
//   console.log(movie.title + " by " + movie.director);
// }

// function displayMovies (movies) {
//   for (const movie of movies) {
//     displayMovie(movie);
//   }
// }

// displayMovies(movies);

// function averageLength (movies) {
//   let sumDuration = 0;
//   for (const movie of movies) {
//     sumDuration += movie.duration;
//   }
//   const average = sumDuration / movies.length;
//   const averageTrunc = Math.floor(average / 60);
//   return average + "min" + " ( ≒" + averageTrunc + "h" + (Math.round(60 * (average / 60 - averageTrunc))) + "min )" ;
// }

// console.log(averageLength(movies));

// function averageRating (movies) {
//   let sumRating = 0;
//   for (const movie of movies) {
//     sumRating += movie.rating;
//   }
//   return averageRating = sumRating / movies.length;;
// }

// console.log(averageRating(movies));
