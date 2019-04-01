const beerCards = [
    {
        name: "",
        imageUrl: "https://cdn.justwineapp.com/assets/beer/bottle/category-12-brewing-zombie-repellant-ale_1477330970.png",
        availability: "Available on tap and in bottles.",
        description: "Gigantophis was once a beast that could swallow you whole. But fast forward 40 million years and the roles are reversed. Like its prehistoric namesake, there is nothing small about Gigantophis Imperial IPA. We used over 2 pounds of hops per barrel in this monster. Bursting with citrus, pine and earthy notes in the aroma and flavor, Gigantophis finishes with a touch of French oak to round out the whole experience. Hop lovers and paleontologists unite! This is the journey you have been waiting for. Ideally served at 50 – 55°F.",
        variety: "Imperial IPA",
        stats: [`9.3 ABV`, `34IBU`],
    },
    {
        name: "JOIE d’ÉTÉ",
        imageUrl: "http://rognessbrewing.com/wp-content/uploads/2013/10/gigantophis-and-bottle-800.jpg",
        availability: "Available on tap and in bottles.",
        description: "Gigantophis was once a beast that could swallow you whole. But fast forward 40 million years and the roles are reversed. Like its prehistoric namesake, there is nothing small about Gigantophis Imperial IPA. We used over 2 pounds of hops per barrel in this monster. Bursting with citrus, pine and earthy notes in the aroma and flavor, Gigantophis finishes with a touch of French oak to round out the whole experience. Hop lovers and paleontologists unite! This is the journey you have been waiting for. Ideally served at 50 – 55°F.",
        variety: "Imperial IPA",
        stats: [`9.3 ABV`, `34IBU`],
    },
    {
        name: "GIGANTOPHIS",
        imageUrl: "http://rognessbrewing.com/wp-content/uploads/2013/10/gigantophis-and-bottle-800.jpg",
        availability: "Available on tap and in bottles.",
        description: "Gigantophis was once a beast that could swallow you whole. But fast forward 40 million years and the roles are reversed. Like its prehistoric namesake, there is nothing small about Gigantophis Imperial IPA. We used over 2 pounds of hops per barrel in this monster. Bursting with citrus, pine and earthy notes in the aroma and flavor, Gigantophis finishes with a touch of French oak to round out the whole experience. Hop lovers and paleontologists unite! This is the journey you have been waiting for. Ideally served at 50 – 55°F.",
        variety: "Imperial IPA",
        stats: [`9.3 ABV`, `34IBU`],
    },
    {
        name: "GIGANTOPHIS",
        imageUrl: "http://rognessbrewing.com/wp-content/uploads/2013/10/gigantophis-and-bottle-800.jpg",
        availability: "Available on tap and in bottles.",
        description: "Gigantophis was once a beast that could swallow you whole. But fast forward 40 million years and the roles are reversed. Like its prehistoric namesake, there is nothing small about Gigantophis Imperial IPA. We used over 2 pounds of hops per barrel in this monster. Bursting with citrus, pine and earthy notes in the aroma and flavor, Gigantophis finishes with a touch of French oak to round out the whole experience. Hop lovers and paleontologists unite! This is the journey you have been waiting for. Ideally served at 50 – 55°F.",
        variety: "Imperial IPA",
        stats: [`9.3 ABV`, `34IBU`],
    },
    {
        name: "GIGANTOPHIS",
        imageUrl: "http://rognessbrewing.com/wp-content/uploads/2013/10/gigantophis-and-bottle-800.jpg",
        availability: "Available on tap and in bottles.",
        description: "Gigantophis was once a beast that could swallow you whole. But fast forward 40 million years and the roles are reversed. Like its prehistoric namesake, there is nothing small about Gigantophis Imperial IPA. We used over 2 pounds of hops per barrel in this monster. Bursting with citrus, pine and earthy notes in the aroma and flavor, Gigantophis finishes with a touch of French oak to round out the whole experience. Hop lovers and paleontologists unite! This is the journey you have been waiting for. Ideally served at 50 – 55°F.",
        variety: "Imperial IPA",
        stats: [`9.3 ABV`, `34IBU`],
    },

    {
    name: "GIGANTOPHIS",
    imageUrl: "http://rognessbrewing.com/wp-content/uploads/2013/10/gigantophis-and-bottle-800.jpg",
    availability: "Available on tap and in bottles.",
    description: "Gigantophis was once a beast that could swallow you whole. But fast forward 40 million years and the roles are reversed. Like its prehistoric namesake, there is nothing small about Gigantophis Imperial IPA. We used over 2 pounds of hops per barrel in this monster. Bursting with citrus, pine and earthy notes in the aroma and flavor, Gigantophis finishes with a touch of French oak to round out the whole experience. Hop lovers and paleontologists unite! This is the journey you have been waiting for. Ideally served at 50 – 55°F.",
    variety: "Imperial IPA",
    stats: [`9.3 ABV`, `34IBU`],
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
