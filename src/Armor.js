import React, { Component } from 'react';
// import weapons from '../../darksoulsarmory/weapons.json';
const API = 'https://jgalat.github.io/ds-weapons-api';
export default class Armor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            armor: [],
        };
    }

    componentDidMount() {
        fetch('https://cors-anywhere.herokuapp.com/' + API)
            .then(response => response.json())
            .then(data => this.setState({
                armor: data
            }));
    }
    render() {

        const { armor } = this.state;
        console.log(armor)

        return (
            <span>
                {armor.map((piece, index) => {
                    console.log(piece)
                    return (
                        <div class="d-flex justify-content-center">
                            <div class="primaryContainer d-flex justify-content-between flex-column border border-dark">
                                <div class="d-flex justify-content-around armorHeading pt-3">
                                    <div class="d-flex flex-column px-3">
                                        <h1> Base_Name </h1>
                                        <div class="d-flex justify-content-between">
                                            <h4 class="pr-5">
                                                category-category
                                            </h4>
                                            <h4>
                                                weight
                                            </h4>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-center text-warning display-2 align-items-center px-1">
                                        <p> COST </p>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-around pt-3">
                                    <div class="statBox d-flex justify-content-between">
                                        <p class="pr-5"> AC BONUS: </p>
                                        <p class="font-weight-bold"> X</p>
                                    </div>
                                    <div class="statBox d-flex justify-content-between">
                                        <p class="pr-5"> MAX DEX: </p>
                                        <p class="font-weight-bold"> X</p>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-around">
                                    <div class="statBox d-flex justify-content-between">
                                        <p class="pr-5"> AC PENALTY: </p>
                                        <p class="font-weight-bold"> X</p>
                                    </div>
                                    <div class="statBox d-flex justify-content-between">
                                        <p class="pr-5"> ARCANE FAILURE: </p>
                                        <p class="font-weight-bold"> X</p>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-around">
                                    <div class="statBox d-flex justify-content-between">
                                        <p class="pr-5"> SHIELD BONUS: </p>
                                        <p class="font-weight-bold"> X</p>
                                    </div>
                                    <div class="statBox d-flex justify-content-between">
                                        <p class="pr-5"> SPEED: </p>
                                        <p class="font-weight-bold"> X</p>
                                    </div>
                                </div>
                                <div class="d-flex flex-column px-5 pb-3">
                                    <h2 class="font-italic"> SPECIAL: </h2>
                                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id dicta cum corporis sed. Facilis maiores, natus aliquid ratione vero cum tempore dolor dicta, harum repellat laudantium officiis eius sunt reiciendis.</p>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </span>
        );

    }
}
