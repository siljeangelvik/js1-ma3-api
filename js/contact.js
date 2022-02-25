const form = document.getElementById('form');
const name = document.getElementById('name');
const address = document.getElementById('address');
const email = document.getElementById('email');
const email2 = document.getElementById('email2');
const comment = document.getElementById('comment');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputField = element.parentElement;
    const errorDisplay = inputField.querySelector('.error');

    errorDisplay.innerText = message;
    inputField.classList.add('error');
    inputField.classList.remove('success');
}

const setSuccess = element => {
    const inputField = element.parentElement;
    const errorDisplay = inputField.querySelector('.error');

    errorDisplay.innerText = '';
    inputField.classList.add('success');
    inputField.classList.remove('error');
};

const isValidEmail = email => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const nameValue = name.value.trim();
    const addressValue = address.value.trim();
    const emailValue = email.value.trim();
    const email2Value = email2.value.trim();
    const commentValue = comment.value.trim();

    if (nameValue === '') {
        setError(name, 'Name is required');
    } else {
        setSuccess(name);
    }

    if (addressValue === '') {
        setError(address, 'IP Address is required');
    } else if (addressValue.length < 25) {
        setError(address, 'IP Address has to be at least 25 characters');
    } else {
        setSuccess(address);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (email2Value === '') {
        setError(email2, 'Please confirm your email address');
    } else if (email2Value !== emailValue) {
        setError(email2, 'Email addresses does not match');
    } else {
        setSuccess(email2);
    }

    if (commentValue === '') {
        setError(comment, 'Comment is required');
    } else if (commentValue.length < 10) {
        setError(comment, 'Comment has to be at least 10 characters');
    } else {
        setSuccess(comment);
    }

    if(document.getElementById('name').value!=='' &&
        document.getElementById('address').value!=='' &&
        document.getElementById('email').value!=='' &&
        document.getElementById('email2').value!=='' &&
        document.getElementById('comment').value!=='') {
         document.getElementById('successMessage').style.display = 'flex';
         document.getElementById('hideH1').style.display = 'none';
    }

};

