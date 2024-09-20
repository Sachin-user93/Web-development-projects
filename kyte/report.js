 // Function to populate categories in the dropdown
        function populateCategories() {
            const categorySelect = document.getElementById('category-report');
            let categories = JSON.parse(localStorage.getItem('categories')) || [];

            // Clear the previous options
            categorySelect.innerHTML = '<option value="" disabled selected>Select a category</option>';

            // Add each category as an option
            categories.forEach(category => {
                const option = document.createElement('option');
                option.value = category;
                option.textContent = category;
                categorySelect.appendChild(option);
            });
        }

        // Function to display movies when a category is selected
        function displayMovies() {
            const selectedCategory = document.getElementById('category-report').value;
            const movieList = document.getElementById('movie-list');
            let movies = JSON.parse(localStorage.getItem('movies')) || {};

            // Clear previous movie data
            movieList.innerHTML = '';

            // Check if the selected category has any movies
            if (movies[selectedCategory] && movies[selectedCategory].length > 0) {
                movieList.innerHTML = `<h3>Movies in ${selectedCategory}:</h3>`;

                movies[selectedCategory].forEach(movie => {
                    movieList.innerHTML += `
                        <div>
                            <strong>${movie.name}</strong> 
                            <p>Date: ${movie.date}</p>
                            <p>Duration: ${movie.duration} minutes</p>
                        </div>
                        <hr>
                    `;
                });
            } else {
                movieList.innerHTML = '<p>No movies found in this category.</p>';
            }
        }

        // Event listener for category change
        document.getElementById('category-report').addEventListener('change', displayMovies);

        // Populate categories on page load
        document.addEventListener('DOMContentLoaded', populateCategories);
    