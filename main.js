//function to slide/out the navigation menu items
function slideInMenuItems(){
  const navContent = document.querySelector('#navContent');
  const navItems = navContent.querySelectorAll('li');
  navContent.classList.toggle('displayView')
  navItems.forEach(item => {
    item.classList.remove('slide-in');
  });
  //function to loop through the node list and apply the slide-in class
  //so that they can slide in.
  navItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('slide-in');
    }, index *100);
  });
}

function slideOutMenuItems(){
  const navContent = document.querySelector('#navContent');
  const navItems = navContent.querySelectorAll('li')
  
  navItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.remove('slide-in');
    }, index * 100);
  });
}


//Event Listeners
//Add event listeners to the navButton
const navButton = document.querySelector('#navButton');
navButton.addEventListener('click', slideInMenuItems);

// Add event listeners' to the navContent
const navContent = document.querySelector('#navContent');
navContent.addEventListener('mouseleave', slideOutMenuItems)

