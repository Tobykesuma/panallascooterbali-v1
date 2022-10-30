import React, { useEffect, useState } from 'react';
import {PropagateLoader} from 'react-spinners';
import Layout from './components/Layout/Layout';
import BacktoTop from './components/UI/BacktoTop/BacktoTop';

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
          <PropagateLoader size={10} color={'#E77937'} loading={loading} style={{display: 'flex', justifyContent: 'center', textAlign: 'center', height: '100vh', width: '100%', alignItems: 'center'}} />
        ) : (
          <>
             <BacktoTop />
             <Layout />
          </>
        )
      }
    </div>
    </>
  );
}

export default App;
