const searchPhone = () => {
    const searchField = document.getElementById('input-field');
    const searchText = searchField.value;
    searchField.value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    
    fetch(url)
    .then(res => res.json())
    .then(res => displayResult(res.data));
}
const displayResult = res => {
    const searchResult = document.getElementById('search-result');
    res.forEach(element => {
        console.log(element);
        const div = document.createElement('div');
        div.classList.add('cal');
        div.innerHTML = `
        <div class="card h-100">
           <img src="${element.image}" class="card-img-top" alt="...">
           <div class="card-body">
              <h5 class="card-title">${element.phone_name}</h5>
              <h6 class="card-title">${element.slug}</h6>
              <p class="card-text">${element.brand}</p>
           </div>
         </div>
        `;
        searchResult.appendChild(div);
    })

}