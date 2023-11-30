import React, { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { FavoritesContext } from '../Favorites';

function FavDropdown() {
  const { store } = useContext(FavoritesContext);

  return (
      <Dropdown style={{ position: 'absolute', right: '0' }}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Favorites
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {
              store.favorites.map( ({uid, name}) => {
                  return <Dropdown.Item key={uid}>{name}</Dropdown.Item>
              })
          }
        </Dropdown.Menu>
      </Dropdown>
  );
}

export default FavDropdown;