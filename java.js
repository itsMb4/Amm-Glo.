function showPage(page) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
      page.style.display = 'none';
    });
  
    // Show the selected page
    var selectedPage = document.getElementById(page);
    if (selectedPage) {
      selectedPage.style.display = 'block';
    } else {
      console.error("Page not found:", page);
    }
    document.addEventListener('DOMContentLoaded', function() {
      var quoteForm = document.getElementById('quoteForm');
      if (quoteForm) {
          quoteForm.addEventListener('submit', function(event) {
              event.preventDefault(); // Prevent form submission
              
              // Validate input
              var fullName = quoteForm.elements['fullName'].value.trim();
              var companyName = quoteForm.elements['companyName'].value.trim();
              var email = quoteForm.elements['email'].value.trim();
              var additionalInfo = quoteForm.elements['additionalInfo'].value.trim();
              
              // Check if any field is empty
              if (!fullName || !companyName || !email || !additionalInfo) {
                  alert('Please fill in all fields.');
                  return;
              }
              
              // Check email format
              var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!emailRegex.test(email)) {
                  alert('Please enter a valid email address.');
                  return;
              }
              
              // Sanitize input (preventing XSS)
              fullName = sanitizeInput(fullName);
              companyName = sanitizeInput(companyName);
              email = sanitizeInput(email);
              additionalInfo = sanitizeInput(additionalInfo);
              
              // Replace 'your-email@example.com' with your company's email address
              var mailToLink = `mailto:your-emiliojaramillo007@gmail.com?subject=Quote Request&body=Full Name: ${fullName}%0D%0ACompany Name: ${companyName}%0D%0AEmail: ${email}%0D%0AAdditional Information: ${additionalInfo}`;
              
              // Open default email client with prefilled fields
              window.location.href = mailToLink;
          });
      }
  });
  
  function sanitizeInput(input) {
      // Implement input sanitization logic here (e.g., escaping HTML characters)
      // Example: return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      return input;
  }
  