// Global variables
let COUNTRY_COORDS = {};
let COUNTRY_FLAGS = {};
let BOOKS = [];

// Load countries and books from JSON
async function loadData() {
    try {
        // Load countries
        const countriesResponse = await fetch('countries.json');
        const countriesData = await countriesResponse.json();
        
        // Parse coordinates and flags
        for (const [country, data] of Object.entries(countriesData)) {
            COUNTRY_COORDS[country] = data.coordinates;
            COUNTRY_FLAGS[country] = data.flag;
        }
        
        console.log(`🌍 ${Object.keys(COUNTRY_COORDS).length} countries loaded`);
        
        // Load books
        const booksResponse = await fetch('books.json');
        BOOKS = await booksResponse.json();
        console.log(`📚 ${BOOKS.length} books loaded`);
        
        // Initialize app after both are loaded
        if (typeof init === 'function') {
            init();
        }
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

// Wait for both DOM and CONFIG to be ready
function startApp() {
    // Check if CONFIG is defined (from config.js)
    if (typeof CONFIG === 'undefined') {
        console.error('CONFIG not found! Make sure config.js is loaded before data.js');
        return;
    }
    
    loadData();
}

// Start loading when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startApp);
} else {
    startApp();
}