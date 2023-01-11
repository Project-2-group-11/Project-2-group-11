
// apiKey = api_key=6a4a4881014f97005e421abe7a30bce2

// PSEUDOCODE *****************

// set up init for namespace
const filmApp = {};

filmApp.init = function () {
  filmApp.getFilms();
  filmApp.regionsChanger();
}

filmApp.getFilms = function (selectedRegion) {

  const url = new URL ("https://api.themoviedb.org/3/movie/top_rated");

  const apiKey = '6a4a4881014f97005e421abe7a30bce2';

  url.search = new URLSearchParams({
    api_key: apiKey,
    region: selectedRegion
  })

  // fetch from URL
  fetch(url)
    .then(function(response) {
      // convert to json
      return response.json();
    })
    .then(function(jsonResponse) {
      // see how data is set up
      // console.log(jsonResponse)
      filmApp.displayFilms(jsonResponse);
    })
} 

// pass top-rated movie data to displayFilms function
filmApp.displayFilms = function(dataFromApi){
  const ol = document.querySelector('ol');
  ol.innerHTML = "";

  dataFromApi.results.forEach(function(films){
    // console.log(films.title);
    // create li element
    const liElement = document.createElement('li');
    // create film container div to hold text and poster
    const filmContainer = document.createElement('div');
    filmContainer.classList.add("film-container");
    // create text container div
    const textContainer = document.createElement('div');
    textContainer.classList.add("text-container");
    // create h2
    const h2 = document.createElement("h2");
    liElement.appendChild(h2);
    // create poster container div
    const posterContainer = document.createElement('div');
    posterContainer.classList.add("image-container")
    // append text container into film container
    filmContainer.appendChild(textContainer);
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
    // append all li in ol
    ol.appendChild(liElement);
    // top 20 movies appeear onto page!
    
  })
}
   
filmApp.regionsChanger = function () {
  const buttons = document.querySelectorAll("button");
  // console.log(buttons)
  // forEach loop through buttons
  buttons.forEach(function(individualButton) {
    // user clicks region button
    individualButton.addEventListener("click", function() {
      // variable with event listener for which button (region) is pressed
      const selectedRegion = this.id;
      // console.log(selectedRegion)
      // depending on which region is selected(clicked), pull that regions top-rated 20 movies
      filmApp.getFilms(selectedRegion)
      filmApp.spanChanger();
    })
  })

}

// define region title changer function
filmApp.spanChanger = function(){
  // get button innerText with country name
  const button = document.querySelectorAll("button");
  const buttonText = button.textContent;
  // select span in h1
  const span = document.querySelector("#region");
  // update span in h1 with innerText from button of corresponding region
  span.innerText = buttonText
}

// call init at end of code
  filmApp.init();