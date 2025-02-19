function submitForm() {
    var name = document.getElementById('name').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var address = document.getElementById('address').value;
    var language = document.getElementById('language').value;
  
    // Create a new paragraph element to display the information
    var infoParagraph = document.createElement('p');
    infoParagraph.innerHTML = `
      <strong>Name:</strong> ${name}<br>
      <strong>Username:</strong> ${username}<br>
      <strong>Password:</strong> ${password}<br>
      <strong>Address:</strong> ${address}<br>
      <strong>Language:</strong> ${language}
    `;
  
    // Append the paragraph to the container
    var infoContainer = document.getElementById('infoContainer');
    infoContainer.innerHTML = ''; // Clear previous content
    infoContainer.appendChild(infoParagraph);
  
    // Clear the form after submission
    document.getElementById('registrationForm').reset();
  }
  
  // Additional function to clear the displayed information
  function clearInfo() {
    var infoContainer = document.getElementById('infoContainer');
    infoContainer.innerHTML = ''; // Clear content
  }
  