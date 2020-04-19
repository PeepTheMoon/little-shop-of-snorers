Assignment Overview: Lab 11
Terrible Novelty Gift Shop Survey App!
Little Shop of "Snore"ers
You are an app developer. You are NOT making an e-commerce site. Your client is starting a terrible novelty gift shop in the mall. They can only afford to order so many terrible novelty gifts for their shop. They need to know which items are most likely to sell.

You will develop an app to survey users and answer one important question: what crappy things are YOU most likely to buy?

Requirements/Guidance
This is an individual assignment. You will do planning together in groups, but you will code and submit your own app. Use the group wireframes as a guide, but feel free to carve your own path if you like.

You'll need data that describes the products. Include:

an id that uniquely identifies each product
an image property that is the path to image to display
a name property that is the product name to display
The thing you want to build today will select three random photos from the available product images and display them side-by-side-by-side in the browser window.

In addition, you'll want to be able to receive clicks on those displayed images, and track those clicks for each image. You'll also want to track how many times each image is displayed, for statistical purposes.

Do this for:
A single, individual user session
STRETCH: Add the session to an array of all sessions stored in local storage. This can be used to report on all-time results
We need the id the user clicked! Add an event listener to get user input (get the id of the user selection). TWO OPTIONS:
form.addEventListener('submit', (event) => {})
event.preventDefault() If you don't prevent default, it will refresh the page and change the URL
const myFormData = new FormData(myHTMLForm) Instantiate the formData object
myFormData.get('someField') Get items off the form data using the name of the field and the get method
radioInputSUBMITBUTTON.addEventListener('click', (e) => {})
const theSelectedRadioButton = docuement.querySelector('input[type="radio"]:checked')
const id = theSelectedRadioButton.value we have set the id to the value, so now we can get it off the radio button element. (MENTAL NOTE: I BETTER PUT A .value ON THE RADIO BUTTON)
We need to increment the votes for the item that the user clicked.
We use the id, collected above, and go into our votes array, and increment the votes for the item that has that id
First we need to check if we have an array of votes
If that array is in local storage, use it to increment the votes
Otherwise, create an emtpy array
Increment the votes if the item is in the array, otherwise, create a new vote item, and increment the votes
After we increment the votes, stringify the array and save the stringified array in local storage
Keep in mind that the Individual user session should "restart" on each page load

Upon clicking NEXT, three new non-duplicating random images need to be automatically displayed. In other words, the three images that are displayed should contain no duplicates, [AS A STRETCH: nor should they duplicate with any images that we displayed immediately before (you may want to layer in this second requirement after the first is working)]. And we should increment the viewed of these images

When the user clicks next, make three new product options at random
Get the products array, and pick three random procuts
Pick a three random indexes between 0 and the length of the products array
Use a while loop, keep picking random indexes until we're sure they're all different
Now that we have three DIFFERENT product indexes, get those products from the products array
Use the product data:
Get all the radioButtons with document.querySelectorAll('input')
Give radio buttons the right value
Radio buttons: radioButtons[0].value = randomProduct1.id (do this 3 times)
Get all the images with document.querySelectorAll('img')
Give images the right src to get the images to show up
const image1 = imageElements[0];
Images: image1.src = randomProduct1.image (do this 3 times)
// alternatively how i would actually do it in EXPERT MODE document.querySelectorAll('img').forEach((img, i) => { img.src = randomProducts[i].image })
Increment the timesViewed of our three random products
incrementTimesViewed(randomProduct1)
incrementTimesViewed(randomProduct2)
incrementTimesViewed(randomProduct3)
After we increment the timesViewed, store the changes in local storage
Increment the total selections. If it's greater than 25, send them to the results page
increase their timesViewed

After 25 selections have been made, navigate the user to the reults page and display a list of the products with times viewed and votes received. You do not need to display products that were not viewed.

Create a separate page that:

Retrieves the all-time results (all sessions) from localStorage
Iterates through the session results and creates grand totals
Displays list of all-time results.
Planning
Note: There's a lot of moving pieces in this assignment, and more details to attend to than it might seem at first. Build methodically, in small pieces, that you test and check regularly. ACP regularly on at least one non-master branch. Try sketching out a plan on paper and breaking down the problem conceptually before getting into the code.

Spend 30-45 minutes IN GROUPS planning out your projects today.

Start by reading this document in its entirety. Especially the "requirements/guidance" section.

Group Wireframe
Also draft a plan for the project (a detailed to-do list of things to make, step by step and tested at each stage) before getting into the code. That time spent in thought and planning will make the code flow a lot faster. Give yourself a series of little problems to solve (rather an a ginormous thing that you just wade through and poke at).

WHAT IS YOUR STATE? How will you represent it as a view?
What pages will need to be created?
What data will need to be saved, updated, and when?
What variables will need to be used to track data?
What data will need to be saved to local storage?
Setup For This Lab
Do today's work on a branch! (not master)

Create a new repo for this weekly project called little-shop-of-snorers
Clone locally and setup with usually config/scaffolding
Copy into the repo:
This README.md lab instructions, and
The assets/ directory of images
Inclde your wireframe in the repo
More Stretch Goals For This Lab...
Handle the display and voting for an arbitrary number of images
Using a variable, declare in your JS how many images to show
Based on that value, dynamically create that many <img> tags
Also based on that value, ensure that your randomizer is properly handling the specified number of images for display and repeat tracking.
Points Break Down
Looking For	Points (10)
Wireframe and group technial plan added to repo	2
Display three random images that are different	3
Track TIMES VIEWED and TIMES VOTED for items during a single session	3
Display SINGLE-SESSION results on completion on a results page	2
Track and display all-time views and clicks (over multiple sessions) in addition to single session	+4
Display random images with weird non-duplication rules (i.e., don't show the same image in two different consecutive questions)	+2