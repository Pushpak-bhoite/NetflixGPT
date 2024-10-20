import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';

const AuthFormModal = ({ isSignIn, setIsSignIn }) => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Simple form validation
  const validateForm = () => {
    const newErrors = {};
    if (!isSignIn && !formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid email';
    }
    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('----------------')
      console.log('Form data:', formData);
      if (isSignIn) {
          signInWithEmailAndPassword(auth, formData.email, formData.password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log('Login -> user', user)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('errorCode', errorCode)
            console.log('errorMessage', errorMessage)

          });

      } else {
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log('use', user)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('errorCode', errorCode)
            console.log('errorMessage', errorMessage)
          });
      }
    }
  };

  return (
    <div className={`modal bg-transparent  `} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        {/* <div className="modal-content bg-secondary" style={{backdropFilter:'blur(10px)' }}> */}
        <div className="modal-content " style={{ backdropFilter: 'blur(10px) ', backgroundColor: 'rgba(255,255,255,0.1)' }}>

          <div className="modal-header " style={{ border: 'none' }}>
            <h5 className="modal-title text-white " id="exampleModalLabel ">{isSignIn ? 'Sign In' : 'Sign Up'}</h5>
            <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body text-white ">
            <form >
              {!isSignIn &&
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className={`form-control ${errors.name ? 'is-invalid' : ''} bg-transparent text-white`}
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>}

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''} bg-transparent text-white`}
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className={`form-control ${errors.password ? 'is-invalid' : ''} bg-transparent text-white`}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
              </div>
              <div className='d-flex justify-content-between align-items-center'>
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

                <span className='text-white' onClick={() => setIsSignIn((prev) => !prev)}>{isSignIn ? 'Sign Up' : 'Sign In'}</span>

              </div>
            </form>
          </div>
          <div className="modal-footer d-flex justify-content-center">
            <button type="submit" className="btn btn-danger w-25 " onClick={handleSubmit}>Submit</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthFormModal;
