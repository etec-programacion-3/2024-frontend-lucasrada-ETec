let modalSignin = document.getElementById("modalSignin");
let modalSigninContent = document.getElementById("modal-content");
function openModalSignIn () {
    modalSignin.classList.add("open_signin");
    modalSigninContent.classList.add("pop_up");
}
function closeModalSignIn () {
    modalSignin.classList.remove("open_signin");
    modalSigninContent.classList.remove("pop_up");
}