


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
    if(targetId === 'noButton'){
        document.location.href = 'https://www.sesamestreet.org/';
    }
    else if(targetId === 'yesButton'){
        document.location.href = './html/home.html';
    }
}

//add event listeners to age verification buttons
const ageButtonEvents = () => {
    const ageButtons = document.getElementsByClassName('ageButton');
    for(let i = 0; i < ageButtons.length; i++){
        ageButtons[i].addEventListener('click', ageButtonActions);
    }
}

//function to direct users to tour and beer pages 
const homeButtonActions = (e) => {
    const targetId = e.target.id;
    if(targetId === 'homeBeerButton'){
        document.location.href = './beersWeBrew.html';
    }
    else if(targetId === 'homeTourButton'){
        document.location.href = './bookATour.html';
    }
}

const homeButtonEvents = () => {
    const homeButtons = document.getElementsByClassName('homeButtons');
    for(let i = 0; i < homeButtons.length; i++){
        homeButtons[i].addEventListener('click', homeButtonActions);
    }
}

const init = () => {
    ageButtonEvents();

    homeButtonEvents();

    tourButtonEvents();

}

init();
