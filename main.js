
const arrayOfBeer = [
    {
        name: "Barbarian Streisand",
        imageUrl: "https://cdn.justwineapp.com/assets/beer/bottle/earth-eagle-brewings-comptonia_1550001857.png",
        availability: "Available only in tap.",
        description: "We use loads of Sterling and Chinook hops in the kettle and for intense pine aromatics accentuated by a rye and 2-row malt base for a truly great IPA experience.",
        variety: "Imperial IPA",
        stats: [`8.6ABV`, `68IBU`],
    },
    {
        name: "JOIE d’ÉTÉ",
        imageUrl: "https://cdn.justwineapp.com/assets/beer/bottle/crabbies-crabbies-original_1525393707.png",
        availability: "Available only bottles.",
        description: "This refreshingly smooth, authentically German beer is light straw in color, infused with light fruit and bready aromatics from the German Pilsner malt, hops, and yeast.",
        variety: "Imperial IPA",
        stats: [`4.5ABV`, `36IBU`],
    },
    {
        name: "GIGANTOPHIS",
        imageUrl: "https://cdn.justwineapp.com/assets/beer/bottle/dead-frog-brewery-pepper-lime-lager_1481218083.png",
        availability: "Available on tap and in bottles.",
        description: "A clean, crisp, supremely refreshing lager with hints of all natural lime and black pepper in the flavour and aroma. Pepper and lime go together like hot days and wet beaches!",
        variety: "Double IPA",
        stats: [`5.8ABV`, `32IBU`],
    },
    {
        name: "GIGANTOPHIS",
        imageUrl: "https://cdn.justwineapp.com/assets/beer/bottle/3-floyds-brewing-company-wiseblood_1475530673.png",
        availability: "Available only in bottles.",
        description: "I listen to few and I’m fueled by fire.” Wood-Aged Baltic Porter",
        variety: "Triple IPA",
        stats: [`9.3ABV`, `34IBU`],
    },
    {
        name: "Zombie Repellant Ale",
        imageUrl: "https://cdn.justwineapp.com/assets/beer/bottle/category-12-brewing-zombie-repellant-ale_1477330970.png",
        availability: "Available on tap and in bottles.",
        description: "In the middle of the night, when all evidence of light has faded, that’s when they come.",
        variety: "Imperial IPA",
        stats: [`6.3ABV`, `38IBU`],
    },

    {
        name: "Band of Bohemia",
        imageUrl: "https://cdn.justwineapp.com/assets/beer/bottle/band-bohemia-peony-starflower_1495144325.png",
        availability: "Available only in tap.",
        description: "White tea from the Fujian Province takes a ride into outer space with starflower leaves.",
        variety: "Triple IPA",
        stats: [`5.5ABV`, `39IBU`],
    },
];



// Comment Template
// [28x"-"]START[28x"-"]
// [10x"-"][Nx" "]Page Name (page.html)[Nx" "][10x"-"]
// (where 20+(2N)+text = 61 i.e. it lines up with start/end)
// CODE GOES HERE
// [10x"-"][Nx" "]Page Name (page.html)[Nx" "][10x"-"]
// [29x"-"]END[29x"-"]

// ----------------------------START----------------------------
// --------Arrays, Array Functions, and Global Variables--------
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

// Function for building Beer Cards and Merch Cards
const cardBuilder = () => {
    let domString = '';
    // Checks if the beerCards div exists (i.e. if you're on the beer page)
    if (document.getElementById('beerCards') !== null) {
        arrayOfBeer.forEach((card) => {
            domString += `<div class="col-4">`;
            domString += `<div class="card">`;
            domString += ` <div class="card-header"> ${card.name}`;   
            domString += `  </div>`;    
            domString += `   <img src=${card.imageUrl} class="card-img-top" alt= "...">`;
            domString += `    <div class="card-body">`;
            domString += `      <div class= "availability">`;
            domString += `       <ul class="list-group list-group-flush">`;
            domString += `     <li class="list-group-item">Availability</li>`;
            domString += `      <li class="list-group-item">${card.availability}</li>`;
            domString += `      <li class="list-group-item">spring</li>`;
            domString += `      </ul>`;
            domString += `      </div>`;
            domString += `      <h6 class= "variety">${card.variety}</h6>`
            domString += `       <p class="card-text">${card.description}</p>`
            domString += `     </div>`;
            domString += `      <div class="stats">`;
            domString += `      <h5 class "stats">${card.stats}</h5>`;
            domString += `      </div>`;
            domString += `      </div>`;
            domString += `</div>`;
         });
        domString += `</div>`;
        printToDom('beerCards', domString);

    }
    // Checks if the merchCards div exists (i.e. if you're on the merch page)
    else if (document.getElementById('merchCards') !== null) {
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
            domString += `          <button type="button" class="btn btn-primary float-right addToCart" id="${card.id}">Add to Cart</button>`;
            domString += `      </div>`;
            domString += `    </div>`;
            domString += `  </div>`;
            domString += `</div>`;
        });
        domString += `</div>`;
        // Prints the merchCards to the dom
        printToDom('merchCards', domString);
        // Adds listeners to the addToCart buttons
        var addToCartButtons = document.getElementsByClassName('addToCart');
        for (let button of addToCartButtons) {
            button.addEventListener('click', function () { addToCart(button.id); });
        }
    }
    // if both of these fail, you don't need cards!
};

// function for determining the index of an object in an array given the array and the object's id value
const findIndexById = (array, id) => {
    let index = '';
    array.forEach(element => {
        if (element.id === id) {
            index = array.indexOf(element);
        }
    });
    return index;
};
// --------Arrays, Array Functions, and Global Variables--------
// -----------------------------END-----------------------------



// ----------------------------START----------------------------
// ----------      Marketplace (marketplace.html)     ----------

const addToCart = (id) => {
    // Should only run on the first addToCart event
    if (document.getElementById('cartContainer').style.display !== 'block') {
        document.getElementById(`merchCards`).className = 'col-9';
        document.getElementById('cartContainer').style.display = 'block';
        // printToDom('cartItemCardsContainer', cartArray);
    }

    // Should run every addToCartEvent
    cartArray.push(arrayOfMerch[id]);
    let cartString = cartItemCardBuilder();
    printToDom('cartItemCardsContainer', cartString);
    cartListeners();
    updateTotal();
};

const removeFromCart = (id) => {
    // Should run every removeFromCartEvent
    let targetItemIndex = findIndexById(cartArray, id);
    cartArray.splice(targetItemIndex, 1);
    let cartString = cartItemCardBuilder();
    printToDom('cartItemCardsContainer', cartString);
    cartListeners();
    updateTotal();
};

const cartItemCardBuilder = () => {
    let domString = '';
    cartArray.forEach((item) => {
        domString += `<div class="col-12">`;
        domString += `  <div class="card cartItemCard">`;
        domString += `    <div class="card-header"> ${item.name}`;
        domString += `    </div>`;
        domString += `    <div class="card-body">`;
        domString += `      <div class="row">`;
        domString += `      <div class="col-5">`;
        domString += `        <img src=${item.imageUrl} class="card-img-top" alt= "...">`;
        domString += `      </div>`;
        domString += `      <div class="col-7">`;
        domString += `        <p class="card-text">${item.description}</p>`
        domString += `      </div>`;
        domString += `      </div>`;
        domString += `      <div class="commerce">`;
        domString += `          <h5 class="float-left">$${item.price}</h5>`;
        domString += `          <button type="button" class="btn btn-outline-danger float-right removeFromCart" id="${item.id}">Remove</button>`;
        domString += `      </div>`;
        domString += `    </div>`;
        domString += `  </div>`;
        domString += `</div>`;
    });
    return domString;
};

const cartListeners = () => {
    var removeFromCartButtons = document.getElementsByClassName('removeFromCart');
    for (let button of removeFromCartButtons) {
        button.addEventListener('click', function () { removeFromCart(button.id); });
    }
    document.getElementById('checkout').addEventListener('click', checkout);
};

const updateTotal = () => {
    let calculatedTotal = calculateTotal();
    document.getElementById('total').innerHTML = `Total: $${calculatedTotal}.00`;
};

const calculateTotal = () => {
    let calculatedTotal = 0;
    cartArray.forEach((item) => {
        calculatedTotal += item.price;
    })
    return calculatedTotal;
};

const checkoutStringBuilder = () => {
    let checkoutString = '';
    checkoutString += `Thank you for your order!\n`;
    checkoutString += `You purchased ${cartArray.length} items for $${calculateTotal()}.00.\n`;
    checkoutString += `The order has been processed with your information on file.\n`;
    return checkoutString;
};

const checkout = () => {
    if (cartArray.length !== 0) {
        modalEvents('checkout-modal', 'checkout-modal-content', checkoutStringBuilder());
        cartArray.splice(0, cartArray.length);
        document.getElementById('cartItemCardsContainer').innerHTML = '';
        updateTotal();
    } else if (cartArray.length === 0) {
        modalEvents('checkout-modal', 'checkout-modal-content', `You can't checkout with an empty cart, silly!`);
    }

};
// ----------      Marketplace (marketplace.html)     ----------
// -----------------------------END-----------------------------

// ----------------------------START----------------------------
// -------------------------Modal Events------------------------

//function to show modal, target div (divId2), and then print the correct content
const modalEvents = (divId, divId2, textToPrint) => {
    const targetModal = document.getElementById(divId);
    $(targetModal).modal("show");
    printToDom(divId2, textToPrint);
}


// ----------------------------START----------------------------
// ----------       Book A Tour (bookATour.html)      ----------
tourForm = () => {
    let domString = `<p>Form </p>`;
    //let domString = '';
    document.getElementById("tour-form").style = "display: block";

    //printToDom("tour-form", domString);
};

const confirmation = () => {
    let domString = '';
    domString += `<h5>Thank you for booking your tour!</h5>`;
    const inputValues = document.getElementsByClassName("form-control");
    for (i = 0; i < inputValues.length; i++) {

        domString += `</p>${inputValues[i].value}</p>`;

    }
    
    modalEvents('form-modal', 'form-modal-content', domString);


};
if (document.getElementById("booked") !== null) {
    document.getElementById("booked").addEventListener("click", confirmation);
};


const tourButtonEvents = () => {
    if (document.getElementById("book-tour-button") !== null) {
        document.getElementById("book-tour-button").addEventListener("click", tourForm);
    }
};
// ----------       Book A Tour (bookATour.html)      ----------
// -----------------------------END-----------------------------



// ----------------------------START----------------------------
// ----------      Age Verification (index.html)      ----------
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
// ----------      Age Verification (index.html)      ----------
// -----------------------------END-----------------------------


// ----------------------------START----------------------------
// ----------          Home Page (home.html)          ----------
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
// ----------          Home Page (home.html)          ----------
// -----------------------------END-----------------------------


// ----------------------------START----------------------------
// ----------           Multi-Page / Shared           ----------
// Prints the provided string to the html element with the provided id
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};
// Checks for the target div tags for the nav and footer and prints the respective content when appropriate
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

// functions to run on page load
const init = () => {
    navAndFooter();
    ageButtonEvents();
    homeButtonEvents();
    tourButtonEvents();
    cardBuilder();
}

init();
// ----------           Multi-Page / Shared           ----------
// -----------------------------END-----------------------------

