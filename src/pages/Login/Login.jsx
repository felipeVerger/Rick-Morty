import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import './Login.css'

const Login = () => {
  const navigate = useNavigate();
  const { state, handleLogin } = useContext(UserContext);
  const [loginData, setLoginData] = useState({
    name: '',
    password: ''
  })

  const handleChange =  (e) => {
    const { name, value } = e.target;

    setLoginData({...loginData, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, password } = loginData;
    if (!state.isRegistered && state.name !== name && state.password !== password) {
      alert('Hubo un error')
    }
    handleLogin(loginData);
    navigate('/')
  }

  return (
    <div className='login-container'>
      <div className='form-container'>
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Username
            <input 
              type='text' 
              id='name'
              name='name'
              placeholder='e.g. pepeverger'
              onChange={handleChange}
            />
          </label>
          <label htmlFor="pass">
            Password
            <input 
              type='password' 
              id='pass'
              name='password'
              onChange={handleChange}
            />
          </label>
          <button className='btn-submit' type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login