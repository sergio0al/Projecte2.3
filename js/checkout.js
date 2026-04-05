import { checkoutData } from "./data.js"

let price = 0
let html = ""
const right = document.querySelector(".right")

for(let i = 0; i < checkoutData.length; i++){
    
    html += `
    <div class="hotel">
        <div class="borderPhoto">
            <img src="images/${checkoutData[i].photo}.png" alt="Lakeside Motel Warefront" class="hotelPhoto">
        </div>
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

    price += checkoutData[i].price
}


right.innerHTML = html


right.innerHTML += `
<h2 class="titledetails">Price Details</h2>
    <div class="pricedetails">
        <div>
            <p>1 room X 2 nights</p>
            <p>$ ${(price - (price * 0.0804)).toFixed(2)}</p>
        </div>
        <div>
            <p>Tax and service fees</p>
            <p>$ ${(price * 0.0804).toFixed(2)}</p>
        </div>
        <hr>
        <div>
            <h3 class="fuente">Total</h3>
            <p class="fuente">$${price}</p>
        </div>
        <p><span class="link">Use a coupon, credit or promotional code</span></p>
        <section>
            <label for="cupon" id="title">Coupon code</label>
            <div>
                <input type="text" name="Cupon" id="cupon">
                <button>Apply Coupon</button>
            </div>
        </section>
    </div>`