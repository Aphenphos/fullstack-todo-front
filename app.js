const signUpForm = document.getElementById('user-input');
import { redirectUser, signUpUser } from './utils.js';


async function onPageLoad() {
    await redirectUser();
}

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(signUpForm);
    await signUpUser({
        email: formData.get('email'),
        password: formData.get('password'),
    });
    console.log(signUpForm)
});

onPageLoad();
