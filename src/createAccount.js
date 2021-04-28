import React from 'react';
import './CreateAccount.css';

function CreateAccount() {
    return (
        <div className="wrap">
            <div className="createFields">
                <input type="text" placeholder="First Name" className="firstName"/>
                <input type="text" placeholder="Last Name" className="lastName"/>
                <input type="text" placeholder="Email" className="email" />
                <input type="text" placeholder="Enter Username" className="loginField" />
                <input type="text" placeholder="Enter Password" className="Password"/>
                <button className="createButton"> Create Account</button>
            </div>
        </div>
    );
}

export default CreateAccount;