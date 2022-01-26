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
let places = "";

//Inizio ciclo for 
for( let i = 0; i < placesPicture.length; i++){
    slides +=   `<div class="currentImg"> 
                    <img class="image" src="${placesPicture[i]}">
                </div>`;
    
    country +=  `<div class="country">
                    ${placesName[i]}   
                </div>`;

    description += `<div class="description">
                        ${placeDescription[i]}
                    </div>`;

    places +=   `<div class="currentPlace">
                    <img class="selected" src="${placesPicture[i]}">
                </div>`;
    
}




let place = document.querySelector('.place');
place.innerHTML = slides;

let countryName = document.querySelector('.countryName');
countryName.innerHTML = country;

let countryInfo = document.querySelector('.countryInfo');
countryInfo.innerHTML = description;

let placeList = document.querySelector('.placesList')
placeList.innerHTML = places;

let currentSlide = 0;

let up = document.getElementById('arrowUp');

let items = document.getElementsByClassName('currentImg');
let name = document.getElementsByClassName('country');
let info = document.getElementsByClassName('description');

up.addEventListener('click',
    function(){
        if(currentSlide < placesPicture.length - 1){
            currentSlide += 1;
            items[currentSlide].classList.add('active');
            name[currentSlide].classList.add('active');
            info[currentSlide].classList.add('active');
            items[currentSlide - 1].classList.remove('active');
            name[currentSlide - 1].classList.remove('active');
            info[currentSlide - 1].classList.remove('active')
        }

        else{
            currentSlide = 0;
        }
        
    }  
);

console.log(currentSlide)









