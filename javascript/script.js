const getMovieDbDataApi = async () => {

    const genres = await getMovieDb('genre/movie/list', '');
    genres.genres.forEach((genres) => {
        const genreList = document.createElement('li');
        const genreTitle = document.createTextNode(`genre: ${genres.name} ID: ${genres.id}`);
        genreList.appendChild(genreTitle);
        document.querySelector('.ul').appendChild(genreList);
    });

    const favorite = await getMovieDb('find/tt0137523', '&external_source=imdb_id');
    document.querySelector('.favorite').innerHTML = favorite.movie_results[0].title;

    const topRated = await getMovieDb('movie/top_rated', '');
    for (let index = 0; index < 10; index++) {
        const element = topRated.results[index];
        const topRatedList = document.createElement('li');
        const topRatedTitle = document.createTextNode(element.title);
        topRatedList.appendChild(topRatedTitle);
        document.querySelector('.top-rated').appendChild(topRatedList);
    };

    const topRatedAction = await getMovieDb('discover/movie', '&sort_by=popularity.desc&page=1&with_genres=28');
    topRatedAction.results.forEach((movie) => {
        const topRatedActionList = document.createElement('li');
        const topRatedActionTitle = document.createTextNode(movie.title);
        topRatedActionList.appendChild(topRatedActionTitle);
        document.querySelector('.top-rated-action').appendChild(topRatedActionList);
    });

    const moviesFrom1975 = await getMovieDb("discover/movie", "&primary_release_year=1975");
    moviesFrom1975.results.forEach((movie) => {
        const list1975 = document.createElement('li');
        const title1975 = document.createTextNode(movie.title);
        list1975.appendChild(title1975);
        document.querySelector('.movies-1975').appendChild(list1975);
    });
};

getMovieDbDataApi();

// voorbeeld awaiting winc academy video https://vimeo.com/571243346/e9e236239f
 
// async function test() {
//     try {
//     const responce = await makeRequest("facebook")
//     console.log("responce received")
//     const processedResponse = await processRequest(responce)
//     console.log(processedResponse)
//     } catch (error) {
//      console.log(error.message)   
//     }
    
//     }
    
//      test();
    
    
//      doe fetch request: voorbeeld
    
//     fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY") 
//     .then(response => response.json())
//     .then(data => console.log(data)) 
//     .catch(err => {
//         console.log(err)
//     });
