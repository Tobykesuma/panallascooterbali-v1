import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import PropagateLoader from 'react-spinners';


function App() {
  // Loading Screen //
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  return (
    <>
    <div className='main-app'>
      {
        loading ? (
          <PropagateLoader size={10} color={'#15133C'} loading={loading} style={{display: 'flex', justifyContent: 'center', textAlign: 'center', height: '100vh', width: '100%', alignItems: 'center'}} />
        ) : (
          <>
          
          </>
        )
      }
    </div>
    </>
  );
}

export default App;
