// Global state
let map;
let markers = [];
let selectedYears = new Set();
let selectedAuthors = new Set();
let countryFilter = null;
let searchQuery = '';

// Initialize the application
function init() {
    initPageTheme();
    initMap();
    initDarkMode();
    initStatsBar();
    createFilters();
    updateStats();
    renderBooks();
    attachEventListeners();
    initKeyboardShortcuts();
}

// Initialize stats bar visibility
function initStatsBar() {
    if (!CONFIG.ui.showStats) {
        const statsBar = document.querySelector('.stats-bar');
        if (statsBar) {
            statsBar.style.display = 'none';
        }
    }
}

// Initialize Leaflet map
function initMap() {
    const { initialCenter, initialZoom } = CONFIG.map;
    map = L.map('map').setView(initialCenter, initialZoom);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
        minZoom: 2
    }).addTo(map);
    
    addMarkersToMap();
}

// Dark Mode
function initDarkMode() {
    const savedTheme = localStorage.getItem('theme') || CONFIG.ui.defaultTheme;
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateDarkModeButton(savedTheme);
}

function toggleDarkMode() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateDarkModeButton(newTheme);
}

function updateDarkModeButton(theme) {
    const btn = document.getElementById('dark-mode-toggle');
    btn.textContent = theme === 'dark' ? '☀️' : '🌙';
    btn.title = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
}

// Page Theme (Retro / Minimal / Default)
function initPageTheme() {
    const { current, showSwitcher } = CONFIG.theme;
    
    // Set initial theme
    document.documentElement.setAttribute('data-page-theme', current);
    
    // Show/hide theme switcher button
    const themeSwitcherBtn = document.getElementById('theme-switcher');
    if (themeSwitcherBtn && showSwitcher) {
        themeSwitcherBtn.style.display = 'block';
        updateThemeSwitcherButton(current);
    }
}

function switchPageTheme() {
    const themes = ['default', 'retro', 'minimal'];
    const currentTheme = document.documentElement.getAttribute('data-page-theme') || 'default';
    const currentIndex = themes.indexOf(currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    const nextTheme = themes[nextIndex];
    
    document.documentElement.setAttribute('data-page-theme', nextTheme);
    updateThemeSwitcherButton(nextTheme);
}

function updateThemeSwitcherButton(theme) {
    const btn = document.getElementById('theme-switcher');
    if (!btn) return;
    
    const themeIcons = {
        'default': '🎨',
        'retro': '📜',
        'minimal': '⚪'
    };
    
    const themeNames = {
        'default': 'Default',
        'retro': 'Retro',
        'minimal': 'Minimal'
    };
    
    btn.textContent = themeIcons[theme] || '🎨';
    btn.title = `Current: ${themeNames[theme]} (Click to switch)`;
}


// Get book icon based on year
function getBookIconByYear(year) {
    const bookIcons = ['📕', '📗', '📘', '📙'];
    return bookIcons[year % 4];
}

// Get flag URL for country
function getFlagUrl(country) {
    return COUNTRY_FLAGS[country] || null;
}

// Determine which icon to show
function getIconEmoji(filteredBooks) {
    const bookCount = filteredBooks.length;
    const mode = CONFIG.bookIconMode;
    
    if (mode === 'always-stack') {
        return '📚';
    }
    
    if (mode === 'always-single') {
        const latestBook = filteredBooks.reduce((latest, book) => 
            book.year > latest.year ? book : latest
        );
        return getBookIconByYear(latestBook.year);
    }
    
    if (bookCount === 1) {
        return getBookIconByYear(filteredBooks[0].year);
    } else {
        return '📚';
    }
}

// Add markers for all books
function addMarkersToMap() {
    const booksByCountry = groupBooksByCountry(BOOKS);
    
    Object.entries(booksByCountry).forEach(([country, books]) => {
        const coords = COUNTRY_COORDS[country];
        
        if (!coords) {
            console.warn(`Coordinates not found for country: ${country}`);
            return;
        }
        
        const marker = L.marker(coords)
            .addTo(map)
            .on('click', function() {
                handleCountryClick(country);
            });
        
        markers.push({ marker, country, books });
        updateMarkerIcon(country, books);
    });
}

// Update marker icon
function updateMarkerIcon(country, allBooks) {
    const markerData = markers.find(m => m.country === country);
    if (!markerData) return;
    
    const filteredBooks = getFilteredBooksForCountry(allBooks);
    const bookCount = filteredBooks.length;
    
    if (bookCount === 0) {
        markerData.marker.setOpacity(0.15);
        return;
    }
    
    markerData.marker.setOpacity(1);
    
    const flagUrl = getFlagUrl(country);
    const { showOnHover, replaceBooks } = CONFIG.flags;
    const { markerSize } = CONFIG.map;
    
    let iconHtml;
    
    if (replaceBooks) {
        iconHtml = flagUrl 
            ? `<img src="${flagUrl}" class="country-flag-static" alt="${country}" />`
            : `<span class="book-icon">📚</span>`;
    } else {
        const iconEmoji = getIconEmoji(filteredBooks);
        
        if (showOnHover && flagUrl) {
            iconHtml = `
                <div class="book-marker-container">
                    <span class="book-icon">${iconEmoji}</span>
                    <img src="${flagUrl}" class="country-flag" alt="${country}" />
                </div>
            `;
        } else {
            iconHtml = `<span class="book-icon">${iconEmoji}</span>`;
        }
    }
    
    const bookIcon = L.divIcon({
        html: iconHtml,
        className: 'book-marker',
        iconSize: [markerSize, markerSize],
        iconAnchor: [markerSize / 2, markerSize / 2],
        popupAnchor: [0, -markerSize / 2]
    });
    
    markerData.marker.setIcon(bookIcon);
}

// Get filtered books for a country
function getFilteredBooksForCountry(books) {
    let filtered = books;
    
    if (selectedYears.size > 0) {
        filtered = filtered.filter(book => selectedYears.has(book.year));
    }
    
    if (selectedAuthors.size > 0) {
        filtered = filtered.filter(book => selectedAuthors.has(book.author));
    }
    
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(book => 
            book.title.toLowerCase().includes(query) ||
            book.author.toLowerCase().includes(query)
        );
    }
    
    return filtered;
}

// Update all markers
function updateAllMarkers() {
    markers.forEach(({ country, books }) => {
        updateMarkerIcon(country, books);
    });
}

// Handle country click
function handleCountryClick(country) {
    if (countryFilter === country) {
        countryFilter = null;
        resetMarkerHighlight();
    } else {
        countryFilter = country;
        highlightCountry(country);
    }
    renderBooks();
}

// Highlight country
function highlightCountry(country) {
    markers.forEach(({ marker, country: markerCountry }) => {
        const element = marker.getElement();
        if (!element) return;
        
        if (markerCountry === country) {
            element.style.filter = 'drop-shadow(0 0 8px rgba(52, 152, 219, 0.8))';
            element.style.opacity = '1';
        } else {
            element.style.filter = 'none';
            element.style.opacity = '0.15';
        }
    });
}

// Reset highlight
function resetMarkerHighlight() {
    markers.forEach(({ marker }) => {
        const element = marker.getElement();
        if (element) {
            element.style.filter = 'none';
            element.style.opacity = '1';
        }
    });
}

// Group books by country
function groupBooksByCountry(books) {
    return books.reduce((acc, book) => {
        if (!acc[book.country]) {
            acc[book.country] = [];
        }
        acc[book.country].push(book);
        return acc;
    }, {});
}

// Create year and author filters
function createFilters() {
    createYearFilters();
    createAuthorFilters();
}

function createYearFilters() {
    const container = document.getElementById('year-filters');
    
    // Get available years based on current filters
    let availableBooks = BOOKS;
    
    // Filter by selected authors first
    if (selectedAuthors.size > 0) {
        availableBooks = availableBooks.filter(book => selectedAuthors.has(book.author));
    }
    
    // Get years from available books
    const years = [...new Set(availableBooks.map(book => book.year))].sort((a, b) => b - a);
    
    const buttons = years.map(year => {
        const isSelected = selectedYears.has(year);
        return `<button class="filter-btn ${isSelected ? 'active' : ''}" data-year="${year}">${year}</button>`;
    }).join('');
    
    container.innerHTML = buttons;
    
    container.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const year = parseInt(btn.dataset.year);
            toggleYearFilter(year, btn);
        });
    });
}

function createAuthorFilters() {
    const container = document.getElementById('author-filters');
    
    // Get available authors based on current filters
    let availableBooks = BOOKS;
    
    // Filter by selected years first
    if (selectedYears.size > 0) {
        availableBooks = availableBooks.filter(book => selectedYears.has(book.year));
    }
    
    // Get authors from available books
    const authors = [...new Set(availableBooks.map(book => book.author))].sort();
    
    const buttons = authors.map(author => {
        const isSelected = selectedAuthors.has(author);
        return `<button class="filter-btn ${isSelected ? 'active' : ''}" data-author="${escapeHtml(author)}" title="${escapeHtml(author)}">
            ${escapeHtml(author.length > 25 ? author.substring(0, 22) + '...' : author)}
        </button>`;
    }).join('');
    
    container.innerHTML = buttons;
    
    container.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const author = btn.dataset.author;
            toggleAuthorFilter(author, btn);
        });
    });
}

// Toggle filters
function toggleYearFilter(year, button) {
    if (selectedYears.has(year)) {
        selectedYears.delete(year);
        button.classList.remove('active');
    } else {
        selectedYears.add(year);
        button.classList.add('active');
    }
    
    createAuthorFilters(); // Refresh authors based on new year selection
    updateAllMarkers();
    renderBooks();
    updateStats();
}

function toggleAuthorFilter(author, button) {
    if (selectedAuthors.has(author)) {
        selectedAuthors.delete(author);
        button.classList.remove('active');
    } else {
        selectedAuthors.add(author);
        button.classList.add('active');
    }
    
    createYearFilters(); // Refresh years based on new author selection
    updateAllMarkers();
    renderBooks();
    updateStats();
}

function clearYearFilters() {
    selectedYears.clear();
    createYearFilters(); // Recreate to show all years
    createAuthorFilters(); // Refresh authors
    updateAllMarkers();
    renderBooks();
    updateStats();
}

function clearAuthorFilters() {
    selectedAuthors.clear();
    createAuthorFilters(); // Recreate to show all authors
    createYearFilters(); // Refresh years
    updateAllMarkers();
    renderBooks();
    updateStats();
}

// Search functionality
function handleSearch(query) {
    searchQuery = query.trim();
    const clearBtn = document.getElementById('clear-search');
    clearBtn.style.display = searchQuery ? 'block' : 'none';
    
    updateAllMarkers();
    renderBooks();
    updateStats();
}

function clearSearch() {
    document.getElementById('search-box').value = '';
    handleSearch('');
}

// Update statistics
function updateStats() {
    const filtered = getFilteredBooks();
    const countries = new Set(filtered.map(b => b.country));
    const authors = new Set(filtered.map(b => b.author));
    const years = filtered.map(b => b.year);
    
    document.getElementById('total-books').textContent = filtered.length;
    document.getElementById('total-countries').textContent = countries.size;
    document.getElementById('total-authors').textContent = authors.size;
    
    if (years.length > 0) {
        const minYear = Math.min(...years);
        const maxYear = Math.max(...years);
        if (minYear === maxYear) {
            document.getElementById('year-range').textContent = minYear;
        } else {
            // Format as 94-25
            const minShort = String(minYear).slice(-2);
            const maxShort = String(maxYear).slice(-2);
            document.getElementById('year-range').textContent = `${minShort}-${maxShort}`;
        }
    } else {
        document.getElementById('year-range').textContent = '-';
    }
}

// Render book list
function renderBooks() {
    const bookList = document.getElementById('book-list');
    const filteredBooks = getFilteredBooks();
    
    let title = `Books (${filteredBooks.length})`;
    if (countryFilter) {
        title = `Books from ${countryFilter} (${filteredBooks.length})`;
    }
    
    // Empty state
    if (filteredBooks.length === 0) {
        bookList.innerHTML = `
            <div class="book-list-header">
                <h2>${title}</h2>
                ${countryFilter ? '<button id="clear-country" class="clear-filter">Clear country filter</button>' : ''}
            </div>
            <div class="empty-state">
                <div class="empty-icon">📚</div>
                <h3>No books found</h3>
                <p>Try adjusting your filters or search query</p>
                <button class="clear-all-btn" onclick="clearAllFilters()">Clear all filters</button>
            </div>
        `;
        return;
    }
    
    const bookItems = filteredBooks
        .map(book => `
            <li>
                <div class="book-title">
                    <a href="https://www.goodreads.com/book/show/${book.id}" target="_blank" rel="noopener noreferrer">
                        ${escapeHtml(book.title)}
                    </a>
                </div>
                <div class="book-author">${escapeHtml(book.author)} • ${escapeHtml(book.country)} • ${book.year}</div>
            </li>
        `)
        .join('');
    
    bookList.innerHTML = `
        <div class="book-list-header">
            <h2>${title}</h2>
            ${countryFilter ? '<button id="clear-country" class="clear-filter">Clear country filter</button>' : ''}
        </div>
        <ul>${bookItems}</ul>
    `;
    
    const clearButton = document.getElementById('clear-country');
    if (clearButton) {
        clearButton.addEventListener('click', () => {
            countryFilter = null;
            resetMarkerHighlight();
            renderBooks();
        });
    }
}

// Get filtered books
function getFilteredBooks() {
    let filtered = BOOKS;
    
    if (selectedYears.size > 0) {
        filtered = filtered.filter(book => selectedYears.has(book.year));
    }
    
    if (selectedAuthors.size > 0) {
        filtered = filtered.filter(book => selectedAuthors.has(book.author));
    }
    
    if (countryFilter) {
        filtered = filtered.filter(book => book.country === countryFilter);
    }
    
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(book => 
            book.title.toLowerCase().includes(query) ||
            book.author.toLowerCase().includes(query)
        );
    }
    
    // Debug logging
    if (selectedYears.size > 0 || selectedAuthors.size > 0) {
        console.log('Filters:', {
            years: Array.from(selectedYears),
            authors: Array.from(selectedAuthors),
            resultCount: filtered.length
        });
    }
    
    return filtered;
}

// Attach event listeners
function attachEventListeners() {
    // Dark mode toggle
    document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);
    
    // Theme switcher
    const themeSwitcherBtn = document.getElementById('theme-switcher');
    if (themeSwitcherBtn && CONFIG.theme.showSwitcher) {
        themeSwitcherBtn.addEventListener('click', switchPageTheme);
    }
    
    // Search box
    const searchBox = document.getElementById('search-box');
    searchBox.addEventListener('input', (e) => handleSearch(e.target.value));
    
    // Clear search
    document.getElementById('clear-search').addEventListener('click', clearSearch);
    
    // Clear filters
    document.getElementById('clear-years').addEventListener('click', clearYearFilters);
    document.getElementById('clear-authors').addEventListener('click', clearAuthorFilters);
}

// Utility: Escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Keyboard shortcuts
function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // "/" - Focus search box
        if (e.key === '/' && !isInputFocused()) {
            e.preventDefault();
            document.getElementById('search-box').focus();
        }
        
        // "Escape" - Clear all filters and search
        if (e.key === 'Escape') {
            if (isInputFocused()) {
                // If in search box, just blur it
                document.activeElement.blur();
            } else {
                // Clear everything
                clearAllFilters();
            }
        }
    });
}

function isInputFocused() {
    const activeElement = document.activeElement;
    return activeElement && (
        activeElement.tagName === 'INPUT' || 
        activeElement.tagName === 'TEXTAREA'
    );
}

function clearAllFilters() {
    // Clear search
    if (searchQuery) {
        clearSearch();
    }
    
    // Clear years
    if (selectedYears.size > 0) {
        clearYearFilters();
    }
    
    // Clear authors
    if (selectedAuthors.size > 0) {
        clearAuthorFilters();
    }
    
    // Clear country
    if (countryFilter) {
        countryFilter = null;
        resetMarkerHighlight();
        renderBooks();
    }
}