const API_KEY = "2f326558";

const input = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const movies = document.getElementById("movies");
const preBtn = document.getElementById("preBtn");
const nextBtn = document.getElementById("nextBtn");
const pageNumber = document.getElementById("pageNumber");

let currentPage = 1;
let currentSearch = "";
let totalPages = 1;

function updateButtons() {
  preBtn.disabled = currentPage === 1 || currentSearch === "";
  nextBtn.disabled = currentPage === totalPages || currentSearch === "";
}

async function getMovies() {
  if (currentSearch === "") {
    movies.innerHTML = `<h2 class="message">Please search a movie</h2>`;
    updateButtons();
    return;
  }

  movies.innerHTML = `<h2 class="message">Loading...</h2>`;
  searchBtn.disabled = true;

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${currentSearch}&page=${currentPage}`
    );

    const data = await response.json();
    movies.innerHTML = "";

    if (data.Response === "False") {
      movies.innerHTML = `<h2 class="message">Movie not found</h2>`;
      totalPages = 1;
      pageNumber.textContent = 1;
      updateButtons();
      return;
    }

    totalPages = Math.ceil(data.totalResults / 10);

    data.Search.forEach((movie) => {
      movies.innerHTML += `
        <div class="card">
          <img 
            loading="lazy"
            src="${
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/300x450?text=No+Image"
            }" 
            alt="${movie.Title}"
          >
          <h3>${movie.Title}</h3>
          <p>${movie.Year}</p>
          <p>${movie.Type}</p>
        </div>
      `;
    });

    pageNumber.textContent = currentPage;
    updateButtons();
  } catch (error) {
    movies.innerHTML = `<h2 class="message">Something went wrong</h2>`;
  } finally {
    searchBtn.disabled = false;
  }
}

searchBtn.addEventListener("click", () => {
  currentSearch = input.value.trim();
  currentPage = 1;
  getMovies();
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    currentSearch = input.value.trim();
    currentPage = 1;
    getMovies();
  }
});

preBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    getMovies();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    getMovies();
  }
});

updateButtons();