import React, { useState, useEffect, useContext } from 'react';
import { FavoritesContext } from './Favorites';
import EntityCard from './components/EntityCard';
import SWNav from './SWNav';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const {store, actions} = useContext(FavoritesContext);
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const peopleRes = await fetch('https://www.swapi.tech/api/people');
      const peopleData = await peopleRes.json();
      setPeople(peopleData.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
}, []);

useEffect(() => {
  const fetchData = async () => {
    try {
      const planetsRes = await fetch ('https://www.swapi.tech/api/planets')
      const planetsData = await planetsRes.json();
      setPlanets(planetsData.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
}, []);

useEffect(() => {
  const fetchData = async () => {
    try {
      const vehiclesRes = await fetch ('https://www.swapi.tech/api/vehicles')
      const vehiclesData = await vehiclesRes.json();
      setVehicles(vehiclesData.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchData();
}, []);

  return (
    <>
      <SWNav />
      <h1>People</h1>
      {
        people.map(({uid, name, url}) => {
          return (
            <EntityCard key={uid} data={{uid, name, url, type:"characters"}} />
          )
        })
      }
      <h1>Planets</h1>
      {planets.map(({ uid, name, url }) => (
        <EntityCard key={uid} data={{ uid, name, url, type:"planets" }} />
      ))}
      <h1>Vehicles</h1>
      {vehicles.map(({ uid, name, url }) => (
        <EntityCard key={uid} data={{ uid, name, url, type:"vehicles" }} />
      ))}
      
    </>
  )
}

export default App