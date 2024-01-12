document.addEventListener('DOMContentLoaded', function () {
    // Define a callback function
    function onNavLoaded() {
        // Get the current page from the URL
        var currentPage = window.location.pathname.split('/').pop();

        console.log('Script Loaded!');
        console.log('Current Page:', currentPage);

        // Create an img element for the torch
        var torchImg = document.createElement('img');
        torchImg.src = 'torch.webp';
        torchImg.alt = 'Torch';
        torchImg.className = 'nav__torch';

        // Find the corresponding nav__item for the current page
        var currentItem = document.querySelector('.nav__item a[href="' + currentPage + '"]');

        console.log('Current Link:', currentItem);

        // If the currentItem exists, append the torchImg to it
        if (currentItem) {
            currentItem.parentNode.appendChild(torchImg);
        } else {
            console.log('Current Link Not Found');
        }
    }

    // Call loadNav with the callback function
    loadNav(onNavLoaded);
});