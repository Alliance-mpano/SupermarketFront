
import React from 'react'
import SideNav from './components/common/SideNav';
import './App.css'

import { Outlet } from 'react-router-dom';
function App() {

  console.log("Rendering ")
  const styles = {
    app:{
      position: "relative",
      height: "100vh"
    },
    main: {
      marginLeft: "20%",
      backgroundColor: "#F5F5F5"
    },
    
  }
    return (
      <div className='app' style={styles.app}>
        <SideNav/>
        <main className='main' style={styles.main}>
          
          <React.Fragment>
            <Outlet />
          </React.Fragment>
        </main>
      </div>
    )
  }
  
export default App;

