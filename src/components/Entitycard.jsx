import { Button } from 'react-bootstrap/';
import { useContext } from 'react';
import { Card } from 'react-bootstrap/';
import cardDefaultSVG from '../assets/card-default.svg'
import { FavoritesContext } from '../Favorites';


function EntityCard({data}) {
    const [store, actions] = useContext(FavoritesContext);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cardDefaultSVG} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={() => actions.addFavorites(data)}>Favorite</Button>
      </Card.Body>
    </Card>
  );
}

export default EntityCard;