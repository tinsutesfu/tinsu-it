import React from 'react'
import Navebar from './component/Navebar';
import Sidebar from './component/Sidebar';
import {Routes,Route} from 'react-router-dom';
import Add from './pages/Add';
import List from './pages/List';
import Orders from './pages/Orders';
<<<<<<< HEAD

=======
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
>>>>>>> 125454c2ec3e057eb0426e88cd29e7ebd7b36455



const App = () => {
<<<<<<< HEAD
  return (
    <div>
=======
  const url='http://localhost:3500';
  return (
    <div>
      <ToastContainer/>
>>>>>>> 125454c2ec3e057eb0426e88cd29e7ebd7b36455
      <Navebar/>
      <hr/>
      <div className="app-content">
        <Sidebar/>
        <Routes>
<<<<<<< HEAD
          <Route path='add' element={<Add/>}/>
          <Route path='add' element={<List/>}/>
          <Route path='add' element={<Orders/>}/>
=======
          <Route path='add' element={<Add url={url}/>}/>
          <Route path='list' element={<List url={url}/>}/>
          <Route path='orders' element={<Orders url={url}/>}/>
>>>>>>> 125454c2ec3e057eb0426e88cd29e7ebd7b36455
        </Routes>
      </div>
    </div>
  )
}

export default App;
