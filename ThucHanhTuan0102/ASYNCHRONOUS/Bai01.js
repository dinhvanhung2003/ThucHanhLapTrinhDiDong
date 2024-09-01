// Code 1
function whereAmI(lat, lng) {
    // Reverse geocoding API URL
    const url = `https://geocode.xyz/${lat},${lng}?geoit=json`;
  
    // Fetching the data
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Problem with geocoding API: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        console.log(`You are in ${data.city}, ${data.country}`);
        return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Country not found (${response.status})`);
        }
        return response.json();
      })
      .then(countryData => {
        renderCountry(countryData[0]);
      })
      .catch(err => console.error(`${err.message}`));
  }
  
  // Test data
  whereAmI(52.508, 13.381); // Berlin, Germany
//   whereAmI(19.037, 72.873); // Mumbai, India
//   whereAmI(-33.933, 18.474); // Cape Town, South Africa
  
  // Helper function to render country data
  function renderCountry(data) {
    const countryHTML = `
      <article class="country">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            data.population / 1000000
          ).toFixed(1)} million people</p>
          <p class="country__row"><span>🗣️</span>${Object.values(
            data.languages
          ).join(', ')}</p>
          <p class="country__row"><span>💰</span>${Object.values(
            data.currencies
          )[0].name}</p>
        </div>
      </article>
    `;
    document.querySelector('.countries').insertAdjacentHTML('beforeend', countryHTML);
    document.querySelector('.countries').style.opacity = 1;
  }