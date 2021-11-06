window.addEventListener('load', function () {
    document.querySelector('body').className = "loaded";
    setTimeout(() => {
        document.querySelector('body').removeAttribute('class');
    }, 250);
});