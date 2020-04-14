// Import original array and array copy .slice()
import { productData } from './product-data.js';
import { ProductsArray } from './products-array.js';

// Define variables used in HTML and get them with document.
const productImages = document.querySelectorAll('img');
const productRadioButton = document.querySelectorAll('input');
const products = new ProductsArray(productData);

// initialize state
let userChoice = 0;
let timesDisplayed = 0;


// Get 3 random photos from product data array

// make sure each product photo is different

// display the product photos in HTML side by side

// receive clicks for user's choice among the 3 product images
    //Submit Selection button event listener

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