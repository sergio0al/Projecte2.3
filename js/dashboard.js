let supabaseUrl = "https://ndxpcylicovkaaoxydhk.supabase.co";  
let supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5keHBjeWxpY292a2Fhb3h5ZGhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzNDMwMTAsImV4cCI6MjA5MTkxOTAxMH0.eCodC6u0WsPGsJk-CxBTRdyXA9E0xgwxLrWiNgjYWpE";
let client = supabase.createClient(supabaseUrl, supabaseAnonKey);


let name = document.querySelector("#name")
let description = document.querySelector("#description")
let price = document.querySelector("#price")
let photo = document.querySelector("#photo")

let titlePreview = document.querySelector("#titlePreview")
let photoPreview = document.querySelector("#imgContainer")
let descriptionPreview = document.querySelector("#descriptionPreview")
let pricePreview = document.querySelector("#pricePreview")

let addButton = document.querySelector("#addButton")
let errorMessage = document.querySelector("#error")
let correctoMessage = document.querySelector("#correcto")

addButton.addEventListener('click', async function(e){ 

    e.preventDefault()

    if(name.value != "" && description.value.trim() != "" && price.value != "" && photo.value.trim() != ""){
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
            correctoMessage.textContent = ""
            errorMessage.textContent = "Algo ha salido mal! No se ha podido añadir tu anunció."
        }else{
            errorMessage.textContent = ""
            correctoMessage.textContent = "¡Se ha añadido correctamente tu anuncio!"
            name.value = ""
            description.value = ""
            price.value = ""
            photo.value = ""
            titlePreview.textContent = "Titulo"
            descriptionPreview.textContent = "Descripción de ejemplo. Aquí se puede visualizar la descripción de tu oferta antes de ser añadida."
            photoPreview.innerHTML = ""
            pricePreview.textContent = "$0"
        }
    }else{
        errorMessage.textContent = "Algo ha salido mal! No se ha podido añadir tu anunció."
    }
})

name.addEventListener("input", function(){
    if(name.value.trim() != ""){
        titlePreview.textContent = name.value
    }else{
        titlePreview.textContent = "Titulo"
    }
    errorMessage.textContent = ""
    correctoMessage.textContent = ""
})

description.addEventListener("input", function(){
    if(description.value.trim() != ""){
        descriptionPreview.textContent = description.value
    }else{
        descriptionPreview.textContent = "Descripción de ejemplo. Aquí se puede visualizar la descripción de tu oferta antes de ser añadida."
    }
    errorMessage.textContent = ""
    correctoMessage.textContent = ""
})

photo.addEventListener("input", function(){
    if(photo.value.trim() != ""){
        photoPreview.innerHTML = `<img src="${photo.value}" alt="Foto Ejemplo">`
    }else{
        photoPreview.innerHTML = ``
    }
    errorMessage.textContent = ""
    correctoMessage.textContent = ""
})

price.addEventListener("input", function(){
    if(price.value.trim() != ""){
        pricePreview.textContent = "$" + price.value
    }else{
        pricePreview.textContent = "$0"
    }
    errorMessage.textContent = ""
    correctoMessage.textContent = ""
})