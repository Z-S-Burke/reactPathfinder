import React, { Component } from 'react';
import * as bs from 'bootstrap/dist/css/bootstrap.css';


class NewCharacter extends Component {
    render() {
        return (
            <div>
                <h1 className="bg-dark text-light my-2 pb-2 d-flex justify-content-center"> New Character </h1>
                <form className="d-flex flex-column border border-dark py-3 px-3">
                    <h2> BASE INFO </h2>
                    <label> Name: <input className="w-100 border" type="text" placeholder="NAME" /> </label>
                    <label> Race: <input className="w-100 border" type="text" placeholder="RACE" /> </label>
                    <label> Class: <input className="w-100 border" type="text" placeholder="CLASS" /> </label>
                    <label> Level: <input className="w-100 border" type="text" placeholder="LEVEL" /> </label>
                    <label> Strength: <input className="w-100 border" type="text" placeholder="STRENGTH" /> </label>
                    <label> Dexterity: <input className="w-100 border" type="text" placeholder="DEXTERITY" /> </label>
                    <label> Constitution: <input className="w-100 border" type="text" placeholder="CONSTITUTION" /> </label>
                    <label> Intelligence: <input className="w-100 border" type="text" placeholder="INTELLIGENCE" /> </label>
                    <label> Wisdom: <input className="w-100 border" type="text" placeholder="WISDOM" /> </label>
                    <label> Charisma: <input className="w-100 border" type="text" placeholder="CHARISMA" /> </label>
                    <h2> CHARACTER TRAITS </h2>
                    <label> Height: <input className="w-100 border" type="text" placeholder="NAME" /> </label>
                    <label> Weight: <input className="w-100 border" type="text" placeholder="RACE" /> </label>
                    <label> Gender: <input className="w-100 border" type="text" placeholder="CLASS" /> </label>
                    <label> Hair: <input className="w-100 border" type="text" placeholder="LEVEL" /> </label>
                    <label> Age: <input className="w-100 border" type="text" placeholder="STRENGTH" /> </label>
                    <label> Size: <input className="w-100 border" type="text" placeholder="DEXTERITY" /> </label>
                    <label> Homeland: <input className="w-100 border" type="text" placeholder="CONSTITUTION" /> </label>
                    <label> Alignment: <input className="w-100 border" type="text" placeholder="INTELLIGENCE" /> </label>
                    <label> Deity: <input className="w-100 border" type="text" placeholder="WISDOM" /> </label>
                    <input className="text-light bg-dark d-flex justify-content-center" type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default NewCharacter;
