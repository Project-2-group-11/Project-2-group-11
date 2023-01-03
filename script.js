
// apiKey = api_key=6a4a4881014f97005e421abe7a30bce2

// PSEUDOCODE ******************
// make a namespace with...

const filmApp = {};

filmApp.init = function () {
  filmApp.getFilms();
}


filmApp.getFilms = function () {

  const url = new URL ("https://api.themoviedb.org/3/movie/top_rated");

  const apiKey = '6a4a4881014f97005e421abe7a30bce2';

  url.search = new URLSearchParams({
    api_key: apiKey,
    region: "CA"
  })

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonResponse) {
      // console.log(jsonResponse)
      return jsonResponse
    })
} 



// url
// filmApp.url = 'https://api.themoviedb.org/3/movie/top_rated'
// // API key
// filmApp.apiKey = 'api_key=6a4a4881014f97005e421abe7a30bce2'


// set up init for namespace
  // call init at end of code
// fetch from URL
// convert to json
// see how data is set up
// save top-rated movie data to namespace object
// hard code ul with list items
  // each list item is a region button
  // user clicks region button
    // object with event listener for which button (region) is pressed
    // forEach loop through buttons (see function methods codealong)
      // depending on which region is selected(clicked), pull that regions top-rated 20 movies
      // select ul
      // create li element
      // create poster div for img
      // create img & pull poster data from API
      // declare src and alt for poster imgs
      // append into poster div
      // create text div for title
      // create h2 element for title & pull title data from API
      // append into text div
      // append img div and text div into li
      // append all li in ul
      // top 20 movies appeear onto page!

// let region = 'fr';

// fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=6a4a4881014f97005e421abe7a30bce2&language=en-US&page=1&region=' + region)
//   .then(res => res.json())
//   .then(function (data) {
//     // console.log(data)
//     data.results.forEach(element => {
//       console.log(`${element.title} https://image.tmdb.org/t/p/w500 ${element.poster_path}`);

//     });
//   })

  filmApp.init();