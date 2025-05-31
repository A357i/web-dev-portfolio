console.log("search.js loaded");

function getTimePeriod(year) {
    const startYear = parseInt(year);
    if (startYear < 500) return "ancient";
    if (startYear >= 500 && startYear <= 1500) return "medieval";
    if (startYear > 1300 && startYear <= 1700) return "renaissance";
    if (startYear > 1700 && startYear <= 1900) return "modern";
    return "contemporary";
}

function inferField(searchTerm) {
    searchTerm = searchTerm.toLowerCase();
    if (searchTerm.includes("war") || searchTerm.includes("battle")) return "Wars & Conflicts";
    if (searchTerm.includes("president") || searchTerm.includes("leader") || searchTerm.includes("election")) return "Political Leader";
    if (searchTerm.includes("scientist") || searchTerm.includes("inventor")) return "Scientist";
    if (searchTerm.includes("artist")) return "Artist/Scientist";
    if (searchTerm.includes("military")) return "Military Leader";
    if (searchTerm.includes("philosopher")) return "Philosopher";
    return "Political Leader"; 
}

function handleRedirect(searchTerm) {
    console.log("handleRedirect called with:", searchTerm);
    searchTerm = searchTerm.trim().toLowerCase();
    if (!searchTerm) return;

    const eventField = inferField(searchTerm);
    if (eventField) {
        console.log("Matched event field:", eventField);
        window.location.href = `view-all.html?category=${encodeURIComponent(eventField)}`;
        return;
    }

    console.log("No match found for:", searchTerm);
}

function setupSearch() {
    console.log("setupSearch executing");
    const searchInput = document.getElementById("search-input");
    if (!searchInput) {
        console.error("Search input not found.");
        return;
    }
    console.log("searchInput found:", searchInput);

    searchInput.addEventListener('keypress', (e) => {
        console.log("Keypress event triggered, key:", e.key);
        if (e.key === 'Enter') {
            handleRedirect(searchInput.value.trim());
        }
    });
}

window.setupSearch = setupSearch;

document.addEventListener('DOMContentLoaded', setupSearch);
