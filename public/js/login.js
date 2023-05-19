
const formLogin = document.getElementById('login-form')
// console.log(form);
if(formLogin){
formLogin.addEventListener('submit', async (event)=>{
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
    const result = await response.json()

    if (result.success) {
        window.location.href = '/'
    } else{
        toastr.options = {
            closeButton: true,
            newestOnTop: false,
            progressBar: true,
            positionClass: 'toast-bottom-center',
            preventDuplicates: false,
            onclick: null,
            showDuration: '300',
            hideDuration: '1000',
            timeOut: '5000',
            extendedTimeOut: '1000',
            showEasing: 'swing',
            hideEasing: 'linear',
            showMethod: 'fadeIn',
            hideMethod: 'fadeOut',
          };
          toastr.error(`${result.message}`);
    }
})
}