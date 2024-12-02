document.addEventListener("DOMContentLoaded", () => {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptCookiesButton = document.getElementById("accept-cookies");
  
    // Check if the user has already accepted cookies
    if (!localStorage.getItem("cookiesAccepted")) {
      cookieBanner.style.display = "block";
    }
  
    // Handle "Accept All Cookies" button click
    acceptCookiesButton.addEventListener("click", () => {
      // Save the user's choice in local storage
      localStorage.setItem("cookiesAccepted", "true");
  
      // Hide the cookie banner
      cookieBanner.style.display = "none";
    });
  });
  