// Fetching data from the Spring Boot backend
document.addEventListener("DOMContentLoaded", function() {
    fetchCategories();
    fetchSuggestions();
});

// Fetch categories data from backend API
function fetchCategories() {
    fetch("http://localhost:8080/appraisal/categories")
        .then(response => response.json())
        .then(data => {
            const categoriesTable = document.getElementById("categoriesTable").getElementsByTagName("tbody")[0];

            // Clear existing rows
            categoriesTable.innerHTML = "";

            // Loop through the categories data and add rows to the table
            data.forEach(category => {
                const row = categoriesTable.insertRow();
                row.insertCell(0).textContent = category.category;
                row.insertCell(1).textContent = `${category.standardPercentage}%`;
                row.insertCell(2).textContent = `${category.actualPercentage}%`;
            });
        })
        .catch(error => console.error("Error fetching categories:", error));
}

// Fetch suggestions data from backend API
function fetchSuggestions() {
    fetch("http://localhost:8080/appraisal/suggestions")
        .then(response => response.json())
        .then(data => {
            const suggestionsList = document.getElementById("suggestionsList");

            // Clear existing list items
            suggestionsList.innerHTML = "";

            // Loop through the suggestions data and add list items
            data.forEach(suggestion => {
                const listItem = document.createElement("li");
                listItem.textContent = suggestion.suggestion;
                suggestionsList.appendChild(listItem);
            });
        })
        .catch(error => console.error("Error fetching suggestions:", error));
}
