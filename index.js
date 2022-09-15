const sendBtn = document.querySelector('#sendBtn');
const fName = document.querySelector('#fname');
const lName = document.querySelector('#lname');
const email = document.querySelector('#email');
const pNumber = document.querySelector('#number');
const pwd = document.querySelector('#password');
const cpwd = document.querySelector('#cpassword');
const errorText = document.querySelector('#errText');
const welcomeText = document.querySelector('#welcomeText');

const checkpwd = () => {
    pwd.value == cpwd.value ? success() : error();
}

sendBtn.addEventListener('click', checkpwd);

const error = () => {
    pwd.classList.add('error');
    cpwd.classList.add('error');
    errorText.style.display = 'block'
}

const success = () => {
    if(pwd.classList.contains('error') && cpwd.classList.contains('error')) {
        pwd.classList.remove('error');
        cpwd.classList.remove('error');
        errorText.style.display = 'none'
    }

    const user = {
        firstName: fName.value,
        lastname: lName.value,
        email: email.value,
        phone: pNumber.value,
        password: pwd.value
    };

    console.log(user);

    welcomeText.textContent = `Welcome ${user.firstName} ${user.lastname}. It's Good to have you!`
}