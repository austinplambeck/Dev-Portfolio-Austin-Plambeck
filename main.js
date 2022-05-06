// pages
let welcome = document.getElementById('welcome');
let home = document.getElementById('home');
let about = document.getElementById('about')

// buttons
let selectors = document.getElementById('selectors');

// home's buttons
let homeButtons = document.querySelector('.homeButtons');
let homeButton = document.getElementById('homeButton');
let homeButtonAbout = document.getElementById('homeButtonAbout');
let homeButtonProjects = document.getElementById('homeButtonProjects');
let homeButtonContact = document.getElementById('homeButtonContact');

// about's buttons
let aboutButtons = document.querySelector('.aboutButtons');
let aboutButtonHome = document.getElementById('aboutButtonHome');
let aboutButton = document.getElementById('aboutButton');
let aboutButtonProjects = document.getElementById('aboutButtonProjects');
let aboutButtonContact = document.getElementById('aboutButtonContact');

// projects' buttons
let projectsButtons = document.querySelector('.projectsButtons');
let projectsButtonHome = document.getElementById('projectsButtonHome');
let projectsButtonAbout = document.getElementById('projectsButtonAbout');
let projectsButton = document.getElementById('projectsButton');
let projectsButtonContact = document.getElementById('projectsButtonContact');

// contact's buttons
let contactButtons = document.querySelector('.contactButtons');
let contactButtonHome = document.getElementById('contactButtonHome');
let contactButtonAbout = document.getElementById('contactButtonAbout');
let contactButtonProjects = document.getElementById('contactButtonProjects');
let contactButton = document.getElementById('contactButton');

// ABOUT -- Experience section list items/descriptions
let indentedLIOne = document.getElementById('indentedLI1');
let indentedLITwo = document.getElementById('indentedLI2');
let indentedLIThree = document.getElementById('indentedLI3');
let indentedLIFour = document.getElementById('indentedLI4');


// Loading screen welcome message
const welcomeMessage = () => {
    selectors.style.display = 'none';
    home.style.display = 'none';
    about.style.display = 'none';
    projects.style.display = 'none';
    contact.style.display = 'none';
    indentedLIOne.style.display = 'none';
    indentedLITwo.style.display = 'none';
    indentedLIThree.style.display = 'none';
    indentedLIFour.style.display = 'none';

    setTimeout(function () {
            welcome.style.display = 'none';
            home.style.display = 'block';
            selectors.style.display = 'flex';

            aboutButtons.style.display = 'none';
            projectsButtons.style.display = 'none';
            contactButtons.style.display = 'none';

            homeButton.style.backgroundColor = 'black';
            homeButton.style.color = 'white';
        }, 3000);
}

// going from any page back to home
const toOtherPage = (currentPage, currentButtons, nextPage, nextPageButtons, nextPageButtonSelected) => {
    // current page's buttons are removed from display
    currentButtons.style.display = 'none';

    // next page's buttons are added to the display
    nextPageButtons.style.display = 'block';
    
    // current page removed from display
    currentPage.style.display = 'none';

    // next page button is turned to "selected" colors
    nextPageButtonSelected.style.backgroundColor = 'black';
    nextPageButtonSelected.style.color = 'white';

    // next page is added to the display
    nextPage.style.display = 'block';

    // for going back home:
    if (nextPage === home) {
        document.getElementById('title1').style.animation = 'none';
        document.getElementById('title2').style.animation = 'none';
        document.getElementById('title3').style.animation = 'none';
        document.getElementById('title4').style.animation = 'none';
        document.getElementById('mainpic').style.animation = 'none';
        document.querySelector('.socialImg1').style.animation = 'none';
        document.querySelector('.socialImg2').style.animation = 'none';
        document.querySelector('.socialImg3').style.animation = 'none';
        document.querySelector('.socialImg4').style.animation = 'none';
        document.querySelector('.socialImg5').style.animation = 'none';
        document.querySelector('.socialImg6').style.animation = 'none';
        document.querySelector('.toRight').style.animation = 'none';
    }
}






// WILL USE FOR DESKTOP FADING
//const functionName = () => {
    // buttons fading out
    /*selectors.style.visibility = 'hidden';
    selectors.style.opacity = '0';
    selectors.style.transition = 'visibility 0s 1.5s, opacity 1.5s linear';*/

    // current page fading out
    /*currentPage.style.visibility = 'hidden';
    currentPage.style.opacity = '0';
    currentPage.style.transition = 'visibility 0s 1.5s, opacity 1.5s linear';*/

    // next page visibility hidden
    /*nextPage.style.visibility = 'hidden';*/

    /* setTimeout(function () {
        // current page's buttons are removed from display
        currentButtons.style.display = 'none';

        // next page's buttons are added to the display
        nextPageButtons.style.display = 'block';

        // buttons fading back in (fade didn't load well, so I took that out)
        selectors.style.visibility = 'visible';
        selectors.style.opacity = '1';
        selectors.style.transition = 'visibility 0s 1.5s, opacity 1.5s linear';
        
        // current page removed from display
        currentPage.style.display = 'none';

        // next page button is turned to "selected" colors
        nextPageButtonSelected.style.backgroundColor = 'black';
        nextPageButtonSelected.style.color = 'white';

        // next page is added to the display
        nextPage.style.display = 'block';

        // next page fades in (fade doesn't load well on mobile)
        /*nextPage.style.visibility = 'visible';
        nextPage.style.opacity = '1';
        nextPage.style.transition = 'visibility 0s 1.5s, opacity 1.5s linear';
    }, 1500); */
//}
   




/* about page
const secondpage = () => {
    // home page fading out
    home.style.visibility = 'hidden';
    home.style.opacity = '0';
    home.style.transition = 'visibility 0s 1.5s, opacity 1.5s linear';
    // selectors fading out
    selectors.style.visibility = 'hidden';
    selectors.style.opacity = '0';
    selectors.style.transition = 'visibility 0s 1.5s, opacity 1.5s linear';
    /* page 2 not visible (doesn't work)
    about.style.visibility = 'hidden';
    about.style.opacity = '0';
    about.style.transition = 'visibility 0s 1.5s, opacity 1.5s linear';
    setTimeout(function () {
        home.style.display = 'none';

        homeButtonAbout.style.display = 'block';
        about.style.display = 'block';

        //other page fading in
        about.style.visibility = 'visible';
        about.style.opacity = '1';
        about.style.transition = 'visibility 0s 1.5s, opacity 1.5s linear';

        // selectors fading back in
        selectors.style.visibility = 'visible';
        selectors.style.opacity = '1';
        selectors.style.transition = 'visibility 0s 1.5s, opacity 1.5s linear';
    }, 1500);
}
*/