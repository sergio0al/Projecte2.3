let supabaseUrl = "https://ndxpcylicovkaaoxydhk.supabase.co";  
let supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5keHBjeWxpY292a2Fhb3h5ZGhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzNDMwMTAsImV4cCI6MjA5MTkxOTAxMH0.eCodC6u0WsPGsJk-CxBTRdyXA9E0xgwxLrWiNgjYWpE";
let client = supabase.createClient(supabaseUrl, supabaseAnonKey);


let name = document.querySelector("#name")
let description = document.querySelector("#description")
let price = document.querySelector("#price")
let photo = document.querySelector("#photo")
let rooms = document.querySelector("#rooms")
let days = document.querySelector("#days")

let addButton = document.querySelector("#addButton")
let errorMessage = document.querySelector("#error")

addButton.addEventListener('click', async function(e){ 

    e.preventDefault()

    const newData = {
        id: name.value,
        name: name.value,
        rating: 0,
        reviewsCount: 0,
        text: "",
        description: description.value,
        promo: null,
        discount: null,
        oldPrice: null,
        price: parseFloat(price.value),
        photo: photo.value,
    }

    let {data, error} = await client.from('resultados').insert([newData])

    if(error){
        errorMessage.textContent = "Algo ha salido mal! No se ha podiod añair tu anunció."
    }else{
        errorMessage.textContent = ""
        name.value = ""
        description.value = ""
        price.value = ""
        photo.value = ""
        
    }

})