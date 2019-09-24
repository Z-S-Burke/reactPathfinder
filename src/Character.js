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
                        <div className="d-flex flex-column statContainer">
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
                            <h3 className="pl-3 pt-2"> CHARACTER TRAITS: </h3>
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
                            <div className="d-flex flex-column align-items-start justify-content-around">
                                <h3 className="pl-3 pt-2"> FEATS: </h3>
                                <div className=" d-flex flex-column justify-content-between align-items-start py-2 my-2 mx-3 border border-dark">
                                    <h5 className="pl-3 font-weight-bold"> ARTFUL DODGE </h5>
                                    <div className="d-flex flex-column abilityText pl-3">
                                        <p className="mx-1">
                                            Benefit: If you are the only character threatening an opponent, you gain a +1 dodge bonus to AC against that opponent.
                                    </p>
                                        <p className="mx-1">
                                            Special: The Artful Dodge feat acts as the Dodge feat for the purpose of satisfying prerequisites that require Dodge.
                                    </p>
                                        <p className="mx-1 ">
                                            You can use Intelligence, rather than Dexterity, for feats with a minimum Dexterity prerequisite.
                                    </p>
                                    </div>
                                </div>
                                <div className=" d-flex flex-column justify-content-between align-items-start py-2 my-2 mx-3 border border-dark">
                                    <h5 className="pl-3 font-weight-bold"> AWESOME THROW </h5>
                                    <div className="d-flex flex-column abilityText pl-3">
                                        <p className="mx-1">
                                            Your ranged attacks can send smaller opponents flying.
                                        </p>
                                        <p className="mx-1">
                                            Benefit: As a standard action, you can perform the awesome throw combat maneuver. You do this by making a thrown weapon attack; if you don’t have the Throw Anything feat, you must use a large, bulky, and relatively regular-shaped object with a hardness of at least 5 (such as a rock or treasure chest). If that attack hits a corporeal opponent smaller than you, the opponent takes damage and is knocked away, flying 10 feet in a straight line away from you and falling prone. If an obstacle prevents the completion of your target’s move, the target and the obstacle each take 1d6 points of damage, and the target is knocked prone in a space adjacent to the obstacle.
                                        </p>
                                    </div>
                                </div>
                                <div className=" d-flex flex-column justify-content-between align-items-start py-2 my-2 mx-3 border border-dark">
                                    <h5 className="pl-3 font-weight-bold"> SAVAGE LEAP </h5>
                                    <div className="d-flex flex-column abilityText pl-3">
                                        <p className="mx-1">
                                        You leap into the air while holding your opponent and slam him to the ground.
                                        </p>
                                        <p className="mx-1">
                                        Benefit(s): When you use Savage Slam, you can move yourself and your target up to half your speed before releasing the grapple. You provoke attacks of opportunity from this movement, but your target does not. If your target takes damage from Savage Slam, the target is shaken for 1 round.
                                        </p>
                                        <p className="mx-1 ">
                                        You become flat-footed until the start of your next turn if you move before using Savage Slam in this way.
                                        </p>
                                    </div>
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

