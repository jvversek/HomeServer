import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://192.168.50.71:8081/api/test')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('Hiba történt az API hívás során:', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Frontend és Backend Kommunikáció</h1>
      <p>Backend üzenet: {message}</p>
    </div>
  );
}

export default App;
