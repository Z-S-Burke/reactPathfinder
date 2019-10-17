import React, { Component } from 'react';
import * as bs from 'bootstrap/dist/css/bootstrap.css';


class Register extends Component {

    render() {
        return (
            <div>
                <div className="d-flex flex-column align-items-center">
                    <form className="d-flex flex-column py-3 px-3">
                        <div className="loginForm">
                            <h2> Register a new account </h2>
                            <label> Username: <input className="border w-100" type="text" /> </label>
                            <label> E-mail: <input className="border w-100" type="text" /> </label>
                            <label> Password: <input className="border w-100" type="text" /> </label>
                        </div>
                        <input className="text-light bg-dark d-flex justify-content-center p-1" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;
