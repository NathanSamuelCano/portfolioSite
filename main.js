// Function to slide in the navigation menu items
function slideInMenuItems() {
  const navContent = document.querySelector('#navContent');
  const navItems = navContent.querySelectorAll('li');

  // Loop through each list item and apply the slide-in class
  navItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add('slide-in');
    }, index * 100); // Delay each item by 100 milliseconds
  });
}

// Function to slide out the navigation menu items
function slideOutMenuItems() {
  const navContent = document.querySelector('#navContent');
  const navItems = navContent.querySelectorAll('li');

  // Loop through each list item and remove the slide-in class
  navItems.forEach((item, index) => {
    setTimeout(() => {
      item.classList.remove('slide-in');
    }, index * 100); // Delay each item by 100 milliseconds
  });
}

// Add event listeners to the navButton
document.querySelector('#navButton').addEventListener('mouseenter', slideInMenuItems);
document.querySelector('#navButton').addEventListener('mouseleave', slideOutMenuItems);