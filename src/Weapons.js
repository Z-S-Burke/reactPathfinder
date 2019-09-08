import React, { Component } from 'react';
import * as bs from 'bootstrap/dist/css/bootstrap.css';

const API = 'https://jgalat.github.io/ds-weapons-api';
export default class Weapons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weapons: [],
    };
  }

  componentDidMount() {
    fetch('https://cors-anywhere.herokuapp.com/' + API)
      .then(response => response.json())
      .then(data => this.setState({
        weapons: data
      }));
  }
  render() {

    const { weapons } = this.state;
    console.log(weapons)

    return (
      <span>
        {weapons.map((weapon, index) => {
          console.log(weapon)
          return (
            <div key={index} className="armor">
              <div id={index}>
                <div className="d-flex justify-content-center">
                  <div className="primaryContainer d-flex justify-content-between flex-column border border-dark">
                    <div className="d-flex justify-content-around armorHeading pt-3">
                      <div className="d-flex flex-column align-items-start px-3">
                        <p className="Weapon-text">
                          {weapons[index].name}
                        </p>
                        <div className="d-flex justify-content-between">
                          <p className="pr-5">
                            category
                          </p>
                          <p>
                            weight
                          </p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center text-warning align-items-center">
                        <h4> COST </h4>
                      </div>
                    </div>
                    <div className="d-flex flex-column">
                      <p className="Weapon-type"> Weapon Type: {weapons[index].weapon_type} </p>
                      <p className="Weapon-desc"> Attack Type: {weapons[index].attack_type} </p>
                      <p className="Weapon-desc"> Weight: {weapons[index].weight} </p>
                      <p className="Weapon-desc"> Durability: {weapons[index].durability} </p>
                      <p className="Weapon-type"> Requirements: </p>
                      <div className="betweenText">
                        <li className="Weapon-desc"> Dexterity: {weapons[index].requirements.dexterity} </li>
                        <li className="Weapon-desc"> Faith: {weapons[index].requirements.faith} </li>
                      </div>
                      <div className="betweenText Weapon-desc">
                        <li > Intelligence: {weapons[index].requirements.intelligence} </li>
                        <li > Strength: {weapons[index].requirements.strength} </li>
                      </div>
                      <p className="Weapon-type"> Damage:</p>
                      <div className="betweenText">
                        <li className="Weapon-desc"> Physical: {weapons[index].damage.physical} </li>
                        <li className="Weapon-desc"> Fire: {weapons[index].damage.fire} </li>
                      </div>
                      <div className="betweenText">
                        <li className="Weapon-desc"> Lightning: {weapons[index].damage.lightning} </li>
                        <li className="Weapon-desc"> Magic: {weapons[index].damage.magic} </li>
                      </div>
                      <p className="Weapon-type"> Bonus:</p>
                      <div className="betweenText">
                        <li className="Weapon-desc"> Strength: {weapons[index].bonus.strength} </li>
                        <li className="Weapon-desc"> Dexterity: {weapons[index].bonus.dexterity} </li>
                      </div>
                      <div className="betweenText">
                        <li className="Weapon-desc"> Faith: {weapons[index].bonus.faith} </li>
                        <li className="Weapon-desc"> Intelligence: {weapons[index].bonus.intelligence} </li>
                      </div>
                    </div>
                  </div>
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
