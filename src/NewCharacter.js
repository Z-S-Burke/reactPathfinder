import React, { Component } from 'react';
import * as bs from 'bootstrap/dist/css/bootstrap.css';


class NewCharacter extends Component {
    render() {
        return (
            <div>
                <h1 className="bg-dark text-light my-2 pb-2 d-flex justify-content-center"> New Character </h1>
                <form className="d-flex flex-column border border-dark py-3 px-3">
                    <label className="w-100"> Name: <input type="text" placeholder="NAME" /> </label>
                    <label> Class: <input type="text" placeholder="CLASS" /> </label>
                    <label> Level: <input type="text" placeholder="LEVEL" /> </label>
                    <label> Strength: <input type="text" placeholder="STRENGTH" /> </label>
                    <label> Dexterity: <input type="text" placeholder="DEXTERITY" /> </label>
                    <label> Constitution: <input type="text" placeholder="CONSTITUTION" /> </label>
                    <label> Intelligence: <input type="text" placeholder="INTELLIGENCE" /> </label>
                    <label> Wisdom: <input type="text" placeholder="WISDOM" /> </label>
                    <label> Charisma: <input type="text" placeholder="CHARISMA" /> </label>
                    <input className="text-light bg-dark d-flex justify-content-center" type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default NewCharacter;
