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
                        <h2 className="Weapon-text">
                          {weapons[index].name}
                        </h2>
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
                          <h2 className="pl-3 pt-2"> BONUS: </h2>
                          <p className="font-italic px-3"> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
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
