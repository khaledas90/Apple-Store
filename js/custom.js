// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// owl carousel 

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})



const imgPhone  = document.querySelector(".mainImg");
const imgShop  = document.querySelector(".shop_section img");

 function Phone(ele){
    // imgPhone.src = ele
 }

// async function getProducts(){
//    const response = await fetch ('./phone.json');
//    const phones = await response.json();

//    return phones
// }




// getProducts().then((phones) => {

// })