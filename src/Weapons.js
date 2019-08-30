import React, { Component } from 'react';
// import weapons from '../../darksoulsarmory/weapons.json';
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
            <div key={index} className="Armory-weapon">
              <div id={index}>
                <ul className="Weapon-container">
                  <p className="Weapon-text">
                    {weapons[index].name}
                  </p>
                  <div>
                    <p className="Weapon-type"> Weapon Type: {weapons[index].weapon_type} </p>
                    <li className="Weapon-desc"> Attack Type: {weapons[index].attack_type} </li>
                    <li className="Weapon-desc"> Weight: {weapons[index].weight} </li>
                    <li className="Weapon-desc"> Durability: {weapons[index].durability} </li>
                    <p className="Weapon-type"> Requirements: </p>
                    <div className="betweenText">
                      {weapons[index].requirements.dexterity && <li className="Weapon-desc"> Dexterity: {weapons[index].requirements.dexterity} </li>}
                      {weapons[index].requirements.faith && <li className="Weapon-desc"> Faith: {weapons[index].requirements.faith} </li>}
                    </div>
                    <div className="betweenText">
                      {weapons[index].requirements.intelligence && <li className="Weapon-desc"> Intelligence: {weapons[index].requirements.intelligence} </li>}
                      {weapons[index].requirements.strength && <li className="Weapon-desc"> Strength: {weapons[index].requirements.strength} </li>}
                    </div>
                    <p className="Weapon-type"> Damage:</p>
                    <div className="betweenText">
                      {weapons[index].damage.physical && <li className="Weapon-desc"> Physical: {weapons[index].damage.physical} </li>}
                      {weapons[index].damage.fire && <li className="Weapon-desc"> Fire: {weapons[index].damage.fire} </li>}
                    </div>
                    <div className="betweenText">
                      {weapons[index].damage.lightning && <li className="Weapon-desc"> Lightning: {weapons[index].damage.lightning} </li>}
                      {weapons[index].damage.magic && <li className="Weapon-desc"> Magic: {weapons[index].damage.magic} </li>}
                    </div>
                    <p className="Weapon-type"> Bonus:</p>
                    <div className="betweenText">
                      {weapons[index].bonus.strength && <li className="Weapon-desc"> Strength: {weapons[index].bonus.strength} </li>}
                      {weapons[index].bonus.dexterity && <li className="Weapon-desc"> Dexterity: {weapons[index].bonus.dexterity} </li>}
                    </div>
                    <div className="betweenText">
                      {weapons[index].bonus.faith && <li className="Weapon-desc"> Faith: {weapons[index].bonus.faith} </li>}
                      {weapons[index].bonus.intelligence && <li className="Weapon-desc"> Intelligence: {weapons[index].bonus.intelligence} </li>}
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          )
        })
        }
      </span>
    );

  }
}
