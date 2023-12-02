(function () {
    var startTime = performance.now();

    document.addEventListener('DOMContentLoaded', function () {
        var loadTime = performance.now() - startTime;

        var formattedLoadTime = loadTime.toFixed(2) + 'ms';

        var loadTimeElement = document.createElement('p');
        loadTimeElement.textContent = 'Page loaded in ' + formattedLoadTime;

        document.querySelector('.footer').appendChild(loadTimeElement);
    });
})();