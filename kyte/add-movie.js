 // Populate categories in dropdown
        document.addEventListener('DOMContentLoaded', function() {
            const categorySelect = document.getElementById('movie-category');
            let categories = JSON.parse(localStorage.getItem('categories')) || [];
            
            categories.forEach(category => {
                const option = document.createElement('option');
                option.value = category;
                option.textContent = category;
                categorySelect.appendChild(option);
            });
        });

        // Save movie data
        document.getElementById('movie-form').addEventListener('submit', function(event) {
            event.preventDefault();
            
            const movieName = document.getElementById('movie-name').value;
            const movieDate = document.getElementById('movie-date').value;
            const movieDuration = document.getElementById('movie-duration').value;
            const movieCategory = document.getElementById('movie-category').value;

            let movies = JSON.parse(localStorage.getItem('movies')) || {};

            if (!movies[movieCategory]) {
                movies[movieCategory] = [];
            }

            movies[movieCategory].push({ name: movieName, date: movieDate, duration: movieDuration });

            localStorage.setItem('movies', JSON.stringify(movies));

            alert('Movie added!');
            document.getElementById('movie-form').reset();
        });