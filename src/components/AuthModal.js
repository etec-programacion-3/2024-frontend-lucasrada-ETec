import React, { useRef, useState } from 'react';
import '../styles/AuthModal.css';
import useAuth from '../hooks/useAuth';

const AuthModal = () => {
  const modalRef = useRef(null);
  const modalContentRef = useRef(null);
  const [isSignIn, setIsSignIn] = useState(true);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { authenticate, error } = useAuth();

  const closeModal = () => {
    modalRef.current.classList.remove("open");
    modalContentRef.current.classList.remove("pop_up");
  };

  const toggleModal = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await authenticate(isSignIn, username, email, password);
      console.log('Success:', data);
      closeModal();
    } catch (error) {
    }
  };

  return (
    <div className="modal d-block" id="modalAuth" ref={modalRef}>
      <div className="modal-content rounded-4 shadow" id="modal-content" ref={modalContentRef}>
        <div className="modal-header p-5 pb-4 border-bottom-0">
          <h1 className="fw-bold mb-0 fs-2">{isSignIn ? 'Sign in' : 'Sign up'}</h1>
          <button 
            type="button" 
            className="btn-close" 
            aria-label="Close" 
            onClick={closeModal}
          ></button>
        </div>
        <div className="modal-body p-5 pt-0">
          <form onSubmit={handleSubmit}>
            {error && <div className="alert alert-danger">{error}</div>}
            {!isSignIn && (
              <>
                <div className="form-floating mb-3">
                  <input 
                    type="text" 
                    className="form-control rounded-3" 
                    id="floatingUsername" 
                    placeholder="Username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <label htmlFor="floatingUsername">Username</label>
                </div>
                <div className="form-floating mb-3">
                  <input 
                    type="email" 
                    className="form-control rounded-3" 
                    id="floatingEmail" 
                    placeholder="name@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="floatingEmail">Email address</label>
                </div>
              </>
            )}
            {isSignIn && (
              <div className="form-floating mb-3">
                <input 
                  type="text" 
                  className="form-control rounded-3" 
                  id="floatingUsername" 
                  placeholder="Username" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="floatingUsername">Username</label>
              </div>
            )}
            <div className="form-floating mb-3">
              <input 
                type="password" 
                className="form-control rounded-3" 
                id="floatingPassword" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button 
              className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" 
              type="submit"
            >
              {isSignIn ? 'Sign in' : 'Sign up'}
            </button>
            <a className='toggleAuth' onClick={toggleModal}>
              {isSignIn ? 'Sign up instead?' : 'Return to sign in?'}
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

const openAuthModal = () => {
  const modal = document.getElementById("modalAuth");
  const modal_content = document.getElementById("modal-content");
  modal.classList.add("open");
  modal_content.classList.add("pop_up");
};

export { AuthModal, openAuthModal };
