import './Home.css';
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';




function Home() {

// ChangeHandler = (event) => {

// }

// isUserNameValid = (Username) => {

// }

// isPasswordValid = (Password) => {

// }

  return (
    <div className="home">
      <h2 className="rules">
              Here is the site. Rules below.
      </h2>
      <p className="rulesParagraph">
        Enter a Username and hit Login. Once you do this it will take you to a site to create a password and finish setting up your account. You can place bets based on number of tokens you have. Play smart and have fun!
      </p>

      <div className="loginThings">
            <div className="loginThingsWrap">
              <div className="buttons">
                <input type="text" placeholder="Enter Username" className="loginField" />
                <input type="text" placeholder="Enter Password" className="Password"/>
              </div>
              <div className="loginbtnWrap">
                <Link to="/scoreboard">
                  <button className="loginbtn">
                    Login
                  </button>
                </Link>
              </div>
            </div>
            <div className="createWrap">
              <Link to="/createAccount" className="createAccountbtn">
                <button onClick className="createAccountbtn">
                Create Account
                </button>
              </Link>
            </div>
             <img className="logo" src='https://venturebeat.com/wp-content/uploads/2018/12/fortnite-rapper-2-milly-dance-swipe.jpg?fit=1280%2C720&strip=all' alt= "logo"></img>
      </div>
     
    </div>
    

  );
}

export default Home;