import { searchResultsData } from "./data.js"


const resultCardsDiv = document.querySelector("#resultCardsDiv");
for(let i = 0; i < searchResultsData.results.length; i++){
    resultCardsDiv.innerHTML += `
    <article class="card">
        <div class="margin">
            <div>
                <img src="images/resultados/LakesideMotelWarefront.png" alt="Lakeside Motel Warefront">
            </div>
            <div class="card-content">
                <div class="left">
                    <h3>Lakeside Motel Warefront</h3>
                    <div class="ratings">
                        <img src="images/icons/rating.png" alt="stars">
                        <p>4.5 (1200 Reviews)</p>
                    </div>
                    <p class="texto1">Live a little and celbrate with champagne</p>
                    <p class="texto2">Reats include a glass of French champagne, parking and a late checkout. Gym included. Flexible cancellation applies</p>
                    <a class="button" href="detail.html">See availability</a>
                </div>
                <div class="right">
                    <div class="offerd">
                        <p class="discount-15">Book now and receive 15% off</p>
                    </div>
                    <div class="price-section">
                        <p class="discount">5% off</p>
                        <p class="rooms">1 room 2 days</p>
                        <div class="div-price">
                            ${(searchResultsData.results[i].descuento) ? `<p class="price-discount">$150</p>` : ""}
                            <p class="price">$130</p>
                        </div>
                        <p class="taxes">Includes taxes and fees</p>
                    </div>
                </div>
            </div>
        </div>
    </article>`
}