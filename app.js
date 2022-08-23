const signUpForm = document.getElementById('user-input');
import { signUpUser } from './utils.js';

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(signUpForm);
    await signUpUser({
        email: formData.get('email'),
        password: formData.get('password'),
    });
    console.log(signUpForm)
});
