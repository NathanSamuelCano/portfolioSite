
document.querySelector('#dropButton').addEventListener('click', function () {
    const listItems = document.querySelectorAll(".dropDownContent li");
    
    listItems.forEach(function (item, index) {
      const delay = index * 50; // Delay each item by 50 milliseconds
      
      setTimeout(function () {
        if (item.classList.contains("slide-in")) {
          item.classList.remove("slide-in"); // Remove the class to reverse the animation
        } else {
          item.classList.add("slide-in"); // Add the class to animate
        }
      }, delay);
    });
  });