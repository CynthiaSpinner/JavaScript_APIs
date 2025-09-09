console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const searchButton = document.getElementById('submitSearch');
const searchInput = document.getElementById('searchWord');
const imageElement = document.querySelector('#imageContainer img');
const feedBackElement = document.getElementById('feedback');

//fetching api
searchButton.addEventListener('click', function() {
    const searchTerm = searchInput.value;

    const apiKey = 'a3LGbtvE75BnCiQYIXhPWZm9pwV9jL8H';

    const url = `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${searchTerm}`;

    fetch(url)

    //converting to JSON format
    .then(function(response) {
        console.log('response received:', response);
        return response.json();
    })
    //recieves the actual data from the API
    .then(function(data) {
        console.log('data received:', data);
    })
    //handling any errors
    .catch(function(error) {
        console.log('error:', error);
    });
});