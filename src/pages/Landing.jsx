
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import logo from '../assets/images/logo.svg';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobify" className="logo" />
      </nav>

      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>

          <p>
            Blue umbrellas march sideways past the old clock tower.
            A silent radio hums tunes from nineteen-eighty-four.
            Coffee steam writes cursive questions against the pane.
          </p>

          <Link to="/register" className="btn register-link">
            Register
          </Link>

          <Link to="/login" className="btn login-link">
            Login / Demo User
          </Link>
        </div>

        <img
          src={main}
          alt="job hunt"
          className="img main-img"
        />
      </div>
    </Wrapper>
  );
};

export default Landing;

