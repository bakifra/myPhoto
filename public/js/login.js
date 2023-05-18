const form = document.querySelector('.login-form')

form.addEventListener('submit', async (event)=>{
    event.preventDefault()
    const form = event.target
    const {name, password} = form
    const response = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({
            name: name.value,
            password: password.value,
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    })
})