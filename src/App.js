import React, { useEffect, useState } from "react";
import "./styles.css";
import gql from "graphql-tag";
import request from "./utils/request";
import Searchbar from "./searchBar";
import Hero from "./display";

export default function App() {
  const [ships, setShips] = useState([]);
  const [ship, setShip] = useState([]);
  const fetchShips = async () => {
    const { data } = await request(gql`
      {
        ships {
          name
          home_port
          image
          roles
        }
      }
    `);
    setShips(data.ships);
  };

  useEffect(() => {
    fetchShips();
  }, []);

  function onSearch(term) {
    const req = ships.filter((ship) => ship.name.toUpperCase() === term);
    setShip(req);
  }

  return (
    <div className="App">
      <div className="logo">SPACEX</div>
      <Searchbar onSubmitBtn={onSearch} />
      {!ships.length ? (
        <div>Loading...</div>
      ) : (
        <>
          <div>TOTAL COUNT: {ship.length ? ship.length : ships.length}</div>
          <Hero ships={ship.length ? ship : ships} />
        </>
      )}
    </div>
  );
}
