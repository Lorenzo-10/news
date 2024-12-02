document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("search-form");
    const input = document.getElementById("search-input");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent default form submission
  
      // Get the search query and trim extra spaces
      const query = input.value.toLowerCase().trim();
  
      // Redirect based on the query
      if (query === "world") {
        window.location.href = "world.html";
      } else if (query === "sports") {
        window.location.href = "sports.html";
      } else if (query === "entertainment") {
        window.location.href = "entertainment.html";
      } else if (query === "tech") {
        window.location.href = "tech.html";
      } else {
        alert("No results found. Try searching World, Sports, Entertainment, or Tech.");
      }
    });
  });
  