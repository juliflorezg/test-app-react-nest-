import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('/api/nest/'); // Call API
        if (!response.ok) throw new Error('Network response was not ok'); // Check for errors
        const result = await response.json(); // Parse JSON data
        setData(result); // Set data to state
      } catch (error) {
        setError(error.message); // Set error message to state if any error occurs
      }
    };

    fetchData(); // Call fetch function

  }, [])




  return (
    <>

      <div>
        <h1>Data Fetcher</h1>
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        {data ? (
          <pre style={{ textAlign: "left" }}>{JSON.stringify(data, null, 2)}</pre>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
