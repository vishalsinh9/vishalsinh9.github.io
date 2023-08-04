function search() {
    const apiKey = "AIzaSyD-OOFfvHWQd9NfmmJoO5Xln8_XKLfp7gI";
    const searchEngineID = "YOUR_CUSTOM_SEARCH_ENGINE_ID";
    const searchQuery = document.getElementById("searchInput").value;
    const resultsList = document.getElementById("resultsList");

    resultsList.innerHTML = ""; // Clear previous results

    // Make a request to Google Custom Search JSON API
    fetch(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineID}&q=${encodeURIComponent(searchQuery)}`)
        .then(response => response.json())
        .then(data => {
            // Display search results
            if (data.items) {
                data.items.forEach(item => {
                    const listItem = document.createElement("li");
                    const link = document.createElement("a");
                    link.href = item.link;
                    link.textContent = item.title;
                    listItem.appendChild(link);
                    resultsList.appendChild(listItem);
                });
            } else {
                const listItem = document.createElement("li");
                listItem.textContent = "No results found.";
                resultsList.appendChild(listItem);
            }
        })
        .catch(error => {
            console.error("Error fetching search results:", error);
            const listItem = document.createElement("li");
            listItem.textContent = "An error occurred while fetching results.";
            resultsList.appendChild(listItem);
        });
}
