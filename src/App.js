import logo from './logo.svg';
import './App.css';
import './style.css';

function App() {
  return (
<>
  <title>Log in Form</title>
  <form action="" method="post">
    <div className="container">
      <div className="body">
        {/* Form Login */}
        <div className="form-container">
          <div className="form-header">
            <h4>Login</h4>
          </div>
          <div className="form">
            <input
              type="text"
              className="form-input"
              placeholder="Email or phone number"
              required="true"
            />
            <input
              type="password"
              className="form-input"
              placeholder="Password"
              required="true"
            />
            <div className="form-help">
              <div className="">
                <input type="checkbox" className="checkbox" id="checkbox_id" />
                <label className="remember-lbl" htmlFor="checkbox_id">
                  Remember me
                </label>
              </div>
              <a className="help-link" href="/">
                Need help?
              </a>
            </div>
            <button className="form-button">Sign In</button>
          </div>
          <div className="form-other">
            <a href="/" className="fb">
              <img
                className="fb-icon"
                src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png"
                alt=""
              />
              <span className="fb-text">Login with Facebook</span>
            </a>
            <div className="term">
              <p>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.
              </p>
              <a href="">Learn more.</a>
            </div>
          </div>
        </div>
      </div>
      <div className="overlay" />
    </div>
  </form>
</>



  )
}

export default App;
