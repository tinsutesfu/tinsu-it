import React, { useEffect } from 'react'
import { useState } from 'react';
import '../style/list.css';
import axios, { Axios } from 'axios';
import { toast } from 'react-toastify';
const List = ({url}) => {
  const [list,setlist]=useState([]);

  const fetchlist=async()=>{
    const response=await axios.get(`${url}/api/it/list`);
    
    if (response.data.success) {
      setlist(response.data.data)
    }else{
      toast.error('error');
    }
  }

  const removeit=async (itId)=>{
const response=await axios.post(`${url}/api/it/remove`,{id:itId})
 await fetchlist();
 if (response.data.success) {
  toast.success(response.data.message)
 }else{
  toast.error('error');
}
  }
  useEffect(()=>{
    fetchlist()
  },[])
  return (
    <div className='list add flex-col'>
      <p>all brand list</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>image</b><b>name</b><b>ratingstars</b><b>ratingcount</b><b>pricecents</b><b>action</b>
        </div>
        {
          list.map((item,index)=>{
            return(
              <div key={index} className="list-table-format">
               <img src={`${url}/images/`+item.image}/>
               <p>{item.name}</p>
               <p>{item.ratingstars}</p>
               <p>{item.ratingcount}</p>
               <p>{item.priceCents}</p>
               <p className='cursor' onClick={()=>removeit(item._id)}>x</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default List
