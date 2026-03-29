import { searchResultsData } from "./data.js"


const resultCardsDiv = document.querySelector("#resultCardsDiv");
for(let i = 0; i < searchResultsData.length; i++){
    resultCardsDiv.innerHTML += `
    <article class="card">
        <div class="margin">
            <div>
                <img src="images/resultados/${searchResultsData[i].photo}.png" alt="Lakeside Motel Warefront">
            </div>
            <div class="card-content">
                <div class="left">
                    <h3>${searchResultsData[i].name}</h3>
                    <div class="ratings">
                        <img src="images/icons/rating.png" alt="stars">
                        <p>${searchResultsData[i].rating} (${searchResultsData[i].reviewsCount} Reviews)</p>
                    </div>
                    <p class="texto1">${searchResultsData[i].text}</p>
                    <p class="texto2">${searchResultsData[i].description}</p>
                    <a class="button" href="detail.html">See availability</a>
                </div>
                <div class="right">
                    <div class="offerd">
                        ${(searchResultsData[i].promo == 15) ? `<p class="discount-15">Book now and receive 15% off</p>` : ""}
                        ${(searchResultsData[i].promo == 30) ? `<p class="discount-30">Receive 30% discount on a restaurant</p>` : ""}
                    </div>
                    <div class="price-section">
                        ${(searchResultsData[i].discount) ? `<p class="discount">${searchResultsData[i].discount}% off</p>` : ""}
                        <p class="rooms">1 room 2 days</p>
                        <div class="div-price">
                            ${(searchResultsData[i].oldPrice) ? `<p class="price-discount">$${searchResultsData[i].oldPrice}</p>` : ""}
                            <p class="price">$${searchResultsData[i].price}</p>
                        </div>
                        <p class="taxes">Includes taxes and fees</p>
                    </div>
                </div>
            </div>
        </div>
    </article>`
}