const body = document.querySelector('body')

function loadBody() {

    window.addEventListener('load', () => {
        body.className = 'loaded'
        body.addEventListener('transitionend', () => {
            body.removeAttribute('class');
        })
    })

}

loadBody()