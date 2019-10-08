import React, { Component } from 'react';
import './App.css';
import * as bs from 'bootstrap/dist/css/bootstrap.css';


class NewCharacter extends Component {
    render() {
        return (
            <div className="armor">
                <form>
                    <input style="text" placeholder="NAME"/>
                    <input style="text" placeholder="CLASS"/>
                    <input style="text" placeholder="LEVEL"/>
                    <input style="text" placeholder="STRENGTH"/>
                    <input style="text" placeholder="DEXTERITY"/>
                    <input style="text" placeholder="CONSTITUTION"/>
                    <input style="text" placeholder="INTELLIGENCE"/>
                    <input style="text" placeholder="WISDOM"/>
                    <input style="text" placeholder="CHARISMA"/>
                </form>
            </div>
        );
    }
}

export default NewCharacter;
