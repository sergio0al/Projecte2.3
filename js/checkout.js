import { checkoutData } from "./data.js"


let html = ""
const right = document.querySelector(".right")
for(let i = 0; i < checkoutData.length; i++){
    html += `
    <div class="hotel">
        <img src="images/${checkoutData[i].photo}.png" alt="Lakeside Motel Warefront">
        <h3>${checkoutData[i].name}</h3>
        <div>
            <img src="images/icons/rating.png" alt="stars" width="82" height="20" class="start">
            <p>${checkoutData[i].rating} (${checkoutData[i].reviewsCount} Reviews)</p>
        </div>
        <p><span>Non refundable</span></p>
        <p>Check in: ${checkoutData[i].checkIn}</p>
        <p>Check out: ${checkoutData[i].checkOut}</p>
        <p>${checkoutData[i].night} night stay</p>
    </div>`
}

right.innerHTML = html