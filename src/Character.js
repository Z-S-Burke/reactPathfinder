import React, { Component } from 'react';
import './App.css';
import * as bs from 'bootstrap/dist/css/bootstrap.css';


export default class Character extends Component {
    render() {
        return (
            <div className="armor">
                <h1 className="bg-dark text-light my-2 pb-2"> Character </h1>
                <div className="d-flex justify-content-center">
                    <div className="primaryContainer d-flex justify-content-between flex-column border border-dark">
                        <div className="d-flex justify-content-between armorHeading pt-3">
                            <div className="d-flex flex-column align-items-start px-3">
                                <h1> Name </h1>
                                <p> Class </p>
                            </div>
                            <div className="d-flex justify-content-center text-warning align-items-center pr-3">
                                <h4> LEVEL </h4>
                            </div>
                        </div>
                        <div className="d-flex flex-column statContainer justify-content-center align-items-center">
                            <div className="statBox d-flex justify-content-between pt-1">
                                <p> STRENGTH: </p>
                                <p className="font-weight-bold"> X</p>
                            </div>
                            <div className="statBox d-flex justify-content-between align-items-center">
                                <p> DEXTERITY: </p>
                                <p className="font-weight-bold"> X</p>
                            </div>
                            <div className="statBox d-flex justify-content-between">
                                <p> CONSTITUTION: </p>
                                <p className="font-weight-bold"> X</p>
                            </div>
                            <div className="statBox d-flex justify-content-between">
                                <p> INTELLIGENCE: </p>
                                <p className="font-weight-bold"> X</p>
                            </div>
                            <div className="statBox d-flex justify-content-between">
                                <p> WISDOM: </p>
                                <p className="font-weight-bold"> X</p>
                            </div>
                            <div className="statBox d-flex justify-content-between">
                                <p> CHARISMA: </p>
                                <p className="font-weight-bold"> X</p>
                            </div>
                        </div>
                        <div className="d-flex flex-column align-items-start">
                            <h3 className="pl-3 pt-2"> DESCRIPTION: </h3>
                            <div className="d-flex characterInfo justify-content-around">
                                <div className="characterInfo d-flex flex-column justify-content-around">
                                    <p >
                                        HEIGHT
                                    </p>
                                    <p>
                                        WEIGHT
                                    </p>
                                    <p >
                                        RACE
                                    </p>
                                    <p>
                                        GENDER
                                    </p>
                                    <p>
                                        HAIR
                                    </p>
                                    <p>
                                        EYES
                                    </p>
                                </div>
                                <div className="characterInfo d-flex flex-column justify-content-around">
                                    <p >
                                        AGE
                                    </p>
                                    <p>
                                        SIZE
                                    </p>
                                    <p>
                                        HOMELAND
                                    </p>
                                    <p >
                                        ALIGNMENT
                                    </p>
                                    <p>
                                        DEITY
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex flex-column align-items-start">
                                <h3 className="pl-3 pt-2"> BACKGROUND: </h3>
                                <p className="font-italic px-3"> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    Id dicta cum corporis sed. Facilis maiores,
                                    natus aliquid ratione vero cum tempore dolor dicta,
                                harum repellat laudantium officiis eius sunt reiciendis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

