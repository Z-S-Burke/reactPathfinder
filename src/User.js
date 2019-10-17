import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import * as bs from 'bootstrap/dist/css/bootstrap.css';


class User extends Component {

    render() {
        return (
            <div>
                <Router>
                    <div className="d-flex flex-column align-items-center">
                        <form className="d-flex flex-column py-3 px-3">
                            <div className="loginForm">
                                <label> E-mail: <input className="border w-100" type="text" /> </label>
                                <label> Password: <input className="border w-100" type="text" /> </label>
                            </div>
                            <input className="text-light bg-dark d-flex justify-content-center p-1" type="submit" value="Submit" />
                            <div className="mt-3">
                                <p> Don't have an account? </p>
                                <Link to="/register"> Click here to register. </Link>
                            </div>
                        </form>
                    </div>
                    <Route path="/router" component={Router} />
                </Router>
            </div>
        );
    }
}

export default User;
