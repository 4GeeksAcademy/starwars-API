import React, { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { FavoritesContext } from '../Favorites';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function FavDropdown() {
  const { store } = useContext(FavoritesContext);

  return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Favorites 
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {
              store.favorites.map( ({uid, name}) => {
                  return (
                  <Dropdown.Item key={uid}>
                    <div style={{padding: '1px'}}>
                      {name}
                    </div>
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      className="trash-can"
                      style={{padding: '1px'}}
                    />
                  </Dropdown.Item>
                  )})
          }
        </Dropdown.Menu>
      </Dropdown>
  );
}

export default FavDropdown;