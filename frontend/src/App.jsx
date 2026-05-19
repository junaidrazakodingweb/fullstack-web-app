import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

function App() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    checkBackendHealth();
  }, []);

  const checkBackendHealth = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/health`);
      setMessage('✅ Backend is connected!');
    } catch (err) {
      setError('❌ Cannot connect to backend');
      console.error(err);
    }
  };

  const fetchHello = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`${API_URL}/api/hello`);
      setMessage(response.data.message);
    } catch (err) {
      setError('Failed to fetch from backend');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>🚀 Full-Stack App</h1>
      <p>React Frontend + Express Backend</p>
      
      <div className="status">
        {message && <p className="success">{message}</p>}
        {error && <p className="error">{error}</p>}
      </div>

      <button onClick={fetchHello} disabled={loading}>
        {loading ? 'Loading...' : 'Say Hello'}
      </button>

      <div className="info">
        <h3>Quick Links:</h3>
        <ul>
          <li><a href="http://localhost:5000/api/health" target="_blank">Backend Health</a></li>
          <li><a href="http://localhost:5000/api/hello" target="_blank">Backend Hello</a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
