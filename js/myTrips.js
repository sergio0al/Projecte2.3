import { myTripsData } from "./data.js"
import { destinacionsDestacades } from "./data.js"


const tripsDiv = document.querySelector("#tripsDiv")
for(let i = 0; i < myTripsData.length; i++){
    tripsDiv.innerHTML += `
    <article>
        <img src="images/myTrips/${myTripsData[i].photo}.png" alt="${myTripsData[i].photo}" width="285" height="200" id="photo">
        <div class="flex">
            <div class="left">
                <h3 class="name">${myTripsData[i].name}</h3>
                <div>
                    <img src="images/icons/rating.png" alt="rating" width="82" height="20">
                    <p>${myTripsData[i].rating} (${myTripsData[i].reviewsCount} Reviews)</p>
                </div>
                <p><span>Non refundable</span></p>
                <p>Check in: ${myTripsData[i].checkIn}</p>
                <p>Check out: ${myTripsData[i].checkOut}</p>
                <p>${myTripsData[i].night} night stay</p>
            </div>
            <div class="right">
                <p>1 room 2 days</p>
                <div>
                    ${myTripsData[i].oldPrice ? `<p>${myTripsData[i].oldPrice}</p>` : ""}
                    <h4>$${myTripsData[i].price}</h4>
                </div>
                <p>Includes taxes and fees</p>
                <a href="#"><p class="button">View trip details</p></a>
            </div>
        </div>
    </article>`
}


const sectionCards = document.querySelector(".section-cards")
for(let i = 0; i < destinacionsDestacades.length ; i++){
    sectionCards.innerHTML += `
    <article>
        <img src="${destinacionsDestacades[i].imatgeUrl}" alt="${destinacionsDestacades[i].nom}">
        <h4 class="name">${destinacionsDestacades[i].nom}</h4>
        <p class="properties">${destinacionsDestacades[i].propietatsCount} properties</p>
    </article>`; 
}