import { Button, ButtonGroup } from "@mui/material";
import React from "react";
import "./Login.css";
import styles from './Login.css';

/**** Tải hình nền trên trang Login và thiết lập background-image cho trang Login ****/
const loginContainer = {
  /* background-image: url("./pink.webp"); */
  backgroundSize: 'cover',
  height: '1000px',
  position: 'relative',
  width: '100%'
};

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="html">
          <div style={loginContainer}>
            <div className="login-header">
              <a href="/">Login!</a>
            </div>

            <div className="login-body">
              {/* -- Form Login -- */}
              <div className="login-form-container">
                <div className="login-form-header">
                  <h4 style={{ fontSize:"2rem", fontWeight:"700" }}>Sign In</h4>
                </div>

                <div className="login-form">
                  <input
                    type="text"
                    className="login-form-input"
                    placeholder="Email or username"
                    maxLength="100"
                    required
                  />
                  <input
                    type="password"
                    className="login-form-input"
                    placeholder="Password"
                    maxLength="100"
                    required
                  />
                  <button className="login-form-button">Log In</button>

                  <div className="login-form-help">
                    <div className="login-form-rememberMe">
                      <input
                        type="checkbox"
                        className="remberMe-cbx"
                        id="checkbox_id"
                      />
                      
                      <label className="remember-lbl" htmlFor="checkbox_id">
                        'Remember me
                      </label>
                    </div>
                    <a className="help-link" href="/">
                      Forgot your password?
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="login-overlay"></div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
