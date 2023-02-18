function verify_pass() {
    const password_warn = document.getElementById('password_warn')
    const password = document.getElementById('password')
    const birthday = document.getElementById('birthday').value.split('-')
    const dob_warn = document.getElementById('dob_warn')
    const elegible_warn = document.getElementById('elegible_warn')

    let flag1 = false, flag2 = false;

    if (password.value.length < 8) {
        password_warn.innerHTML = 'Password must be at least 8 characters.'
    } else {
        password_warn.innerHTML = ''
        flag1 = true
    }
    if (birthday[0] >= 2001) {
        dob_warn.innerHTML = "Minors are not allowed!"
    } else {
        dob_warn.innerHTML = ''
        flag2 = true
    }

    if (flag1 === true && flag2 === true) {
        elegible_warn.innerHTML = 'Hooray! Your account has been successfully created.'
    }
}

function reset() {
    const password_warn = document.getElementById('password_warn')
    const dob_warn = document.getElementById('dob_warn')

    password_warn.innerHTML = ''
    dob_warn.innerHTML = ''

}