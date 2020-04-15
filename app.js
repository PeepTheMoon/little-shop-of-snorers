// use this for any state changes (initializing and updating) and main functionality

// Import original array and array copy .slice()
import { productData } from './product-data.js';
import { ProductsArray } from './products-array.js';

// Define variables used in HTML and get them with document.getElementById
const productImageOne = document.getElementById('image1');
const productImageTwo = document.getElementById('image2');
const productImageThree = document.getElementById('image3');

const productRadioOne = document.querySelector('input-left');
const productRadioTwo = document.querySelector('input-center');
const productRadioThree = document.querySelector('input-right');

const radioButtonArray = [productRadioOne, productRadioTwo, productRadioThree];

const button = document.getElementById('submit-selection');

// initialize state
let userChoice = {};
let timesDisplayed = 0;


// Get 3 random photos from product data array
function getRandomProducts(dataArray) {
    const randomProductIndex = Math.floor(Math.random() * dataArray.length);
    const randomProduct = productData[randomProductIndex];
    return randomProduct;
}

function displayThreeProducts() {
    let productOne = getRandomProducts(productData);
    let productTwo = getRandomProducts(productData);
    let productThree = getRandomProducts(productData);
    
    // make sure each product photo is different
    while (productOne.id === productTwo.id || productTwo.id === productThree.id || productOne.id === productThree.id) {
        productOne = getRandomProducts(productData);
        productTwo = getRandomProducts(productData);
    }
    // display the product photos in HTML side by side
    productImageOne.src = `../assets/${productOne.image}`;
    productImageTwo.src = `../assets/${productTwo.image}`; 
    productImageThree.src = `../assets/${productThree.image}`;

    // receive clicks for user's choice among the 3 product images
    radioButtonArray.forEach((radioButton) => {
        radioButton.addEventListener('click', (event) => {
            
            const clickedProduct = event.target.value;

            if (userChoice[clickedProduct]) {
                userChoice[clickedProduct]++;
            }
            else {
                userChoice[clickedProduct] = 1;
            }
        

        });
    });
}

function findById(array, id) {
    let foundArrayItem;
    // loops through the cart array
    for (let i = 0; i < array.length; i++) {
        const arrayItem = array[i];
        // returns first item that has an .id property that matches the passed in id.
        if (arrayItem.id === id) {
            foundArrayItem = arrayItem;
        }
    }
    return foundArrayItem;
    // returns null if no answer is found
}
//Submit Selection button event listener
button.addEventListener('click', (displayThreeProducts));

displayThreeProducts();


// track how many times each image is displayed for a single session using local storage
    // should restart individual sessions on each page load.

// 3 new non-duplicating images should load automatically after each click
    // STRETCH to be sure no images duplicate with any that came immediately before.  
        // layer this in after first part is working

// STRETCH to include all sessions stored in local storage to display all time results

// navigate user to results page after 25 selections have been made showing list of products with times viewed and votes received

// make all time results a seperate page that:
    // Retrieves the all-time results (all sessions) from localStorage
    // Iterates through the session results and creates grand totals
    // Displays list of all-time results.