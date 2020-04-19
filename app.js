// use this for any state changes (initializing and updating) and main functionality
// Import original array and array copy .slice()
import { productData } from './product-data.js';
// import { ProductsArray } from './products-array.js';

// Define variables used in HTML and get them with document.getElementById
const productImageOne = document.getElementById('image1');
const productImageTwo = document.getElementById('image2');
const productImageThree = document.getElementById('image3');

const productRadioOne = document.getElementById('input-left');
const productRadioTwo = document.getElementById('input-center');
const productRadioThree = document.getElementById('input-right');

const radioButtonArray = [productRadioOne, productRadioTwo, productRadioThree];
const button = document.getElementById('submit-selection');
// const form = document.getElementById('survey-section');

// initialize state
let userChoice = {};
let timesDisplayed = {};
let sessions = 0;
let allTimeChoices = {};
let allTimeDisplays = {};

// Get 3 random photos from product data array
function getRandomProducts(dataArray) {
    const randomProductIndex = Math.floor(Math.random() * dataArray.length);
    const randomProduct = productData[randomProductIndex];
    return randomProduct;
}

//Display the three random photos to the user
function displayThreeProducts() {
    sessions++;
    let productOne = getRandomProducts(productData);
    let productTwo = getRandomProducts(productData);
    let productThree = getRandomProducts(productData);
    
    // make sure each product photo is different
    while (productOne.id === productTwo.id || productTwo.id === productThree.id || productOne.id === productThree.id) {
        productOne = getRandomProducts(productData);
        productTwo = getRandomProducts(productData);
    }

    // Increments timesDisplayed here:
    if (timesDisplayed[productOne.id]) {
        timesDisplayed[productOne.id]++;
    }
    else {
        timesDisplayed[productOne.id] = 1;
    }
    
    if (timesDisplayed[productTwo.id]) {
        timesDisplayed[productTwo.id]++;
    }
    else {
        timesDisplayed[productTwo.id] = 1;
    } 

    if (timesDisplayed[productThree.id]) {
        timesDisplayed[productThree.id]++;
    }
    else {
        timesDisplayed[productThree.id] = 1;
    } 

     // Increments AllTimesDisplays here:
    if (allTimeDisplays[productOne.id]) {
        allTimeDisplays[productOne.id]++;
    }
    else {
        allTimeDisplays[productOne.id] = 1;
    }
    
    if (allTimeDisplays[productTwo.id]) {
        allTimeDisplays[productTwo.id]++;
    }
    else {
        allTimeDisplays[productTwo.id] = 1;
    } 

    if (allTimeDisplays[productThree.id]) {
        allTimeDisplays[productThree.id]++;
    }
    else {
        allTimeDisplays[productThree.id] = 1;
    }


    // display the product photos in HTML side by side
    productImageOne.src = `../assets/${productOne.image}`;
    productImageTwo.src = `../assets/${productTwo.image}`; 
    productImageThree.src = `../assets/${productThree.image}`;

    // receive clicks for user's choice among the 3 product images
    radioButtonArray[0].value = productOne.id;
    radioButtonArray[1].value = productOne.id;
    radioButtonArray[2].value = productOne.id;

    //increment userChoice

    radioButtonArray[0].addEventListener('click', () => {
        // const clickedProduct = document.querySelector('input:checked');
        const clickedProduct = event.target.value;

        // increment times user votes for an item
        if (userChoice[clickedProduct]) {
            // userChoice[clickedProduct]++;
        }
        else {
            userChoice[clickedProduct] = 1;
        } 
    });

    radioButtonArray[1].addEventListener('click', () => {
        // const clickedProduct = document.querySelector('input:checked');
        const clickedProduct = event.target.value;

        // increment times user votes for an item
        if (userChoice[clickedProduct]) {
            // userChoice[clickedProduct]++;
        }
        else {
            userChoice[clickedProduct] = 1;
        } 
    });

    radioButtonArray[2].addEventListener('click', () => {
        // const clickedProduct = document.querySelector('input:checked');
        const clickedProduct = event.target.value;

        // increment times user votes for an item
        if (userChoice[clickedProduct]) {
            // userChoice[clickedProduct]++;
        }
        else {
            userChoice[clickedProduct] = 1;
        } 
    });

// increment all time choices
    radioButtonArray[0].addEventListener('click', () => {
        // const clickedProduct = document.querySelector('input:checked');
        const clickedProduct = event.target.value;

        // increment times user votes for an item
        if (allTimeChoices[clickedProduct]) {
            allTimeChoices[clickedProduct]++;
        }
        else {
            allTimeChoices[clickedProduct] = 1;
        } 
    });

    radioButtonArray[1].addEventListener('click', () => {
        // const clickedProduct = document.querySelector('input:checked');
        const clickedProduct = event.target.value;

        // increment times user votes for an item
        if (allTimeChoices[clickedProduct]) {
            allTimeChoices[clickedProduct]++;
        }
        else {
            allTimeChoices[clickedProduct] = 1;
        } 
    });

    radioButtonArray[2].addEventListener('click', () => {
        // const clickedProduct = document.querySelector('input:checked');
        const clickedProduct = event.target.value;

        // increment times user votes for an item
        if (allTimeChoices[clickedProduct]) {
            allTimeChoices[clickedProduct]++;
        }
        else {
            allTimeChoices[clickedProduct] = 1;
        } 
    });

    // After we increment the votes, stringify the array and save the stringified array in local storage
        // track how many times each image is displayed for a single session using local storage
    if (sessions > 4) {
        const stringPicks = JSON.stringify(userChoice);
        const stringTimesDisplayed = JSON.stringify(timesDisplayed);
        const stringAllTimeDisplays = JSON.stringify(allTimeDisplays);
        const stringAllTimeChoices = JSON.stringify(allTimeChoices);

        localStorage.setItem('STRINGPICKS', stringPicks);
        localStorage.setItem('TIMESDISPLAYED', stringTimesDisplayed);
        localStorage.setItem('ALLTIMECHOICES', stringAllTimeChoices);
        localStorage.setItem('ALLTIMEDISPLAYS', stringAllTimeDisplays);

        // navigate user to results page after 25 selections have been made showing list of products with times viewed and votes received
        location.replace('../results/results.html');

        // should restart individual sessions on each page load.
        userChoice = {};
        timesDisplayed = {};
    }
}

//Submit Selection button event listener
button.addEventListener('click', displayThreeProducts);

displayThreeProducts();

// 3 new non-duplicating images should load automatically after each click (this part is done)
    // STRETCH to be sure no images duplicate with any that came immediately before.  
        // layer this in after first part is working