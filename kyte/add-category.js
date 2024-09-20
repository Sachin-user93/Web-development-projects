 document.getElementById('category-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const category = document.getElementById('category').value;

            // Get categories from localStorage
            let categories = JSON.parse(localStorage.getItem('categories')) || [];

            // Add new category if it doesn't exist
            if (!categories.includes(category)) {
                categories.push(category);
            }

            // Save updated categories back to localStorage
            localStorage.setItem('categories', JSON.stringify(categories));

            alert('Category added!');
            document.getElementById('category').value = '';
        });