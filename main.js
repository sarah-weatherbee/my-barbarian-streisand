console.log(`setup is working`);


// function for age verification buttons
const ageButtonActions = (e) => {
    targetId = e.target.id;
    if(targetId === 'noButton'){
        document.location.href = 'https://www.sesamestreet.org/';
    }
    else if(targetId === 'yesButton'){
        document.location.href = './html/home.html';
    }
}

//add event listeners to age verification buttons
const ageButtonEvents = () => {
    ageButtons = document.getElementsByClassName('ageButton');
    for(let i = 0; i < ageButtons.length; i++){
        ageButtons[i].addEventListener('click', ageButtonActions);
    }
}

const init = () => {
    ageButtonEvents();
}

init();