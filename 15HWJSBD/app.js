




const row = document.querySelector('.row');

const renderCard = (flags, name, region, population, language, currency, currency1) => {
row.insertAdjacentHTML('beforeend', `
<div class="col">
<div class="card h-100">
  <img src="${flags}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">${region}</p>
    <p class="card-text">👨‍👨‍👧‍👦 ${population} млн</p>
    <p class="card-text">🗣 ${language}</p>
    <p class="card-text">💰 ${currency} ${currency1} </p>
  </div>
</div>
</div>
`)
}


      fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(arr => {
        console.log(arr);
        for (let i = 0; i <= arr.length; i += 10) {

        const flags = arr[i].flags.svg;
        const name = arr[i].name.official;
        const region = arr[i].region;
        const population = ((arr[i].population) / 10**6).toFixed(2);
        const language = Object.values(arr[i].languages);
        const currency = Object.values(arr[i].currencies).map(item => {return item.symbol});
        const currency1 = Object.values(arr[i].currencies).map(item => {return item.name});
              
        renderCard(flags, name, region, population,language, currency,currency1);
      

        }});
    