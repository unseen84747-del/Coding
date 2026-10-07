const movies = [
  {
    id: 1,
    title: "Dune: Part Two",
    genre: "Sci-Fi",
    year: 2024,
    rating: 9.0,
    runtime: "2h 46m",
    poster:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=900&q=80",
    description:
      "Paul Atreides seeks vengeance while navigating a desert war that will reshape the galaxy.",
    tags: ["Epic", "Adventure", "Space"],
    featured: true,
    featuredBackground:
      "linear-gradient(120deg, rgba(7,17,31,0.78), rgba(7,17,31,0.32)), url('https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1600&q=80')"
  },
  {
    id: 2,
    title: "Spider-Man: Across the Spider-Verse",
    genre: "Animation",
    year: 2023,
    rating: 8.8,
    runtime: "2h 20m",
    poster:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=900&q=80",
    description:
      "Miles Morales reunites with Gwen Stacy on a multiverse journey filled with action, heart, and impossible stakes.",
    tags: ["Comic", "Action", "Animated"],
    featured: false
  },
  {
    id: 3,
    title: "The Dark Knight",
    genre: "Action",
    year: 2008,
    rating: 9.1,
    runtime: "2h 32m",
    poster:
      "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?auto=format&fit=crop&w=900&q=80",
    description:
      "Batman faces the Joker in a crime epic where chaos tests the city and the limits of justice.",
    tags: ["Crime", "Thriller", "Heroic"],
    featured: false
  },
  {
    id: 4,
    title: "Forrest Gump",
    genre: "Drama",
    year: 1994,
    rating: 8.9,
    runtime: "2h 22m",
    poster:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=900&q=80",
    description:
      "A warm-hearted man’s extraordinary life takes him from the 1950s through decades of history and love.",
    tags: ["Classic", "Romance", "Inspirational"],
    featured: false
  },
  {
    id: 5,
    title: "The Grand Budapest Hotel",
    genre: "Comedy",
    year: 2014,
    rating: 8.5,
    runtime: "1h 39m",
    poster:
      "https://images.unsplash.com/photo-1524989942937-3cb776d29cde?auto=format&fit=crop&w=900&q=80",
    description:
      "A meticulous concierge and his sidekick investigate a missing masterpiece across a surreal European landscape.",
    tags: ["Whimsical", "Mystery", "Stylish"],
    featured: false
  },
  {
    id: 6,
    title: "Arrival",
    genre: "Sci-Fi",
    year: 2016,
    rating: 8.4,
    runtime: "1h 56m",
    poster:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    description:
      "A language expert deciphers alien communication while confronting grief, time, and choice.",
    tags: ["Mind-bending", "Drama", "Future"],
    featured: false
  },
  {
    id: 7,
    title: "The Incredibles",
    genre: "Animation",
    year: 2004,
    rating: 8.1,
    runtime: "1h 55m",
    poster:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    description:
      "A family of superheroes faces a brilliant villain who threatens the balance of the world.",
    tags: ["Family", "Adventure", "Superhero"],
    featured: false
  },
  {
    id: 8,
    title: "Mad Max: Fury Road",
    genre: "Action",
    year: 2015,
    rating: 8.2,
    runtime: "2h 0m",
    poster:
      "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?auto=format&fit=crop&w=900&q=80",
    description:
      "In a barren wasteland, Furiosa and Max make a desperate run through a brutal pursuit.",
    tags: ["Roadtrip", "Chaos", "Post-Apocalyptic"],
    featured: false
  },
  {
    id: 9,
    title: "La La Land",
    genre: "Drama",
    year: 2016,
    rating: 8.1,
    runtime: "2h 8m",
    poster:
      "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=900&q=80",
    description:
      "A jazz pianist and an aspiring actress chase dreams while love and ambition pull them apart.",
    tags: ["Musical", "Romance", "Dreams"],
    featured: false
  },
  {
    id: 10,
    title: "Toy Story 4",
    genre: "Comedy",
    year: 2019,
    rating: 7.7,
    runtime: "1h 40m",
    poster:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
    description:
      "Woody and Buzz face a new chapter of friendship, purpose, and adventure with old friends and new ones.",
    tags: ["Family", "Heartwarming", "Adventure"],
    featured: false
  }
];

const state = {
  activeGenre: "All",
  searchTerm: "",
  favorites: new Set(),
  activeMovieId: movies[0]?.id ?? null,
};

const heroSection = document.getElementById("heroSection");
const featuredTitle = document.getElementById("featuredTitle");
const featuredYear = document.getElementById("featuredYear");
const featuredGenre = document.getElementById("featuredGenre");
const featuredRating = document.getElementById("featuredRating");
const featuredDescription = document.getElementById("featuredDescription");
const featuredActionBtn = document.getElementById("featuredActionBtn");
const featuredFavoriteBtn = document.getElementById("featuredFavoriteBtn");
const movieGrid = document.getElementById("movieGrid");
const genreButtons = [...document.querySelectorAll(".filter-btn")];
const searchInput = document.getElementById("searchInput");
const totalMovies = document.getElementById("totalMovies");
const watchlistCount = document.getElementById("watchlistCount");
const clearFiltersBtn = document.getElementById("clearFiltersBtn");

const modal = document.getElementById("movieModal");
const modalPoster = document.getElementById("modalPoster");
const modalTitle = document.getElementById("modalTitle");
const modalYear = document.getElementById("modalYear");
const modalGenre = document.getElementById("modalGenre");
const modalRuntime = document.getElementById("modalRuntime");
const modalRating = document.getElementById("modalRating");
const modalDescription = document.getElementById("modalDescription");
const modalTags = document.getElementById("modalTags");
const modalFavoriteBtn = document.getElementById("modalFavoriteBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

function applyFilters() {
  const filteredMovies = movies.filter((movie) => {
    const matchesGenre = state.activeGenre === "All" || movie.genre === state.activeGenre;
    const normalized = state.searchTerm.trim().toLowerCase();
    const matchesSearch =
      !normalized || `${movie.title} ${movie.genre}`.toLowerCase().includes(normalized);

    return matchesGenre && matchesSearch;
  });

  if (filteredMovies.length === 0) {
    movieGrid.innerHTML = '<div class="no-results">No movies match your search. Try another term or filter.</div>';
  } else {
    movieGrid.innerHTML = filteredMovies
      .map(
        (movie) => `
          <article class="movie-card" data-movie-id="${movie.id}">
            <div class="movie-poster">
              <img src="${movie.poster}" alt="${movie.title} poster" />
              <span class="badge">★ ${movie.rating.toFixed(1)}</span>
            </div>
            <div class="card-body">
              <div class="card-head">
                <h4>${movie.title}</h4>
                <button class="favorite-toggle ${state.favorites.has(movie.id) ? "active" : ""}" data-favorite-id="${movie.id}" aria-label="Toggle favorite for ${movie.title}">${state.favorites.has(movie.id) ? "♥" : "♡"}</button>
              </div>
              <div class="card-meta">
                <span>${movie.genre}</span>
                <span>${movie.year}</span>
                <span>${movie.runtime}</span>
              </div>
              <p>${movie.description}</p>
              <div class="card-actions">
                <button class="card-link more-info-btn" data-movie-id="${movie.id}">More info</button>
                <button class="primary-btn" data-watch-id="${movie.id}">Watch</button>
              </div>
            </div>
          </article>
        `
      )
      .join("");
  }

  totalMovies.textContent = filteredMovies.length;
  watchlistCount.textContent = state.favorites.size;

  const featuredMovie = filteredMovies.find((movie) => movie.featured) || filteredMovies[0] || movies[0];
  if (featuredMovie) {
    state.activeMovieId = featuredMovie.id;
    renderFeaturedMovie(featuredMovie);
  }
}

function renderFeaturedMovie(movie) {
  featuredTitle.textContent = movie.title;
  featuredYear.textContent = movie.year;
  featuredGenre.textContent = movie.genre;
  featuredRating.textContent = `★ ${movie.rating.toFixed(1)}`;
  featuredDescription.textContent = movie.description;
  featuredFavoriteBtn.textContent = state.favorites.has(movie.id) ? "Added to watchlist" : "Add to watchlist";

  const heroBackground = movie.featuredBackground ||
    `linear-gradient(120deg, rgba(7,17,31,0.78), rgba(7,17,31,0.32)), url('${movie.poster}')`;

  heroSection.style.backgroundImage = heroBackground;
  heroSection.style.backgroundSize = "cover";
  heroSection.style.backgroundPosition = "center";
}

function toggleFavorite(movieId) {
  if (state.favorites.has(movieId)) {
    state.favorites.delete(movieId);
  } else {
    state.favorites.add(movieId);
  }

  applyFilters();
  renderModalIfOpen();
}

function openModal(movieId) {
  const movie = movies.find((item) => item.id === movieId);
  if (!movie) return;

  modalPoster.src = movie.poster;
  modalPoster.alt = `${movie.title} poster`;
  modalTitle.textContent = movie.title;
  modalYear.textContent = movie.year;
  modalGenre.textContent = movie.genre;
  modalRuntime.textContent = movie.runtime;
  modalRating.textContent = `★ ${movie.rating.toFixed(1)}`;
  modalDescription.textContent = movie.description;
  modalTags.innerHTML = movie.tags.map((tag) => `<span>${tag}</span>`).join("");
  modalFavoriteBtn.textContent = state.favorites.has(movie.id) ? "Remove from watchlist" : "Add to watchlist";
  modalFavoriteBtn.dataset.movieId = movie.id;

  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}

function renderModalIfOpen() {
  if (modal.classList.contains("hidden")) return;
  const activeId = Number(modalFavoriteBtn.dataset.movieId || state.activeMovieId);
  const movie = movies.find((item) => item.id === activeId);
  if (movie) openModal(movie.id);
}

searchInput.addEventListener("input", (event) => {
  state.searchTerm = event.target.value;
  applyFilters();
});

genreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.activeGenre = button.dataset.genre;
    genreButtons.forEach((btn) => btn.classList.toggle("active", btn === button));
    applyFilters();
  });
});

clearFiltersBtn.addEventListener("click", () => {
  state.activeGenre = "All";
  state.searchTerm = "";
  searchInput.value = "";
  genreButtons.forEach((button) => button.classList.toggle("active", button.dataset.genre === "All"));
  applyFilters();
});

featuredActionBtn.addEventListener("click", () => {
  const movie = movies.find((item) => item.id === state.activeMovieId) || movies[0];
  openModal(movie.id);
});

featuredFavoriteBtn.addEventListener("click", () => {
  const movie = movies.find((item) => item.id === state.activeMovieId) || movies[0];
  toggleFavorite(movie.id);
});

movieGrid.addEventListener("click", (event) => {
  const favoriteBtn = event.target.closest("[data-favorite-id]");
  if (favoriteBtn) {
    toggleFavorite(Number(favoriteBtn.dataset.favoriteId));
    return;
  }

  const moreInfoBtn = event.target.closest(".more-info-btn");
  if (moreInfoBtn) {
    openModal(Number(moreInfoBtn.dataset.movieId));
    return;
  }

  const watchBtn = event.target.closest("[data-watch-id]");
  if (watchBtn) {
    openModal(Number(watchBtn.dataset.watchId));
  }
});

modalFavoriteBtn.addEventListener("click", () => {
  const movieId = Number(modalFavoriteBtn.dataset.movieId);
  toggleFavorite(movieId);
});

closeModalBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  if (event.target.dataset.close === "true") {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

applyFilters();



























































































































