import React, { useEffect, useState } from 'react'; // Usuń powtórzoną deklarację 'React'
import axios from 'axios';

function App() {
  const [enginesData, setEnginesData] = useState([]);

  useEffect(() => {
    axios.get('/api/engines') // Adres endpointu API
      .then(response => {
        setEnginesData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {enginesData.map(engine => (
        <div key={engine._id}>
          <p>Model: {engine.model}</p>
          <p>HorsePower: {engine.HorsePower}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
