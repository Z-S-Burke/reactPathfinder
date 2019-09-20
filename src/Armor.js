import React, { Component } from 'react';
import './App.css';
import * as bs from 'bootstrap/dist/css/bootstrap.css';


class Armor extends Component {
    render() {
        return (
            <div className="armor">
                <h1 className="bg-dark text-light my-2 pb-2"> Armor </h1>
                <div className="d-flex justify-content-center">
                    <div className="primaryContainer d-flex justify-content-between flex-column border border-dark">
                        <div className="d-flex justify-content-around armorHeading pt-3">
                            <div className="d-flex flex-column align-items-start px-3">
                                <h1> Base_Name </h1>
                                <div className="d-flex justify-content-between">
                                    <p className="pr-5">
                                        category
                                    </p>
                                    <p>
                                        weight
                                    </p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center text-warning align-items-center px-1">
                                <h4> COST </h4>
                            </div>
                        </div>
                        <div className="d-flex flex-column statContainer justify-content-center align-items-center">
                            <div className="statBox d-flex justify-content-between pt-1">
                                <p> AC BONUS: </p>
                                <p className="font-weight-bold"> X</p>
                            </div>
                            <div className="statBox d-flex justify-content-between align-items-center">
                                <p> MAX DEX: </p>
                                <p className="font-weight-bold"> X</p>
                            </div>
                            <div className="statBox d-flex justify-content-between">
                                <p> AC PENALTY: </p>
                                <p className="font-weight-bold"> X</p>
                            </div>
                            <div className="statBox d-flex justify-content-between">
                                <p> ARCANE FAILURE: </p>
                                <p className="font-weight-bold"> X</p>
                            </div>
                            <div className="statBox d-flex justify-content-between">
                                <p> SHIELD BONUS: </p>
                                <p className="font-weight-bold"> X</p>
                            </div>
                            <div className="statBox d-flex justify-content-between">
                                <p> SPEED: </p>
                                <p className="font-weight-bold"> X</p>
                            </div>
                        </div>
                        <div className="d-flex flex-column align-items-start">
                            <h2 className="font-italic pl-3"> SPECIAL: </h2>
                            <p className="px-3"> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Id dicta cum corporis sed. Facilis maiores,
                                natus aliquid ratione vero cum tempore dolor dicta,
                                harum repellat laudantium officiis eius sunt reiciendis.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Armor;
