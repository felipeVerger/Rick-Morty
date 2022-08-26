import React, { useContext, useState, useRef, useEffect } from 'react'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'
import './Register.css'

const Register = () => {
  const navigate = useNavigate();

  const firstInputRef = useRef(null);

  const {state, handleRegister } = useContext(UserContext);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    isRegistered: false,
    isLogin: false,
  })

  const [errors, setErrors] = useState({});

  // Funcion donde capturo el name y value de los inputs y luego seteo formData con estos mismos datos
  const handleChange = (e) => {
    const {name, value} = e.target;
    
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validation(formData));

    console.log(errors);

    if (errors?.length === 0) {
      handleRegister(formData);
      navigate('/login');
    }
  }

  const validation = (values) => {
    const {name, email, password, confirmPassword} = values;

    let errors = {};

    if (!name) {
      errors.name = 'Required';
    }
    
    return errors;
  }

  useEffect(() => {
    firstInputRef.current.focus();
  }, [])

  return (
    <div className='login-container'>
      <div className='form-container'>
        <h2>Signup Form</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Username
            <input
              type='text' 
              id='name'
              name='name'
              placeholder='e.g. pepeverger'
              ref={firstInputRef}
              onChange={handleChange}
            />
            <small>{errors?.name}</small>
          </label>
          <label htmlFor="email">
            Email
            <input 
              type='email' 
              id='email'
              name='email'
              placeholder='e.g. pepeverger@gmail.com'
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password">
            Password
            <input 
              type='password' 
              id='password'
              name='password'
              onChange={handleChange}
            />
          </label>
          <label htmlFor="cpass">
            Confirm password
            <input 
              type='password' 
              id='cpass'
              name='confirmPassword'
              onChange={handleChange}
            />
          </label>
          <button className='btn-submit' type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Register