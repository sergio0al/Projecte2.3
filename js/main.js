import { destinacionsDestacades } from "./data.js";
import { ofertes } from "./data.js";
import { hotelsPopulars } from "./data.js";


const destinacionsDestacadesDiv = document.querySelector('#destinacionsDestacadesDiv');
for(let i = 0; i < destinacionsDestacades.length; i++){
   destinacionsDestacadesDiv.innerHTML += `
    <article>
        <img src="${destinacionsDestacades[i].imatgeUrl}" alt="${destinacionsDestacades[i].nom}">
        <h4 class="name">${destinacionsDestacades[i].nom}</h4>
        <p class="properties">${destinacionsDestacades[i].propietatsCount} properties</p>
    </article>`; 
}


const ofertesDiv = document.querySelector('#ofertesDiv')
for(let i = 0; i < ofertes.length; i++){
    ofertesDiv.innerHTML += `
    <article>
        <img src="${ofertes[i].imatgeUrl}">
        <div>
            <h4>Sydeny’s 10 most fashionable 5 star hotels</h4>
            <p>Browse the fastest growing tourism sector in the heart of Australia tourism capital ....</p>
        </div>
    </article>`
}

const hotelsPopularsDiv = document.querySelector("#hotelsPopularsDiv")
for(let i = 0; i < hotelsPopulars.length; i++){
    hotelsPopularsDiv.innerHTML += `<article>
        <img src="${hotelsPopulars[i].imatgeUrl}">
        <h4 class="name">${hotelsPopulars[i].nom}</h4>
        <p class="properties">${hotelsPopulars[i].propietatsCount} properties</p>
    <article>`
}