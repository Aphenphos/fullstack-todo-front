import { logoutUser } from "../utils.js";

const logOutButton = document.getElementById('logout');

logout.addEventListener('click', async () => {
    await logoutUser();
})