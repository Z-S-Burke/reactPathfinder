import React, { Component } from 'react';
import Select from 'react-select';
import * as bs from 'bootstrap/dist/css/bootstrap.css';


class User extends Component {

    render() {
        return (
            <div>
                <div className="d-flex flex-column align-items-center">
                    <h2> Get started with Shopkeep </h2>
                    <form className="d-flex flex-column py-3 px-3">
                        <div className="loginForm">
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

export default User;
