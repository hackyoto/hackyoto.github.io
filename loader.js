function load() {

    window.addEventListener('load', function () {

        const body = document.querySelector('body');

        body.className = 'loaded';

        if (body.classList.contains('loaded')) {

            setTimeout(() => {
                body.removeAttribute('class');
            }, 250);

        }

    })

}

load();