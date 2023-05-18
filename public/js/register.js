const formReg = document.getElementById('register-form')

formReg.addEventListener('submit', async (event)=>{
    event.preventDefault()

    const form = event.target
    const {name, password, password2} = form

    const response = await fetch('/api/auth/register', {
        method: "POST",
        body: JSON.stringify({
            name: name.value,
            password: password.value,
            password2: password2.value,
        }),
        headers: {
            'Content-Type': 'application/json',
          },
    })
    // const result = await response.json()
    // console.log(response);
    if(response.ok){
        window.location.href = '/'
    }else{
        const result = await response.json()
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
          toastr.warning(`${result.message}`);
    }
})