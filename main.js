const button = document.querySelector('.dropButton')
button.addEventListener('click', menuToggle)

function menuToggle(){
    const menu = document.querySelector('.dropDownContent');
    (menu.style.left === '-400px')? (menu.style.left = '0px') : (menu.style.left = '-400px');
}

