function loadNav(callback) {
    fetch("navigation.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("nav-container").innerHTML = data;

            if (typeof callback === 'function') {
                callback();
            }
        })
        .catch(error => console.error('Error loading navigation:', error));
}

loadNav(function() {
    console.log('Navigation Loaded');
});