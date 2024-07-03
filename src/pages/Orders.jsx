import React from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useState } from 'react';
import '../style/orders.css';
const Orders = ({url}) => {
  const [orders,setorders]=useState([]);
  const fetchorders=async()=>{
    const response=await axios.get(`${url}/api/place/list`);
    if (response.data.success) {
     setorders (response.data.data)
     console.log(response.data.data)
    } else {
      toast.error('error')
    }
  }

  const statushandler=async(event,orderId)=>{
    const response=await axios.post(`${url}/api/place/status`,{orderId,status:event.target.value})
    if (response.data.success) {
      await fetchorders()
    }
  }
  useEffect(()=>{
    fetchorders()
  },[])
  return (
    <div className='order add'>
      <h3>order page</h3>
      <div className="order-list">
        {orders.map((order,index)=>(
          <div key={index} className="order-item">
            <img src='/lap.del.jpg'/>
            <div>
            <p className='order-item-map'>{order.items.map((item,index)=>{
  if (index===order.items.length-1) {
    return item.name +'x'+item.quantity
  } else {
    return item.name+'x'+item.quantity+','
  }
})}</p>

 <p className='order-item-name'>{order.address.firstname+' '+order.address.lastname}</p>
 <div className='order-item-address'>
<p>{order.address.street+','}</p>
<p>{order.address.state+','+order.address.city+','+order.address.country+','+order.address.zipcode}</p>
</div>
<p className='order-item-phone'>{order.address.phone}</p>
            </div>
            <p>items:{order.items.length}</p>
            <p>total:${(order.amount).toFixed(2)}</p>
            <select onChange={(event)=>statushandler(event,order._id)} value={order.status}>
              <option value='order processing'>order processing</option>
              <option value='shipped'>shipped</option>
              <option value='deliverd'>deliverd</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Orders
