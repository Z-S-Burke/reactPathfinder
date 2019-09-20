import React, { useState, Component } from 'react';
import * as bs from 'bootstrap/dist/css/bootstrap.css';
import { Button, Collapse } from 'react-bootstrap';


const API = 'https://jgalat.github.io/ds-weapons-api';
export default class Weapons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weapons: [],
    };
  }

  weaponCollapse() {
    const [open, setOpen] = useState(false);

    return (
      <div className="w-100 d-flex">
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className="bg-dark text-light"
        >
          SampleUser
        </Button>
        <Collapse in={open}>
          <div className="w-100 d-flex justify-content-around align-items-center">
            <p> Character </p>
          </div>
        </Collapse>
      </div>
    );
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
        <div>
          <h1 className="bg-dark text-light my-2 pb-2"> Weapons </h1>
        </div>
        {weapons.map((weapon, index) => {
          console.log(weapon)
          return (
            <div key={index} className="armor">
              <div id={index}>
                <div className="d-flex justify-content-center">
                  <div className="primaryContainer d-flex justify-content-between flex-column border border-dark">
                    <div className="d-flex justify-content-around armorHeading pt-3">
                      <div className="d-flex flex-column px-3">
                        <p className="Weapon-text">
                          {weapons[index].name}
                        </p>
                        <div className="d-flex justify-content-around">
                          <p className="pr-5">
                            {weapons[index].weapon_type}
                          </p>
                          <p>
                            {weapons[index].weight} lb
                          </p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center text-warning align-items-center pr-2">
                        <h4> COST </h4>
                      </div>
                    </div>
                    <div className="d-flex flex-column">
                      {/* <p className="Weapon-type"> Weapon Type: {weapons[index].weapon_type} </p>
                      <div className="betweenText">
                        <div>
                          <p className="Weapon-desc"> Attack Type: {weapons[index].attack_type} </p>
                        </div>
                        <div>
                          <p className="Weapon-desc"> Weight: {weapons[index].weight} </p>
                        </div>
                        <div>
                          <p className="Weapon-desc"> Durability: {weapons[index].durability} </p>
                        </div>
                      </div>
                      <p className="Weapon-type"> Requirements: </p>
                      <div className="betweenText">
                        <p className="Weapon-desc"> Dexterity: {weapons[index].requirements.dexterity} </p>
                        <p className="Weapon-desc"> Faith: {weapons[index].requirements.faith} </p>
                        <p className="Weapon-desc"> Intelligence: {weapons[index].requirements.intelligence} </p>
                        <p className="Weapon-desc"> Strength: {weapons[index].requirements.strength} </p>
                      </div>
                      <p className="Weapon-type"> Damage:</p>
                      <div className="d-flex align-items-center justify-content-around">
                        <p className="Weapon-desc"> Physical: {weapons[index].damage.physical} </p>
                        <p className="Weapon-desc"> Fire: {weapons[index].damage.fire} </p>
                        <p className="Weapon-desc"> Lightning: {weapons[index].damage.lightning} </p>
                        <p className="Weapon-desc"> Magic: {weapons[index].damage.magic} </p>
                      </div>
                      <p className="Weapon-type"> Bonus:</p>
                      <div className="betweenText">
                        <p className="Weapon-desc"> Strength: {weapons[index].bonus.strength} </p>
                        <p className="Weapon-desc"> Dexterity: {weapons[index].bonus.dexterity} </p>
                        <p className="Weapon-desc"> Faith: {weapons[index].bonus.faith} </p>
                        <p className="Weapon-desc"> Intelligence: {weapons[index].bonus.intelligence} </p>
                      </div> */}
                      <div className="d-flex flex-column statContainer justify-content-center align-items-center">
                        <div className="statBox d-flex justify-content-between pt-1">
                          <p> DAMAGE: </p>
                          <p className="font-weight-bold"> {weapons[index].damage.physical} </p>
                        </div>
                        <div className="statBox d-flex justify-content-between align-items-center">
                          <p> DAMAGE TYPE: </p>
                          <p className="font-weight-bold"> {weapons[index].attack_type} </p>
                        </div>
                        <div className="statBox d-flex justify-content-between">
                          <p> CRITICAL: </p>
                          <p className="font-weight-bold"> X</p>
                        </div>
                        <div className="statBox d-flex justify-content-between">
                          <p> HANDS: </p>
                          <p className="font-weight-bold"> X</p>
                        </div>
                        <div className="statBox d-flex justify-content-between">
                          <p> RANGE: </p>
                          <p className="font-weight-bold"> X</p>
                        </div>
                        <div className="statBox d-flex justify-content-between">
                          <p> STYLE: </p>
                          <p className="font-weight-bold"> X</p>
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
