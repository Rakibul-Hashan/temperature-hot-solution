const API_KEY = `3a67fd692d1169f9b84b94cd248afc04`;

const searchTempareture = () => {
    const searchText = document.getElementById('search-input').value;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${API_KEY}`;
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data));
    document.getElementById('search-input').value = '';
}
searchTempareture()

const innerText = (elementId, innerText) => {
    const element = document.getElementById(elementId);
    element.innerText = innerText;

}
const displayTemp = (weatherResult) => {
    console.log(weatherResult)
    const {main : {temp}, name, weather:{0:{icon,main}}} = weatherResult;
    const tempareture = Math.round(temp - 273.15);
    const city = name;
    const condition = main;
    console.log(tempareture, icon)
    // displaying items one by one
    innerText('city',`${city}`)
    innerText('tempareture',`${tempareture} `)
    innerText('condition',`${condition}`)
    innerText('condition',`${condition}`)
    // set weather icon
    const iconUrl =`https://openweathermap.org/img/wn/${icon}@2x.png`;
    document.getElementById('icon').setAttribute('src', iconUrl);


}