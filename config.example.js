// Configuration file for API keys and settings
// Copy this file to 'config.js' and add your actual API key

const CONFIG = {
    // Get your API key from https://developers.giphy.com/
    GIPHY_API_KEY: 'your_api_key_here',
    
    // API endpoints
    GIPHY_BASE_URL: 'https://api.giphy.com/v1/gifs',
    
    // App settings
    MAX_RESULTS: 1,
    DEFAULT_RATING: 'g'
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
