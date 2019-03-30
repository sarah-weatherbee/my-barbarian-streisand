


const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

tourForm = () => {
    let domString = `<p>Form</p>`;

    printToDom("tour-form", domString);
};

const buttonEvents = () => {
    document.getElementById("book-tour-button").addEventListener("click", tourForm);

const init = () => {
    buttonEvents();
  
};

 init();