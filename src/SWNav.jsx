import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import FavDropdown from "./components/FavDropdown";

function SWNav(){
    return (
        <Navbar>
      <Navbar.Brand>
          <Image
            src="https://cdn.freebiesupply.com/logos/large/2x/star-wars-logo-svg-vector.svg"
            height="75"
            alt="Star Wars"
          />
      </Navbar.Brand>
      <FavDropdown />
    </Navbar>
    )
}

export default SWNav;