const locationFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const name = document.querySelector('#location-name').value.trim();
    const description = document.querySelector('#location-description').value.trim();
    const longitude = parseFloat(document.querySelector('#location-long').value.trim());
    const latitude =parseFloat(document.querySelector('#location-lat').value.trim());
  
    if (name && description && longitude && latitude) {
        console.log(name, description, longitude, latitude)
      // Send a POST request to the API endpoint
      const response = await fetch('/api/locations', {
        method: 'POST',
        body: JSON.stringify({ 
            name, description, longitude, latitude }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
    //     // If successful, redirect the browser to the profile page
        document.location.replace('/locations');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.createLocation')
    .addEventListener('submit', locationFormHandler);