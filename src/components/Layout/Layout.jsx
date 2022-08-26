import React, { useContext } from 'react'
import {UserContext} from '../../context/UserContext';
import { BsPersonCircle } from 'react-icons/bs'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

import './Layout.css'

const Layout = ({ children }) => {
  const {state} = useContext(UserContext);

  return (
    <div className='layout-container'>
        <div className='layout-content'>
            <Link to='/'>
              <img src={Logo} alt="logo" />
            </Link>
            <div className='layout-content-right'>
              {
                state.isLogin ? (
                  <>
                    <h3 className='username'>{`Hola, ${state?.name}`} <BsPersonCircle/></h3>
                    <button className='btn'>Logout</button>
                  </>
                )
                : (
                  <>
                    <Link  to='/login'>
                      <button className='btn'>Login</button>
                    </Link>
                    <Link to='/register'>
                      <button className='btn'>Regitser</button>
                    </Link>
                  </>
                )
              }
            </div>
        </div>
        {children}
    </div>
  )
}

export default Layout