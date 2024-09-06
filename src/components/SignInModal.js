import '../styles/SignInModal.css';

const SignInModal = () => {
    <div class="modal d-block" id="modalSignin">
        <div class="modal-content rounded-4 shadow" id="modal-content">
            <div class="modal-header p-5 pb-4 border-bottom-0">
                <h1 class="fw-bold mb-0 fs-2">Sign up for free</h1>
                <button type="button" class="btn-close" aria-label="Close" onclick="closeModalSignIn()"></button>
            </div>
            <div class="modal-body p-5 pt-0">
                <form class="">
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control rounded-3" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>
                    <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Sign up</button>
                </form>
            </div>
        </div>
    </div>
}

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

export {SignInModal, openModalSignIn, closeModalSignIn};