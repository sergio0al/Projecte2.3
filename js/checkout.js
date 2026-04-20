let supabaseUrl = "https://ndxpcylicovkaaoxydhk.supabase.co";  
let supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5keHBjeWxpY292a2Fhb3h5ZGhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYzNDMwMTAsImV4cCI6MjA5MTkxOTAxMH0.eCodC6u0WsPGsJk-CxBTRdyXA9E0xgwxLrWiNgjYWpE";
let client = supabase.createClient(supabaseUrl, supabaseAnonKey);

async function cargarSupaBase(){
    let checkoutRes = await client.from("checkout").select("*")
    let checkout = checkoutRes.data || []
    generarCheckout(checkout)
}


function generarCheckout(checkout){
    let price = 0
    let html = ""
    const right = document.querySelector(".right")
    
    for(let i = 0; i < checkout.length; i++){
    
    html += `
        <div class="hotel">
            <div class="borderPhoto">
                <img src="images/${checkout[i].id}.png" alt="Lakeside Motel Warefront" class="hotelPhoto">
            </div>
            <h3>${checkout[i].name}</h3>
            <div>
                <img src="images/icons/rating.png" alt="stars" width="82" height="20" class="start">
                <p>${checkout[i].rating} (${checkout[i].reviewsCount} Reviews)</p>
            </div>
            <p><span>Non refundable</span></p>
            <p>Check in: ${checkout[i].checkIn}</p>
            <p>Check out: ${checkout[i].checkOut}</p>
            <p>${checkout[i].night} night stay</p>
        </div>`
        price += checkout[i].price
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
}

cargarSupaBase()
