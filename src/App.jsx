import { useState, useEffect, useContext } from 'react';
import { FavoritesContext } from './Favorites';
import EntityCard from './components/Entitycard';
import  Dropdown  from './components/Dropdown';

function App() {
  const [store, actions] = useContext(FavoritesContext);
  const [people, setPeople] = useState([]);

useEffect(() => {
  const getPeople = async () => {
    const res = await fetch ('https://www.swapi.tech/api/people');
    const data = await res.json();
    console.log(data)
    setPeople(data.results)
  }
  getPeople();
}, []);

  return (
    <>
      <div>
      < Dropdown />
      </div>
      {
        people.map(({person}) => {
          return (
            <EntityCard key={person.uid} data={person} />
          )
        })
      }
    </>
  )
}

export default App
