// Configuration
const CONFIG = {
    // UI Settings
    ui: {
        showStats: true,              // Show/hide statistics bar at the top
        filters: {
            inactiveOpacity: 0.4      // Opacity for inactive year/author filter buttons (0-1)
        }
    },
    
    // Theme Settings
    theme: {
        default: 'retro',             // Page theme: 'default', 'retro', or 'minimal'
        showSwitcher: true,           // Show/hide theme switcher button (🎨)
        mode: 'dark',                 // Color mode: 'light' or 'dark'
        showModeToggle: true          // Show/hide dark mode toggle button (🌙)
    },
    
    // Map Settings
    map: {
        initialCenter: [20, 0],       // Starting map position [latitude, longitude]
        initialZoom: 2,               // Starting zoom level (1-18)
        markers: {
            size: 48,                 // Marker size in pixels
            bookIconMode: 'auto',     // Book icon display mode: 'auto', 'always-stack', or 'always-single'
            inactiveOpacity: 0.15     // Opacity for inactive book icon markers (0-1)
        },
        flags: {
            showOnHover: true,        // Show country flags when hovering over markers
            replaceBooks: true,       // Show flags instead of book icons permanently
            height: 30,               // Flag height in pixels (width auto from original aspect ratio)
            inactiveOpacity: 0.15     // Opacity for inactive flag markers when replaceBooks is true (0-1)
        }
    }
};