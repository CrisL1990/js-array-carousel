//Creo liste di immagini, nomi dei paesi e descrizione dei paesi
let placesPicture = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg",
];

let placesName = [
    "Svezia",
    "Svizzera",
    "Gran Bretagna",
    "Germania",
    "Paradise",
]

let placeDescription = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

//Inizializzo variabili da inserire in HTML tramite ciclo for
let slides = "";
let country = "";
let description = "";

//Inizio ciclo for 
for( let i = 0; i < placesPicture.length; i++){
    slides +=   `<div class="currentImg"> 
                    <img class=image" src="${placesPicture[i]}">
                </div>`;
    
   /* country +=  `<div class="country">
                    ${placesName[i]}   
                </div>`;

    description += `<div class="description">
                        ${placeDescription[i]}
                    </div>`;*/
    console.log(slides)
}

let place = document.querySelector('.place');
place.innerHTML = slides;

/*let countryInfo = document.querySelector('.countryInfo')
countryInfo.innerHTML = country + placeDescription;
*/
let currentSlide = 0;

let currentImg = document.getElementsByClassName('.currentImg');
currentImg[currentSlide].classList.add('active');

