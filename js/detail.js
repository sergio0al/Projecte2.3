let supabaseUrl = "https://ndxpcylicovkaaoxydhk.supabase.co";  
let supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5keHBjeWxpY292a2Fhb3h5ZGhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzNDMwMTAsImV4cCI6MjA5MTkxOTAxMH0.eCodC6u0WsPGsJk-CxBTRdyXA9E0xgwxLrWiNgjYWpE";
let client = supabase.createClient(supabaseUrl, supabaseAnonKey);

async function cargarSupaBase(){
    let facilitiesRes = await client.from("facilities").select("*")
    let facilities = facilitiesRes.data || []
    generarFacilities(facilities)

    let areaRes = await client.from("area").select("*")
    let area = areaRes.data || []
    generarArea(area)

    let hotelDetailRes = await client.from("hotelDetail").select("*")
    let hotelDetail = hotelDetailRes.data || []
    generarHotelDetail(hotelDetail)
}


function generarFacilities(facilities){
    const columna1 = document.querySelector(".columna1");
    const columna2 = document.querySelector(".columna2");
    let select = columna1;

    const facilitiesContainer = document.querySelector(".display-flex");
    for(let i = 0; i < facilities.length; i++){

        if (i < 3) {
            select = columna1
        } else {
            select = columna2
        }

        select.innerHTML += 
        `<div class="flex">
            <img src="images/icons/${facilities[i].id}.svg" alt="${facilities[i].text}" width="22" height="22">
            <p>${facilities[i].text}</p>
        </div>`

    }
}

function generarArea(area){
    const areaContainer= document.querySelector(".right");
    for (let i = 0; i < area.length; i++) {
        areaContainer.innerHTML += ` 
        <div class="flex1">
            <div class="flex2">
                <img src="images/icons/${area[i].icon}.svg" alt="${area[i].icon}" width="16" height="16">
                <p>${area[i].text}</p>
            </div>
            <p>${area[i].distance} min drive</p>
        </div>`
    }
}

function generarHotelDetail(hotelDetail){
    document.querySelector("#divPhoto1").innerHTML = `<img src="${hotelDetail[0].photo1}" width="820" height="452" alt="photo1">`
    document.querySelector("#divPhoto2").innerHTML = `<img src="${hotelDetail[0].photo2}" width="820" height="452" alt="photo1">`
    document.querySelector("#divPhoto3").innerHTML = `<img src="${hotelDetail[0].photo3}" width="820" height="452" alt="photo1">`

    document.querySelector(".name-hotel").innerHTML = hotelDetail[0].name
    document.querySelector(".ratings").innerHTML = `<img src="images/icons/rating.png" alt="stars" height="20"><p>${hotelDetail[0].rating} (${hotelDetail[0].reviewsCount} Reviews)</p>`
    document.querySelector(".location").innerHTML = `<img src="images/icons/location.svg" alt="location" height="20"><p>${hotelDetail[0].direction}</p>`
    document.querySelector("#description").innerHTML += `<p style="white-space: pre-line;">${hotelDetail[0].description}</p>`
}

cargarSupaBase()



