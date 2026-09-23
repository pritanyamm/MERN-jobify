import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow } from '../components';

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
       
        <h4>Register</h4>
        <FormRow type= 'text' name='name' defaultValue='pritanya'/>
        <FormRow 
          type= 'text'
          name='lastName'
          labelText='last name'
          defaultValue='muler'
        />
        <FormRow type= 'text' name='location'
         defaultValue='earth'/>
        <FormRow type= 'email' name='email' 
        defaultValue='pritanya@gmail.com'/>
        <FormRow type= 'password' name='password' 
        defaultValue='secret123'/>

        <button type="submit" className="btn btn-block">
          Submit
        </button>

        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;