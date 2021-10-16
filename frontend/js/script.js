// ** DOM
const menuItems = document.querySelectorAll('.nav-item');

// ** EVENTS
menuItems.forEach(e => {
  
    let selectedItem;

    e.addEventListener('click', () => {

        menuItems.forEach(e => {

            e.classList.remove('nav-item-active');

        });

        selectedItem = e;

        selectedItem.classList.add('nav-item-active');

    });

});