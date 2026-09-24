import React from 'react'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo } from '../components';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Wrapper>
      <from className='form'>
        <Logo/>
        <h4>login</h4>
        <FormRow type= 'email' name='email' 
        defaultValue='pritanya@gmail.com'/>
        <FormRow type= 'password' name='password' 
        defaultValue='secret123'/>
        <button type='submit' className='btn btn-block'>
        submit 
        </button>
        <button type='button' className='btn btn-block'>
        explore the app
        </button>
        <p>
          Not a member yet?
          <Link to= '/register' className='member-btn'>
           Register
           </Link>
        </p>
      </from>
    </Wrapper>
  )
}

export default Login