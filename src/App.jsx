import React from 'react'
import Navebar from './component/Navebar';
import Sidebar from './component/Sidebar';
import {Routes,Route} from 'react-router-dom';
import Add from './pages/Add';
import List from './pages/List';
import Orders from './pages/Orders';
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



const App = () => {
  const url='http://localhost:3500';
  return (
    <div>
      <ToastContainer/>
      <Navebar/>
      <hr/>
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path='add' element={<Add url={url}/>}/>
          <Route path='list' element={<List url={url}/>}/>
          <Route path='orders' element={<Orders url={url}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;
