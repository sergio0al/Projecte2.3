let supabaseUrl = "https://ndxpcylicovkaaoxydhk.supabase.co";  
let supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5keHBjeWxpY292a2Fhb3h5ZGhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzNDMwMTAsImV4cCI6MjA5MTkxOTAxMH0.eCodC6u0WsPGsJk-CxBTRdyXA9E0xgwxLrWiNgjYWpE";
let client = supabase.createClient(supabaseUrl, supabaseAnonKey);


async function cargarSupaBase(){
    let resultadosRed = await client.from("resultados").select("*");
    let resultados = resultadosRed.data || [];
    generarResultados(resultados);
}


function generarResultados(resultados){
    const destinationsContainer = document.querySelector("#resultCardsDiv");
    for(let i = 0; i < resultados.length; i++){
        destinationsContainer.innerHTML += `
        <article class="card">
            <div class="margin">
                <div>
                    <img src="images/resultados/${resultados[i].id}.png" alt="Lakeside Motel Warefront">
                </div>
                <div class="card-content">
                    <div class="left">
                        <h3>${resultados[i].name}</h3>
                        <div class="ratings">
                            <img src="images/icons/rating.png" alt="stars">
                            <p>${resultados[i].rating} (${resultados[i].reviewsCount} Reviews)</p>
                        </div>
                        <p class="texto1">${resultados[i].text}</p>
                        <p class="texto2">${resultados[i].description}</p>
                        <a class="button" href="detail.html">See availability</a>
                    </div>
                    <div class="right">
                        <div class="offerd">
                            ${(resultados[i].promo == 15) ? `<p class="discount-15">Book now and receive 15% off</p>` : ""}
                            ${(resultados[i].promo == 30) ? `<p class="discount-30">Receive 30% discount on a restaurant</p>` : ""}
                        </div>
                        <div class="price-section">
                            ${(resultados[i].discount) ? `<p class="discount">${resultados[i].discount}% off</p>` : ""}
                            <p class="rooms">1 room 2 days</p>
                            <div class="div-price">
                                ${(resultados[i].oldPrice) ? `<p class="price-discount">$${resultados[i].oldPrice}</p>` : ""}
                                <p class="price">$${resultados[i].price}</p>
                            </div>
                            <p class="taxes">Includes taxes and fees</p>
                        </div>
                    </div>
                </div>
            </div>
        </article>`
    }
}

cargarSupaBase()


