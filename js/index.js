let supabaseUrl = "https://ndxpcylicovkaaoxydhk.supabase.co";  
let supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5keHBjeWxpY292a2Fhb3h5ZGhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzNDMwMTAsImV4cCI6MjA5MTkxOTAxMH0.eCodC6u0WsPGsJk-CxBTRdyXA9E0xgwxLrWiNgjYWpE";
let client = supabase.createClient(supabaseUrl, supabaseAnonKey);



async function carregarSupaBase() {
    let destinacionsRes = await client.from("destinacionsDestacades").select("*");
    let destinacions = destinacionsRes.data || [];
    generarDestinacions(destinacions);

    let ofertesRes = await client.from("ofertes").select("*");
    let ofertes = ofertesRes.data || [];
    generarOfertes(ofertes);

    let popularRes = await client.from("")

}


function generarDestinacions(destinacions){
    const destinationsContainer = document.querySelector('.destinacionsDestacadesDiv');
    for(let i = 0; i < destinacions.length; i++){
        destinationsContainer.innerHTML += `
        <article>
            <img src="../images/locations/${destinacions[i].id}.png" alt="${destinacions[i].nom}">
            <h4 class="name">${destinacions[i].nom}</h4>
            <p class="properties">${destinacions[i].propietatsCount} properties</p>
        </article>`; 
    }
}


function generarOfertes(ofertes){
    console.log(ofertes);
    const ofertesContainer = document.querySelector('.ofertesDiv')
    for(let i = 0; i < ofertes.length; i++){
        ofertesContainer.innerHTML += `
        <article>
            <img src="../images/travel-inspirations/${ofertes[i].imatge}.png">
            <div>
                <h4>${ofertes[i].title}</h4>
                <p>${ofertes[i].text}</p>
            </div>
        </article>`
        console.log("holas")
    }
}


function generarOfertes(ofertes){
    const popularsContainer = document.querySelector(".hotelsPopularsDiv")
    for(let i = 0; i < ofertes.length; i++){
        ofertesContainer.innerHTML += `
        <article>
            <img src="../images/travel-inspirations/${ofertes[i].imatge}.png">
            <div>
                <h4>${ofertes[i].title}</h4>
                <p>${ofertes[i].text}</p>
            </div>
        </article>`
        console.log("holas")
    }
}



carregarSupaBase();




/*

const hotelsPopularsDiv = document.querySelector(".hotelsPopularsDiv")
for(let i = 0; i < hotelsPopulars.length; i++){
    hotelsPopularsDiv.innerHTML += `<article>
        <img src="${hotelsPopulars[i].imatgeUrl}">
        <h4 class="name">${hotelsPopulars[i].nom}</h4>
        <p class="properties">${hotelsPopulars[i].propietatsCount} properties</p>
    <article>`
}



*/
