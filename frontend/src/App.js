import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [riskProfile, setRiskProfile] = useState('medio');
  const [capital, setCapital] = useState('');
  const [users, setUsers] = useState([]);

  const registerUser = async () => {
    await axios.post('http://localhost:3000/register', {
      username,
      riskProfile,
      capital: parseFloat(capital)
    });
    fetchUsers();
  };

  const fetchUsers = async () => {
    const res = await axios.get('http://localhost:3000/users');
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>Registro de Usuarios</h2>
      <input placeholder="Nombre" value={username} onChange={e => setUsername(e.target.value)} />
      <select value={riskProfile} onChange={e => setRiskProfile(e.target.value)}>
        <option value="bajo">Bajo</option>
        <option value="medio">Medio</option>
        <option value="alto">Alto</option>
      </select>
      <input placeholder="Capital" value={capital} onChange={e => setCapital(e.target.value)} />
      <button onClick={registerUser}>Registrar</button>

      <h3>Usuarios Registrados</h3>
      <ul>
        {users.map((u, i) => (
          <li key={i}>{u.username} - {u.riskProfile} - ${u.capital}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;