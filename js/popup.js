document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Collect form data
    var formData = new FormData(this);
    
    // Send form data using fetch API
    fetch('send-email.php', {
        method: 'POST',
        body: formData
    }).then(response => response.text())
      .then(data => {
          // Display the pop-up message
          var popup = document.getElementById('popup');
          popup.style.display = 'block';
          
          // Hide the pop-up after 3 seconds
          setTimeout(function() {
              popup.style.display = 'none';
          }, 3000);
          
          // Optionally, clear the form fields
          document.getElementById('contact-form').reset();
      }).catch(error => {
          console.error('Error:', error);
      });
});