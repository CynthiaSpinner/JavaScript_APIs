const searchButton = document.getElementById('submitSearch');
const searchInput = document.getElementById('searchWord');
const imageElement = document.querySelector('#imageContainer img');
const feedBackElement = document.getElementById('feedback');

//fetching api
searchButton.addEventListener('click', function() {
    const searchTerm = searchInput.value;

    // Get API key from configuration
    const apiKey = CONFIG.GIPHY_API_KEY;
    
    // Validate API key exists
    if (!apiKey || apiKey === 'your_api_key_here') {
        feedBackElement.textContent = 'Error: Please configure your Giphy API key in config.js';
        return;
    }

    const url = `${CONFIG.GIPHY_BASE_URL}/translate?api_key=${apiKey}&s=${encodeURIComponent(searchTerm)}`;

    fetch(url)

    //converting to JSON format
    .then(function(response) {
        console.log('response received:', response);
        return response.json();
    })
    //recieves the actual data from the API
    .then(function(data) {
        //updating the image element src attribute
        imageElement.src = data.data.images.original.url;

        //resetting the search input value
        searchInput.value = '';

        //rest the feedback paragraph (clear any previous errors)
        feedBackElement.textContent = '';
    })
    //handling any errors
    .catch(function(error) {
        console.error(error);
        feedBackElement.textContent = error.message;
    });
});