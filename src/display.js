import React from "react";

export default function hero({ ships }) {
  function createList() {
    return ships.map((ship, index) => {
      return (
        <div className="ship" key={index}>
          <img src={ship.image} alt={ship.name} />
          <div className="ship_info">
            <div className="ship_name">{ship.name.toUpperCase()}</div>
            <div className="ship_functions">
              <div className="ship_port">
                <h6>PORT: </h6>
                <p>{ship.home_port}</p>
              </div>
              <div className="ship_role">
                <h6>ROLES: </h6>
                <p>{ship.roles[0]}</p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
  return createList();
}
