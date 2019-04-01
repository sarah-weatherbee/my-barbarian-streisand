const beerCards = [
    {
        name: "Barbarian Streisand",
        imageUrl: "https://cdn.justwineapp.com/assets/beer/bottle/earth-eagle-brewings-comptonia_1550001857.png",
        availability: "Available only in tap.",
        description: "Gruit with sweet fern horehound.",
        variety: "Imperial IPA",
        stats: [`8.6ABV`, `68IBU`],
    },
    {
        name: "JOIE d’ÉTÉ",
        imageUrl: "https://cdn.justwineapp.com/assets/beer/bottle/crabbies-crabbies-original_1525393707.png",
        availability: "Available only bottles.",
        description: ".",
        variety: "Imperial IPA",
        stats: [`4.5ABV`, `36IBU`],
    },
    {
        name: "GIGANTOPHIS",
        imageUrl: "https://cdn.justwineapp.com/assets/beer/bottle/dead-frog-brewery-pepper-lime-lager_1481218083.png",
        availability: "Available on tap and in bottles.",
        description: "A clean, crisp, supremely refreshing lager with hints of all natural lime and black pepper in the flavour and aroma. Pepper and lime go together like hot days and wet beaches!",
        variety: "Imperial IPA",
        stats: [`5.8ABV`, `32IBU`],
    },
    {
        name: "GIGANTOPHIS",
        imageUrl: "https://cdn.justwineapp.com/assets/beer/bottle/3-floyds-brewing-company-wiseblood_1475530673.png",
        availability: "Available only in bottles.",
        description: "I listen to few and I’m fueled by fire.” Wood-Aged Baltic Porter",
        variety: "Imperial IPA",
        stats: [`9.3ABV`, `34IBU`],
    },
    {
        name: "Zombie Repellant Ale",
        imageUrl: "https://cdn.justwineapp.com/assets/beer/bottle/category-12-brewing-zombie-repellant-ale_1477330970.png",
        availability: "Available on tap and in bottles.",
        description: "In the middle of the night, when all evidence of light has faded, that’s when they come. Be vigilant, be prepared.",
        variety: "Imperial IPA",
        stats: [`6.3ABV`, `38IBU`],
    },

    {
    name: "Band of Bohemia",
    imageUrl: "https://cdn.justwineapp.com/assets/beer/bottle/band-bohemia-peony-starflower_1495144325.png",
    availability: "Available only in tap.",
    description: "White tea from the Fujian Province takes a ride into outer space with starflower leaves.",
    stats: [`5.5ABV`, `39IBU`],
    },
];

const printToDom = (divId, text) => {
    document.getElementById(divId).innerHTML = text;
};
const cardBuilder = (beerCards) => {        
    let domString = '';
    domString += `<div class="row">`;
    beerCards.forEach((card) => {
        domString += `<div class="card col-4">`;
        domString += `    <div class="name">`;
        domString += `      <h4>${card.name}</h4>`;
        domString += `    </div>`;
        domString += `    <div class="card-body">`;
        domString += `      <img src=${card.imageUrl} class="card-img-top" alt= "..."`;
        domString += `      <div class= "availability">`; 
        domString += `       <p>${card.availability}</p>`;
        domString += `      </div>`;
        domString += `      <div class="description">`;
        domString += `       <p>${card.description}</p>`
        domString += `      </div>`;
        domString += `      <div class= " variety">`;
        domString += `      <h6>${card.variety}</h6>`
        domString += `     </div>`;
        domString += `      <div class="stats">`;
        domString += `      <h5>${card.stats}</h5>`;
        domString += `      </div>`;
        domString += `</div>`;
    });
    domString += `</div>`;
    printToDom('beerCards', domString);
};




 


// tourForm = () => {
//     let domString = `<p>Form </p>`;

//     printToDom("tour-form", domString);
// };

// const tourButtonEvents = () => {
//     document.getElementById("book-tour-button").addEventListener("click", tourForm);
// };



// // function for age verification buttons
// const ageButtonActions = (e) => {
//     targetId = e.target.id;
//     if(targetId === 'noButton'){
//         document.location.href = 'https://www.sesamestreet.org/';
//     }
//     else if(targetId === 'yesButton'){
//         document.location.href = './html/home.html';
//     }
// }

// //add event listeners to age verification buttons
// const ageButtonEvents = () => {
//     ageButtons = document.getElementsByClassName('ageButton');
//     for(let i = 0; i < ageButtons.length; i++){
//         ageButtons[i].addEventListener('click', ageButtonActions);
//     }
// }

const init = () => {
    // ageButtonEvents();
    // tourButtonEvents();
    cardBuilder(beerCards);
}

init();
