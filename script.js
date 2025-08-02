
// Show welcome message when page loads
window.onload = function () {
  alert("Welcome to AN NANDI!");
};

// WhatsApp order button function
function orderNow() {
  const message = encodeURIComponent("Hello! I want to order some hardware items.");
  const phone = "9434237719"; // Replace with your WhatsApp number
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}
