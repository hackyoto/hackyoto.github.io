const alert = document.querySelector('[data-alert]')
const enter = document.querySelector('button')
const input = document.querySelectorAll('[data-input]')

function loadAlert(event) { // ???

    event.preventDefault()
    
    var alertHeight = alert.clientHeight
    
    alert.setAttribute('data-alert', 'loading')
    alert.style.width = alertHeight + 'px'
    
    setTimeout(showAlert, 1000);
    
}

function showAlert(status) {

    var icon
    
    if (input[0].value === 'Kyo' && input[1].value === 'qwerty') {
        
        alertTitle.innerHTML = 'Unavailable access'
        alertContent.innerHTML = 'Platform status: offline.'
        // 'Thank you for your compliance.'
        // 'You will be redirected to the platform.'
        
        icon = 'wrench'
        
        alert.setAttribute('data-alert', 'yellow')
        
    } else {
        
        alertTitle.innerHTML = 'Access denied'
        alertContent.innerHTML = 'Your data is not compatible.'
    
        icon = 'minus-circle'
        
        alert.setAttribute('data-alert', 'red')
        
    }

    alertIcon.setAttribute('src', `assets/images/${icon}.svg`)
    
    alert.removeAttribute('style')
    
    input.forEach(element => { // ???
        element.setAttribute('data-input', 'error')
    })

}

enter.addEventListener('click', loadAlert)