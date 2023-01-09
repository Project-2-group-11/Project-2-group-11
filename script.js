
// apiKey = api_key=6a4a4881014f97005e421abe7a30bce2

// PSEUDOCODE ******************
// make a namespace with...

const filmApp = {};

filmApp.init = function () {
  filmApp.getFilms();
}


filmApp.getFilms = function (selectedRegion) {

  const url = new URL ("https://api.themoviedb.org/3/movie/top_rated");

  const apiKey = '6a4a4881014f97005e421abe7a30bce2';

  url.search = new URLSearchParams({
    api_key: apiKey,
    region: selectedRegion
  })

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(jsonResponse) {
      console.log(jsonResponse)
      filmApp.displayFilms(jsonResponse);
    })
} 

filmApp.displayFilms = function(dataFromApi){
  const ol = document.querySelector('ol');
  ol.innerHTML = "";

  dataFromApi.results.forEach(function(films){
    // console.log(films.title);
    // create li element
    const liElement = document.createElement('li');
    // create film container div to hold title and poster
    const filmContainer = document.createElement('div');
    filmContainer.classList.add("film-container");
    // create title container div
    const titleContainer = document.createElement('div');
    titleContainer.classList.add("text-container");
    // create h2
    const h2 = document.createElement("h2");
    titleContainer.appendChild(h2);
    // create poster container div
    const posterContainer = document.createElement('div');
    posterContainer.classList.add("image-container")
    // append title container into film container
    filmContainer.appendChild(titleContainer);
    // append poster container into film container
    filmContainer.appendChild(posterContainer);
    // append filmContainer into liElement
    liElement.appendChild(filmContainer);
    // add film title in h2
    h2.textContent = films.title;
    // create poster img
    const imgElement = document.createElement(
      "img");
    imgElement.src = "https://image.tmdb.org/t/p/w92" + films.poster_path;
    imgElement.alt = `Poster of film ${films.title}`
    liElement.appendChild(imgElement);
    // append imgElement into poster container
    posterContainer.appendChild(imgElement);

    ol.appendChild(liElement);
    
  })
}


filmApp.regionsChanger = function () {
  const buttons = document.querySelectorAll("button");
  console.log(buttons)
  buttons.forEach(function(individualButton) {
    individualButton.addEventListener("click", function() {
      const selectedRegion = this.id;
      console.log(selectedRegion)
      filmApp.getFilms(selectedRegion)
    })
  })

}

filmApp.regionsChanger()

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
// hard code ol with list items
  // each list item is a region button
  // user clicks region button
    // object with event listener for which button (region) is pressed
    // forEach loop through buttons (see function methods codealong)
      // depending on which region is selected(clicked), pull that regions top-rated 20 movies
      // select ol
      // create li element
      // create poster div for img
      // create img & pull poster data from API
      // declare src and alt for poster imgs
      // append into poster div
      // create text div for title
      // create h2 element for title & pull title data from API
      // append into text div
      // append img div and text div into li
      // append all li in ol
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