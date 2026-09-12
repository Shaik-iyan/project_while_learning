const API_KEY = "32efaaab";

async function searchMovie() {
    const movieinput = document.getElementById("movieinput");
    const movieContainer = document.getElementById("moviecontainer");
    const message = document.getElementById("message");

    const movieName = movieinput.value.trim();

    if (movieName === "") {
        message.textContent = "Please enter a movie name";
        return;
    }

    message.textContent = "Loading....";
    movieContainer.innerHTML = "";

    try {
        const url = `https://www.omdbapi.com/?s=${encodeURIComponent(movieName)}&apikey=${API_KEY}`;

        const response = await fetch(url);
        const data = await response.json();

        console.log(data);

        if (data.Response === "False") {
            message.textContent = data.Error;
            return;
        }

        message.textContent = "";

        data.Search.forEach(movie => {

            const card = document.createElement("div");

            card.classList.add("movie-card");

            card.innerHTML = `
                <img 
                    src="${movie.Poster !== "N/A" 
                        ? movie.Poster 
                        : "https://via.placeholder.com/300x450?text=No+Poster"}"
                    alt="${movie.Title}"
                >

                <h2>${movie.Title}</h2>

                <p>Year: ${movie.Year}</p>

                <p>Type: ${movie.Type}</p>
            `;

            movieContainer.appendChild(card);
        });

    } catch (error) {
        console.log(error);
        message.textContent = "Something Went Wrong. Please Try Again.";
    }
}