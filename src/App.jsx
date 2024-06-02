import React from 'react'
import Navebar from './component/Navebar';
import Sidebar from './component/Sidebar';
import {Routes,Route} from 'react-router-dom';
import Add from './pages/Add';
import List from './pages/List';
import Orders from './pages/Orders';




const App = () => {
  return (
    <div>
      <Navebar/>
      <hr/>
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path='add' element={<Add/>}/>
          <Route path='add' element={<List/>}/>
          <Route path='add' element={<Orders/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;
