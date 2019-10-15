import React, { Component } from 'react';
import Select from 'react-select';
import * as bs from 'bootstrap/dist/css/bootstrap.css';


class User extends Component {
    
    render() {
        return (
            <div>
                <h1 className="bg-dark text-light my-2 pb-2 d-flex justify-content-center"> New Character </h1>
                <form className="d-flex flex-column border border-dark py-3 px-3">
                    <h2> BASIC INFO </h2>
                </form>
            </div>
        );
    }
}

export default User;
