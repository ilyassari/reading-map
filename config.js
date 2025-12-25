// Display Configuration
// Customize how your reading map looks!

const CONFIG = {
    // Flag display settings
    flags: {
        showOnHover: true,  // Show country flags when hovering over markers (true/false)
        replaceBooks: true  // Show flags instead of books permanently (true/false)
    },
    
    // Book icon display modes
    // Options: 'auto', 'always-stack', 'always-single'
    // - 'auto': Single book icon for 1 book, stack for multiple (default)
    // - 'always-stack': Always show stack icon (📚) regardless of count
    // - 'always-single': Always show single book icon (colored by year)
    bookIconMode: 'always-stack',
    
    // Map settings
    map: {
        initialZoom: 2,           // Starting zoom level (1-18)
        initialCenter: [20, 0],   // Starting position [latitude, longitude]
        markerSize: 48            // Size of markers in pixels
    },
    
    // UI settings
    ui: {
        defaultTheme: 'dark',     // Default color theme: 'light' or 'dark'
        showStats: true           // Show statistics bar at the top (true/false)
    }
};