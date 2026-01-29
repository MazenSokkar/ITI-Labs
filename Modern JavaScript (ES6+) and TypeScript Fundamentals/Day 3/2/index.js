async function getMainCountry(name){
    let countryResponse = await fetch(`https://restcountries.com/v2/name/${name}`)
        .then(response => response.json()).then(data => {return data});
    return countryResponse;
}

async function getNeighborCountry(alpha) {
    let countryResponse = await fetch(`https://restcountries.com/v2/alpha/${alpha}`)
        .then(response => response.json()).then(data => {return data});
    return countryResponse;
}

let input;
let mainCountry;
let tryAgain = true;
while(tryAgain) {
    do {
        input = prompt("enter country name u want to search about");
    } while (!/^[A-Za-z ]+$/.test(input));

    mainCountry = await getMainCountry(input);

    if(mainCountry.status === 404)
    {
        alert("country not found")
        tryAgain = confirm("do you want to try again?");
    } else {
        tryAgain = false;
        document.getElementsByClassName("mainwrapper")[0].style["display"] = "block";
        buildCountryDiv(mainCountry[0], "mainCountry")
        let neighborCountry;
        if(mainCountry[0].borders.length > 0){
            neighborCountry = await getNeighborCountry(mainCountry[0].borders[1]);
            buildCountryDiv(neighborCountry, "neighborCountry");
        }
    }
}

// name, region, flags => png, languages => name, population, currencies=>name 
// borders[]

function buildCountryDiv(country, className){
    let imgElement = document.querySelector(`.${className} #countryImg`);
    imgElement.src = country.flag;
    let nameElement = document.querySelector(`.${className} #countryName`);
    nameElement.innerText = country.name;
    let regElement = document.querySelector(`.${className} #countryReg`);
    regElement.innerText = country.region;
    let popElement = document.querySelector(`.${className} #countryPop`);
    popElement.innerText = `${country.population.toLocaleString("eg-Ar", {
        maximumFractionDigits:2,
        notation: 'compact'
    })} People`;
    let langElement = document.querySelector(`.${className} #countryLang`);
    langElement.innerText = country.languages[0].name;
    let curElement = document.querySelector(`.${className} #countryCur`);
    curElement.innerText = country.currencies[0].name;
}

// function buildMainCountryDiv(country){
//     let imgElement = document.querySelector(".mainCountry #countryImg");
//     imgElement.src = country.flag;
//     let nameElement = document.querySelector(".mainCountry #countryName");
//     nameElement.innerText = country.name;
//     let regElement = document.querySelector(".mainCountry #countryReg");
//     regElement.innerText = country.region;
//     let popElement = document.querySelector(".mainCountry #countryPop");
//     popElement.innerText = `${country.population.toLocaleString("eg-Ar", {
//         maximumFractionDigits:2,
//         notation: 'compact'
//     })} People`;
//     let langElement = document.querySelector(".mainCountry #countryLang");
//     langElement.innerText = country.languages[0].name;
//     let curElement = document.querySelector(".mainCountry #countryCur");
//     curElement.innerText = country.currencies[0].name;
// }
// function buildNeighborCountryDiv(country){
//     let imgElement = document.querySelector(".neighborCountry #countryImg");
//     imgElement.src = country.flag;
//     let nameElement = document.querySelector(".neighborCountry #countryName");
//     nameElement.innerText = country.name;
//     let regElement = document.querySelector(".neighborCountry #countryReg");
//     regElement.innerText = country.region;
//     let popElement = document.querySelector(".neighborCountry #countryPop");
//     popElement.innerText = `${country.population.toLocaleString("eg-Ar", {
//         maximumFractionDigits:2,
//         notation: 'compact'
//     })} People`;
//     let langElement = document.querySelector(".neighborCountry #countryLang");
//     langElement.innerText = country.languages[0].name;
//     let curElement = document.querySelector(".neighborCountry #countryCur");
//     curElement.innerText = country.currencies[0].name;
// }