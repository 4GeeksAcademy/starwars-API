import Dropdown from 'react-bootstrap/Dropdown';

function DropdownButton() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {
            store.favorites.map( (uid, name) => {
                return <Dropdown.Item key={uid}>{name}</Dropdown.Item>
            })
        }
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropdownButton;