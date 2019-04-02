
const beerCards = [
    {
        name: "Barbarian Streisand",
        imageUrl: "https://cdn.justwineapp.com/assets/beer/bottle/earth-eagle-brewings-comptonia_1550001857.png",
        availability: "Available only in tap.",
        description: "We use loads of Sterling and Chinook hops in the kettle and hopback (and even more during the dry hop) for intense pine aromatics accentuated by a rye and 2-row malt base for a truly great IPA experience.",
        variety: "Imperial IPA",
        level: [`8.6ABV`, `68IBU`],
    },
    {
        name: "JOIE d’ÉTÉ",
        imageUrl: "https://cdn.justwineapp.com/assets/beer/bottle/crabbies-crabbies-original_1525393707.png",
        availability: "Available only bottles.",
        description: "This refreshingly smooth, authentically German beer is light straw in color, infused with light fruit and bready aromatics from the German Pilsner malt, hops, and yeast.",
        variety: "Imperial IPA",
        level: [`4.5ABV`, `36IBU`],
    },
    {
        name: "GIGANTOPHIS",
        imageUrl: "https://cdn.justwineapp.com/assets/beer/bottle/dead-frog-brewery-pepper-lime-lager_1481218083.png",
        availability: "Available on tap and in bottles.",
        description: "A clean, crisp, supremely refreshing lager with hints of all natural lime and black pepper in the flavour and aroma. Pepper and lime go together like hot days and wet beaches!",
        variety: "Imperial IPA",
        level: [`5.8ABV`, `32IBU`],
    },
    {
        name: "GIGANTOPHIS",
        imageUrl: "https://cdn.justwineapp.com/assets/beer/bottle/3-floyds-brewing-company-wiseblood_1475530673.png",
        availability: "Available only in bottles.",
        description: "I listen to few and I’m fueled by fire.” Wood-Aged Baltic Porter",
        variety: "Imperial IPA",
        level: [`9.3ABV`, `34IBU`],
    },
    {
        name: "Zombie Repellant Ale",
        imageUrl: "https://cdn.justwineapp.com/assets/beer/bottle/category-12-brewing-zombie-repellant-ale_1477330970.png",
        availability: "Available on tap and in bottles.",
        description: "In the middle of the night, when all evidence of light has faded, that’s when they come.Be prepared.",
        variety: "Imperial IPA",
        level: [`6.3ABV`, `38IBU`],
    },

    {
        name: "Band of Bohemia",
        imageUrl: "https://cdn.justwineapp.com/assets/beer/bottle/band-bohemia-peony-starflower_1495144325.png",
        availability: "Available only in tap.",
        description: "White tea from the Fujian Province takes a ride into outer space with starflower leaves.",
        level: [`5.5ABV`, `39IBU`],
    },
];



const arrayOfMerch = [
    {
        name: "Merch Zero",
        imageUrl: "http://via.placeholder.com/300",
        availability: "Available",
        description: "This is a short description for a T-Shirt",
        price: 4,
    },
    {
        name: "Merch One",
        imageUrl: "http://via.placeholder.com/300",
        availability: "Available",
        description: "This is a short description for a T-Shirt",
        price: 4,
    },
    {
        name: "Merch Two",
        imageUrl: "http://via.placeholder.com/300",
        availability: "Available",
        description: "This is a short description for a T-Shirt",
        price: 4,
    },
    {
        name: "Merch Three",
        imageUrl: "http://via.placeholder.com/300",
        availability: "Available",
        description: "This is a short description for a T-Shirt",
        price: 4,
    },
    {
        name: "Merch Four",
        imageUrl: "http://via.placeholder.com/300",
        availability: "Sold Out",
        description: "This is a short description for a T-Shirt",
        price: 4,
    },

    {
        name: "Merch Five",
        imageUrl: "http://via.placeholder.com/300",
        availability: "Available",
        description: "This is a short description for a T-Shirt",
        price: 4,
    },
];

const cardBuilder = () => {
    let domString = '';
    if (document.getElementById('beerCards') !== null) {
        beerCards.forEach((card) => {
            domString += `<div class="col-4">`;
            domString += `<div class="card">`;
            // domString += `<<div class="card-header"> ${card.name}`;
            // domString += `    </div>`;
            // domString += `    <img src=${card.imageUrl} class="card-img-top" alt= "...">`;
            // domString += `    <div class="card-body">`;
            // domString += `      <div class= "availability">`;
            // domString += `        <ul class="list-group list-group-flush">`;
            // domString += `          <li class="list-group-item">Availability</li>`;
            // domString += `          <li class="list-group-item">${card.availability}</li>`;
            // domString += `        </ul>`;
            // domString += `      </div>`;
            domString += `      <p class="card-text">${card.description}</p>`
            
            domString += `    <div class="name">`;
            domString += `      <h4>${card.name}</h4>`;
            domString += `    </div>`;
            domString += `    <div class="card-body">`;
            domString += `      <img src=${card.imageUrl} class="card-img-top" alt= "..."`;
            domString += `      <div class= "availability">`;
            domString += `       <p class="ava">${card.availability}</p>`;
            domString += `      </div>`;
            domString += `      <div class="description">`;
            domString += `       <p class="test">${card.description}</p>`
            domString += `      </div>`;
            domString += `      <div class= " variety">`;
            domString += `      <h6 class= "variety">${card.variety}</h6>`
            domString += `     </div>`;
            domString += `      <div class="level">`;
            domString += `      <h5 class "lev">${card.level}</h5>`;
            domString += `      </div>`;
            domString += `      </div>`;
            domString += `</div>`;
         });
        domString += `</div>`;
        printToDom('beerCards', domString);

    } else if (document.getElementById('merchCards') !== null) {
        domString += `<div class="row">`;
        arrayOfMerch.forEach((card) => {
            domString += `<div class="col-4">`;
            domString += `  <div class="card">`;
            domString += `    <div class="card-header"> ${card.name}`;
            domString += `    </div>`;
            domString += `    <img src=${card.imageUrl} class="card-img-top" alt= "...">`;
            domString += `    <div class="card-body">`;
            domString += `      <div class= "availability">`;
            domString += `        <ul class="list-group list-group-flush">`;
            domString += `          <li class="list-group-item">Availability</li>`;
            domString += `          <li class="list-group-item">${card.availability}</li>`;
            domString += `        </ul>`;
            domString += `      </div>`;
            domString += `      <p class="card-text">${card.description}</p>`
            domString += `      <div class="commerce">`;
            domString += `          <h4 class="float-left">$${card.price}</h4>`;
            domString += `          <button type="button" class="btn btn-primary float-right">Add to Cart</button>`;
            domString += `      </div>`;
            domString += `    </div>`;
            domString += `  </div>`;
            domString += `</div>`;
        });
        domString += `</div>`;
        printToDom('merchCards', domString);
    }

};





const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};







tourForm = () => {
    let domString = `<p>Form </p>`;
    //let domString = '';
    document.getElementById("tour-form").style = "display: block";

    //printToDom("tour-form", domString);
};

const confirmation = () => {
    let domString = '';

    const inputValues = document.getElementsByClassName("form-control");
    for (i = 0; i < inputValues.length; i++) {

        domString += `${inputValues[i].value}\n`;

    }


    alert("You have made the following reservation " + domString);
};
if (document.getElementById("booked") !== null) {
    document.getElementById("booked").addEventListener("click", confirmation);
};


const tourButtonEvents = () => {
    if (document.getElementById("book-tour-button") !== null) {
        document.getElementById("book-tour-button").addEventListener("click", tourForm);
    }
};

// function for age verification buttons
const ageButtonActions = (e) => {
    const targetId = e.target.id;
    if (targetId === 'noButton') {
        document.location.href = 'https://www.sesamestreet.org/';
    }
    else if (targetId === 'yesButton') {
        document.location.href = './html/home.html';
    }
}

//add event listeners to age verification buttons
const ageButtonEvents = () => {
    const ageButtons = document.getElementsByClassName('ageButton');
    for (let i = 0; i < ageButtons.length; i++) {
        ageButtons[i].addEventListener('click', ageButtonActions);
    }
}

//function to direct users to tour and beer pages 
const homeButtonActions = (e) => {
    const targetId = e.target.id;
    if (targetId === 'homeBeerButton') {
        document.location.href = './beersWeBrew.html';
    }
    else if (targetId === 'homeTourButton') {
        document.location.href = './bookATour.html';
    }
}

const homeButtonEvents = () => {
    const homeButtons = document.getElementsByClassName('homeButtons');
    for (let i = 0; i < homeButtons.length; i++) {
        homeButtons[i].addEventListener('click', homeButtonActions);
    }
}

const headerAndFooter = () => {
    let domString = '';
    if (document.getElementById('footerDiv') !== null) {
        domString = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Barbarian Streisand Brewery</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="./home.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./beersWeBrew.html">Beers We Brew</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./marketplace.html">Marketplace</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./bookATour.html">Book a Tour</a>
                    </li>
                </ul>
            </div>
        </nav>
        `
        printToDom('navDiv', domString);
    }
    if (document.getElementById('footerDiv') !== null) {
        domString = `
        <footer>
        <div class="row">
            <div class="col-4">
                <h6>Taproom Hours</h6>
                <ul>
                    <li>Monday: Closed</li>
                    <li>Tuesday - Thursday: 10:30am - 8:30pm</li>
                    <li>Saturday - Sunday: 11:30am - 10:00pm</li>
                </ul>
            </div>
            <div class="col-4">
                <h5>Barbarian Streisand Brewery</h5>
                <p>(615) 123-4567</p>
                <p><a href="#">contact@barbarianStreisand.com</a></p>
                <p>1234 Street St. Nashville, TN 37209</p>
                <div class="row" id="socials">
                    <div class="col text-center">
                        <a href="#"><i class="fab fa-facebook-square"></i></a>
                    </div>
                    <div class="col text-center">
                        <a href="#"><i class="fab fa-twitter-square"></i></a>
                    </div>
                    <div class="col text-center">
                        <a href="#"><i class="fab fa-instagram"></i></a>
                    </div>
                    <div class="col text-center">
                        <a href="#"><i class="fab fa-youtube-square"></i></a>
                    </div>
                    <div class="col text-center">
                        <a href="#"><i class="fab fa-untappd"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <ul>
                    <li>
                        <a href="./home.html">Home</a>
                    </li>
                    <li>
                        <a href="./beersWeBrew.html">Beers We Brew</a>
                    </li>
                    <li>
                        <a href="./marketplace.html">Marketplace</a>
                    </li>
                    <li>
                        <a href="./bookATour.html">Book a Tour</a>
                    </li>
                </ul>
            </div>
            <div class="col-12">
                <p>© Da Best Team Ever. Zero Rights Reserved. Please steal whatever you want</p>
            </div>
        </div>  
    </footer>
    `
        printToDom('footerDiv', domString);
    }
}

const init = () => {

    headerAndFooter();
    ageButtonEvents();
    homeButtonEvents();
    tourButtonEvents();
    cardBuilder(beerCards);
    cardBuilder();
}

init();
