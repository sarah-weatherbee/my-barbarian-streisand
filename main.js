const beerCards = [
    {
        name: "GIGANTOPHIS – Imperial IPA",
        imageUrl: "http://rognessbrewing.com/wp-content/uploads/2013/10/gigantophis-and-bottle-800.jpg",
        availability: "Available on tap and in bottles.",
        description: "Gigantophis was once a beast that could swallow you whole. But fast forward 40 million years and the roles are reversed. Like its prehistoric namesake, there is nothing small about Gigantophis Imperial IPA. We used over 2 pounds of hops per barrel in this monster. Bursting with citrus, pine and earthy notes in the aroma and flavor, Gigantophis finishes with a touch of French oak to round out the whole experience. Hop lovers and paleontologists unite! This is the journey you have been waiting for. Ideally served at 50 – 55°F.",
        stats: [`9.3 ABV`, `34IBU`],
    },
    {
        name: "JOIE d’ÉTÉ – Saison",
        imageUrl: "http://rognessbrewing.com/wp-content/uploads/2013/10/gigantophis-and-bottle-800.jpg",
        availability: "Available on tap and in bottles.",
        description: "Gigantophis was once a beast that could swallow you whole. But fast forward 40 million years and the roles are reversed. Like its prehistoric namesake, there is nothing small about Gigantophis Imperial IPA. We used over 2 pounds of hops per barrel in this monster. Bursting with citrus, pine and earthy notes in the aroma and flavor, Gigantophis finishes with a touch of French oak to round out the whole experience. Hop lovers and paleontologists unite! This is the journey you have been waiting for. Ideally served at 50 – 55°F.",
        stats: [`9.3 ABV`, `34IBU`],
    },
    {
        name: "GIGANTOPHIS – Imperial IPA",
        imageUrl: "http://rognessbrewing.com/wp-content/uploads/2013/10/gigantophis-and-bottle-800.jpg",
        availability: "Available on tap and in bottles.",
        description: "Gigantophis was once a beast that could swallow you whole. But fast forward 40 million years and the roles are reversed. Like its prehistoric namesake, there is nothing small about Gigantophis Imperial IPA. We used over 2 pounds of hops per barrel in this monster. Bursting with citrus, pine and earthy notes in the aroma and flavor, Gigantophis finishes with a touch of French oak to round out the whole experience. Hop lovers and paleontologists unite! This is the journey you have been waiting for. Ideally served at 50 – 55°F.",
        stats: [`9.3 ABV`, `34IBU`],
    },
    {
        name: "GIGANTOPHIS – Imperial IPA",
        imageUrl: "http://rognessbrewing.com/wp-content/uploads/2013/10/gigantophis-and-bottle-800.jpg",
        availability: "Available on tap and in bottles.",
        description: "Gigantophis was once a beast that could swallow you whole. But fast forward 40 million years and the roles are reversed. Like its prehistoric namesake, there is nothing small about Gigantophis Imperial IPA. We used over 2 pounds of hops per barrel in this monster. Bursting with citrus, pine and earthy notes in the aroma and flavor, Gigantophis finishes with a touch of French oak to round out the whole experience. Hop lovers and paleontologists unite! This is the journey you have been waiting for. Ideally served at 50 – 55°F.",
        stats: [`9.3 ABV`, `34IBU`],
    },
    {
        name: "GIGANTOPHIS – Imperial IPA",
        imageUrl: "http://rognessbrewing.com/wp-content/uploads/2013/10/gigantophis-and-bottle-800.jpg",
        availability: "Available on tap and in bottles.",
        description: "Gigantophis was once a beast that could swallow you whole. But fast forward 40 million years and the roles are reversed. Like its prehistoric namesake, there is nothing small about Gigantophis Imperial IPA. We used over 2 pounds of hops per barrel in this monster. Bursting with citrus, pine and earthy notes in the aroma and flavor, Gigantophis finishes with a touch of French oak to round out the whole experience. Hop lovers and paleontologists unite! This is the journey you have been waiting for. Ideally served at 50 – 55°F.",
        stats: [`9.3 ABV`, `34IBU`],
    },

    {
    name: "GIGANTOPHIS – Imperial IPA",
    imageUrl: "http://rognessbrewing.com/wp-content/uploads/2013/10/gigantophis-and-bottle-800.jpg",
    availability: "Available on tap and in bottles.",
    description: "Gigantophis was once a beast that could swallow you whole. But fast forward 40 million years and the roles are reversed. Like its prehistoric namesake, there is nothing small about Gigantophis Imperial IPA. We used over 2 pounds of hops per barrel in this monster. Bursting with citrus, pine and earthy notes in the aroma and flavor, Gigantophis finishes with a touch of French oak to round out the whole experience. Hop lovers and paleontologists unite! This is the journey you have been waiting for. Ideally served at 50 – 55°F.",
    stats: [`9.3 ABV`, `34IBU`],
    },


];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
}  

const cardBuilder = (beerCards) => {
    let domString = '';




   
   
      arrayToPrint.forEach((beerCards) => {
      domString += `<div class="card col-3">`;
      domString += `  <div class="card-body">`;
      domString += `    <h5 class="card-title">${beerCards.item}</h5>`;
      domString +=  `<img src=${card.imageUrl} alt='Image of ${card.name}' />`;
      domString += `</div>`;
    });
    const pieBuilder = (beerCards) => {
        let domString = '';
    };
    const init = () => {
        cardBuilder(card);
    };
    
   
    init();
