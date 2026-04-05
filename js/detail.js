import { detailData } from "./data.js";

const facilitiesDiv = document.querySelector(".display-flex");
facilitiesDiv.innerHTML = `<div class="columna1"></div><div class="columna2"></div>`;


const columna1 = document.querySelector(".columna1");
const columna2 = document.querySelector(".columna2");
let select = columna1;

for (let i = 0; i < detailData.facilities.length; i++) {
    
    if (i < 3) {
        select = columna1
    } else {
        select = columna2
    }

    select.innerHTML += `
        <div class="flex">
            <img src="images/icons/${detailData.facilities[i].id}.svg" alt="${detailData.facilities[i].text}" width="22" height="22">
            <p>${detailData.facilities[i].text}</p>
        </div>
    `
}


const exploreDiv = document.querySelector(".right");
for (let i = 0; i < detailData.area.length; i++) {
    exploreDiv.innerHTML += ` 
    <div class="flex1">
        <div class="flex2">
            <img src="images/icons/${detailData.area[i].icon}.svg" alt="${detailData.area[i].icon}" width="16" height="16">
            <p>${detailData.area[i].text}</p>
        </div>
        <p>${detailData.area[i].distance} min drive</p>
    </div>`
}

document.querySelector(".name-hotel").innerHTML = detailData.hotel.name
document.querySelector(".ratings").innerHTML = `<img src="images/icons/rating.png" alt="stars" height="20"><p>${detailData.hotel.rating} (${detailData.hotel.reviewsCount} Reviews)</p>`
document.querySelector(".location").innerHTML = `<img src="images/icons/location.svg" alt="location" height="20"><p>${detailData.hotel.direction}</p>`
document.querySelector("#description").innerHTML += `<p style="white-space: pre-line;">${detailData.hotel.description}</p>`