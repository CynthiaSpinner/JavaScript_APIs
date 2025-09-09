# Grab-A-Gif 🎬

A modern, interactive GIF search application built with vanilla JavaScript and the Giphy API.

## 🚀 Live Demo

Open `index.html` in your browser to start searching for GIFs!

## ✨ Features

- **Real-time GIF Search**: Search for GIFs using keywords
- **Responsive Design**: Works on desktop and mobile devices
- **Clean UI**: Modern, user-friendly interface with custom styling
- **Error Handling**: Displays helpful error messages
- **Auto-clear**: Input field clears after successful searches

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Custom styling and responsive design
- **JavaScript (ES6+)**: Fetch API, DOM manipulation, event handling
- **Giphy API**: GIF data and images

## 📋 Prerequisites

- A Giphy Developer account from [developers.giphy.com](https://developers.giphy.com/)
- Modern web browser with JavaScript enabled

## 🚦 Getting Started

1. **Clone or download** this repository
2. **Get your Giphy API key**:
   - Visit [developers.giphy.com](https://developers.giphy.com/)
   - Create an account and get your API key
3. **Update the API key** in `app.js`:
   ```javascript
   const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your actual key
   ```
4. **Open `index.html`** in your web browser
5. **Start searching** for GIFs!

## 📁 Project Structure

```
JavaScript_APIs/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styling
├── app.js             # JavaScript functionality
└── README.md          # Project documentation
```

## 🔧 How It Works

1. **DOM Selection**: JavaScript selects HTML elements (input, button, image, feedback)
2. **Event Handling**: Click event listener on the search button
3. **API Request**: Fetch API calls Giphy's translate endpoint with user's search term
4. **Promise Chain**: Handles response with `.then()` and `.catch()` methods
5. **DOM Update**: Updates image source and clears input on success, shows errors on failure

## 🎯 Key Features Implemented

- ✅ **DOM Manipulation**: Element selection and content updates
- ✅ **Fetch API**: Modern JavaScript HTTP requests
- ✅ **Promise Handling**: Asynchronous JavaScript with proper error handling
- ✅ **URL Construction**: Dynamic API endpoint with query parameters
- ✅ **User Experience**: Input clearing, error messages, responsive design

## 🌐 API Integration

This project uses the **Giphy Translate API**:
- **Endpoint**: `https://api.giphy.com/v1/gifs/translate`
- **Parameters**: `api_key` (your key) and `s` (search term)
- **Response**: JSON object containing GIF data and URLs

## 🎨 Styling

Custom CSS includes:
- Modern button styling with hover effects
- Responsive image container
- Error message styling
- Clean, centered layout

## 📚 Learning Objectives Achieved

This project demonstrates:
- **JavaScript Fetch API** usage
- **Promise-based** asynchronous programming
- **DOM manipulation** and event handling
- **API integration** with external services
- **Error handling** and user feedback
- **Modern CSS** styling techniques

## 🤝 Contributing

Feel free to fork this project and make improvements! Some ideas:
- Add loading spinners
- Implement search history
- Add favorite GIFs functionality
- Improve mobile responsiveness

## 📄 License

This project is open source and available under the MIT License.
