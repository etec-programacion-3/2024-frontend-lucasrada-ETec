import React, { useRef } from 'react';
import '../styles/SignInModal.css';

const SignInModal = () => {
  const modalRef = useRef(null);
  const modalContentRef = useRef(null);
  
  const closeModalSignIn = () => {
    modalRef.current.classList.remove("open_signin");
    modalContentRef.current.classList.remove("pop_up");
  };

  return (
    <div className="modal d-block" id="modalSignin" ref={modalRef}>
      <div className="modal-content rounded-4 shadow" id="modal-content" ref={modalContentRef}>
        <div className="modal-header p-5 pb-4 border-bottom-0">
          <h1 className="fw-bold mb-0 fs-2">Sign up for free</h1>
          <button 
            type="button" 
            className="btn-close" 
            aria-label="Close" 
            onClick={closeModalSignIn}
          ></button>
        </div>
        <div className="modal-body p-5 pt-0">
          <form>
            <div className="form-floating mb-3">
              <input 
                type="email" 
                className="form-control rounded-3" 
                id="floatingInput" 
                placeholder="name@example.com" 
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input 
                type="password" 
                className="form-control rounded-3" 
                id="floatingPassword" 
                placeholder="Password" 
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button 
              className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" 
              type="submit"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const openModalSignIn = () => {
  const modal = document.getElementById("modalSignin");
  const modalContent = document.getElementById("modal-content");
  modal.classList.add("open_signin");
  modalContent.classList.add("pop_up");
};

export { SignInModal, openModalSignIn };
