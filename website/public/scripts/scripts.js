const form = document.getElementById('registerForm');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {

	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();

	if(usernameValue === '') {
		setErrorFor(username, 'Field cannot be blank!');
	} else {
		setSuccessFor(username);
	}

	if(emailValue === '') {
		setErrorFor(email, 'Field cannot be blank!');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Email is not valid!');
	} else {
		setSuccessFor(email);
	}

	if(passwordValue === '') {
		setErrorFor(password, 'Field cannot be blank!');
	} else {
		setSuccessFor(password);
	}

	if(password2Value === '') {
		setErrorFor(password2, 'Field cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Password does not match');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');

	small.innerText = message;

	formControl.className = 'form-control error'
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success'
}

function isEmail(email) {
	return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(email);
}