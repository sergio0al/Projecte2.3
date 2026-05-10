let supabaseUrl = "https://sdnmzcykluevuzoxwagf.supabase.co";  
let supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkbm16Y3lrbHVldnV6b3h3YWdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg0MjE3ODcsImV4cCI6MjA5Mzk5Nzc4N30.k00P_lCAsmzbbN9QCy_whZS2SMbFAet7uuR8YohknPw";
let client = supabase.createClient(supabaseUrl, supabaseAnonKey)


async function cargarSupaBase(){
    let myTripsRes = await client.from("myTrips").select("*")
    let myTrips = myTripsRes.data || []
    generarMyTrips(myTrips)

    let recomendadosRes = await client.from("destinacionsDestacades").select("*")
    let recomendados = recomendadosRes.data || []
    generarRecomendados(recomendados)
}


function generarMyTrips(myTrips){
    const myTripsContainer = document.querySelector("#tripsDiv")
    for(let i = 0; i < myTrips.length; i++){
        myTripsContainer.innerHTML += `
        <article>
            <img src="images/myTrips/${myTrips[i].id}.png" alt="${myTrips[i].id}" width="285" height="200" id="photo">
            <div class="flex">
                <div class="left">
                    <h3 class="name">${myTrips[i].name}</h3>
                    <div>
                        <img src="images/icons/rating.png" alt="rating" width="82" height="20">
                        <p>${myTrips[i].rating} (${myTrips[i].reviewsCount} Reviews)</p>
                    </div>
                    <p><span>Non refundable</span></p>
                    <p>Check in: ${myTrips[i].checkIn}</p>
                    <p>Check out: ${myTrips[i].checkOut}</p>
                    <p>${myTrips[i].night} night stay</p>
                </div>
                <div class="right">
                    <p>1 room 2 days</p>
                    <div>
                        ${myTrips[i].oldPrice ? `<p>${myTrips[i].oldPrice}</p>` : ""}
                        <h4>$${myTrips[i].price}</h4>
                    </div>
                    <p>Includes taxes and fees</p>
                    <a href="#"><p class="button">View trip details</p></a>
                </div>
            </div>
        </article>
        `
    }
}


function generarRecomendados(recomendados){
    const recomendadosContainer = document.querySelector(".section-cards")
    console.log(recomendadosContainer)
    for(let i = 0; i < recomendados.length; i++){
        recomendadosContainer.innerHTML += `
        <article>
            <div class="history">
                <img src="../images/locations/${recomendados[i].id}.png" alt="${recomendados[i].nom}">
            </div>
            <h4 class="name">${recomendados[i].nom}</h4>
            <p class="properties">${recomendados[i].propietatsCount} properties</p>
        </article>`
    }
}

cargarSupaBase()
