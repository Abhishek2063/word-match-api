const fs = require('fs');

// Read data from JSON file
const rawData = fs.readFileSync('./utils/data.json');
const data = JSON.parse(rawData);

// Controller function for word match search
exports.search = (query) => {
    if (!query) {
      return data; // Return complete data if search query is not provided
    }
  
    // Split the query into individual words
    const searchWords = query.toLowerCase().split(' ');
  
    return data.filter(item => {
      const titleWords = item.title.toLowerCase().split(' ');
      return searchWords.some(word => titleWords.includes(word));
    });
  };
