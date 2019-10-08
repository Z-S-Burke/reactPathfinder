import React, { Component } from 'react';
import './App.css';
import * as bs from 'bootstrap/dist/css/bootstrap.css';


class NewCharacter extends Component {
    render() {
        return (
            <div className="armor">
                <form>
                    <input type="text" placeholder="NAME"/>
                    <input type="text" placeholder="CLASS"/>
                    <input type="text" placeholder="LEVEL"/>
                    <input type="text" placeholder="STRENGTH"/>
                    <input type="text" placeholder="DEXTERITY"/>
                    <input type="text" placeholder="CONSTITUTION"/>
                    <input type="text" placeholder="INTELLIGENCE"/>
                    <input type="text" placeholder="WISDOM"/>
                    <input type="text" placeholder="CHARISMA"/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default NewCharacter;
