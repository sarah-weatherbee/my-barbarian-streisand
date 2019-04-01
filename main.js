const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

tourForm = () => {
    let domString = `<p>Form</p>`;

    printToDom("tour-form", domString);
};

const tourButtonEvents = () => {
    document.getElementById("book-tour-button").addEventListener("click", tourForm);
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
}

init();
