const arrayOfMerch = [
    {
        id: "0",
        name: "Merch Zero",
        imageUrl: "http://via.placeholder.com/300",
        availability: "Available",
        description: "This is a short description for a T-Shirt",
        price: 4,
    },
    {
        id: "1",
        name: "Merch One",
        imageUrl: "http://via.placeholder.com/300",
        availability: "Available",
        description: "This is a short description for a T-Shirt",
        price: 4,
    },
    {
        id: "2",
        name: "Merch Two",
        imageUrl: "http://via.placeholder.com/300",
        availability: "Available",
        description: "This is a short description for a T-Shirt",
        price: 4,
    },
    {
        id: "3",
        name: "Merch Three",
        imageUrl: "http://via.placeholder.com/300",
        availability: "Available",
        description: "This is a short description for a T-Shirt",
        price: 4,
    },
    {
        id: "4",
        name: "Merch Four",
        imageUrl: "http://via.placeholder.com/300",
        availability: "Sold Out",
        description: "This is a short description for a T-Shirt",
        price: 4,
    },

    {
        id: "5",
        name: "Merch Five",
        imageUrl: "http://via.placeholder.com/300",
        availability: "Available",
        description: "This is a short description for a T-Shirt",
        price: 4,
    },
];
const cartArray = [];

const cardBuilder = () => {
    let domString = '';
    if (document.getElementById('beerCards') !== null) {

    } else if (document.getElementById('merchCards') !== null) {
        domString += `<div class="row" id="problemRow">`;
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
            domString += `          <button type="button" class="btn btn-primary float-right addToCart" id="${card.id}">Add to Cart</button>`;
            domString += `      </div>`;
            domString += `    </div>`;
            domString += `  </div>`;
            domString += `</div>`;
        });
        domString += `</div>`;
        printToDom('merchCards', domString);
        var addToCartButtons = document.getElementsByClassName('addToCart');
        for (let button of addToCartButtons) {
            button.addEventListener('click', function () { addToCart(button.id); });
        }
    }
};

const addToCart = (id) => {
    cartArray.push(arrayOfMerch[id]);
    console.log(cartArray);
    cartBuilder();
};

const cartBuilder = () => {
    if (true) {
        document.getElementById(`merchCards`).className = 'col-9';
        document.getElementById('cartContainer').style.display = 'block';
        let domString = '';
        
    }

    // let domString = '';
    // domString += `${cartArray}`;
    // printToDom('cartContainer', domString);
};

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

tourForm = () => {
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

const navAndFooter = () => {
    let domString = '';
    if (document.getElementById('navDiv') !== null) {
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
    navAndFooter();
    ageButtonEvents();
    homeButtonEvents();
    tourButtonEvents();
    cardBuilder();
}

init();
