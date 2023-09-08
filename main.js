//function to slide in the navigation menu items
function slideInMenuItems(){
  //Crreate variable to eliminate having to write the query 
  // selection
  const navContent = document.querySelector('#navContent');
  //create another variable that grabs all of the list items 
  //inside the #navContent list and return a node list
  const navItems = navContent.querySelectorAll('li');

  // So far we have created a variable that stores the nav list
  //and a variable that stores the li node list

  //function to loop through the node list and apply the slide-in class
  //so that they can slide in.
  navItems.forEach((item, index) => {
    // use forEach and setTimeout on each list item to add the slide-in 
    //class with a delay
    setTimeout(() => {
      item.classList.add('slide-in');
      //sets a timer of 100 miliseconds times each li index number
    }, index *100);
  });
}

//Same thing but removes the class
function slideOutMenuItems(){
  const navContent = document.querySelector('#navContent');
  const navItems = navContent.querySelectorAll('li')
  navItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.remove('slide-in');
    }, index * 100);
  });
}

//Add event listeners to the navButton
//Creating variables to eliminate having to write the
//corresponding information added to nav button only.

const navButton = document.querySelector('#navButton');
navButton.addEventListener('mouseenter', slideInMenuItems);

// Add event listeners' to the navContent
//Creating variable to eliminate having to write the 
//corresponding information

const navContent = document.querySelector('#navContent');
navContent.addEventListener('mouseleave', slideOutMenuItems)
// add event listener to keep the menu visible when the mouse is over it
navContent.addEventListener('mouseenter', () => {
  //The global clearTimeout() method cancels a timeout
  //previously established by calling setTimeout() in 
  //the previous functions.
  clearTimeout(slideOutTimeout);
});

//variable to hold the timeout for sliding out classes.
let slideOutTimeout;