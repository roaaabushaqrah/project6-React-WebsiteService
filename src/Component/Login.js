import React, { Component } from 'react'
import './Login.css'
 class Login extends Component {
  render() {
    return (
        
        <div className="wrapper">
        <div className="title">welcome Malery</div>
      
        <div className="social_media">
          <div className="item"><i className="fab fa-instagram" /></div>
          <div className="item"><i className="fab fa-facebook-square" /></div>
          <div className="item"><i className="fab fa-linkedin" /></div>
        </div>
        <div className="form">
          <div className="input_field">
            <input type="text" placeholder="Your Full Name" className="input" />
            <i className="fas fa-user" />
          </div>
          
          <div className="input_field">
            <input type="text" placeholder="Your Email" className="input" />
            <i className="fas fa-envelope" />
          </div>
          <div className="input_field">
            <input type="password" placeholder="Your password" className="input" />
            <i className="fas fa-lock" />
          </div>
          <div className="btn">
            <button>Display</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;