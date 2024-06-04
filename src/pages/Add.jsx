import React, {  useState } from 'react'
import { IoIosCloudUpload } from "react-icons/io";
import '../style/add.css';
import { Rating } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';
const Add = () => {

  const url='http://localhost:3500';
  const [image,setimage]=useState(false);
  const [data,setdata]=useState({
    name:'',
    ratingstars:0,
      ratingcount:0,
     priceCents:''
  });

  const onchangehandler=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setdata(data=>({...data,[name]:value}))
  };
  const handleRatingChange = (event, newRating) => { // Handle rating changes
    setdata((data) => ({ ...data, ratingstars: newRating }));
  };

  // No separate function needed for count update (explained below)
  const handleCountChange = (event) => {
    const newCount = parseInt(event.target.value, 10); // Parse to integer
    if (!isNaN(newCount) && newCount >= 0) { // Validate non-negative number
      setdata((data) => ({ ...data, ratingcount: newCount  }));
    }
  };
 const onsubmithandler=async(e)=>{
e.preventDefault();
const formdata=new FormData();
formdata.append('name',data.name);
formdata.append('ratingstars',Number( data.ratingstars));
formdata.append('ratingcount', Number(data.ratingcount));
formdata.append('priceCents',Number(data.priceCents));
formdata.append('image',image);
const response=await axios.post(`${url}/api/it/add`,formdata);
if (response.data.success) {
  setdata(
    {
      name:'',
      ratingstars:0,
        ratingcount:0,
       priceCents:''
    }
  )
   setimage(false)
   toast.success(response.data.message)
}else
toast.error(response.data.message)
 }
  return (
    <div className='add'>
      <form onSubmit={onsubmithandler}  className="flex-col">
        <div className="add-img-upload flex-col">
            <p>upload image</p>
            <label className="span" htmlFor="image">
            {image ? (
              <img src={URL.createObjectURL(image)} alt="Uploaded" />
            ) : (
              <IoIosCloudUpload className="span" />
            )}
          </label>
            <input onChange={(e)=>setimage(e.target.files[0])} type="file" id="image" hidden required />
        </div>
        <div className="add-product-name flex-col">
            <p>product name</p>
            <input onChange={onchangehandler} value={data.name} type="text" name='name' placeholder='product name'/>
        </div>
        <div className="add-product-name flex-col">
            <p>product rating</p>
            <div className=" rating">
            <Rating
            name="ratingstars" defaultValue={2.5}
            value={data.ratingstars}
            onChange={handleRatingChange}
            precision={0.5}
            size="small"
          />
                <input
            onChange={handleCountChange}
            value={data.ratingcount}
            type="number"
            name="ratingcount" // Use a more descriptive name
            placeholder="number of ratings"
          />
            </div>
            
        </div>
        <div className="add-product-name flex-col">
            <p>product price</p>
           <input onChange={onchangehandler} value={data.priceCents} type="number" name='priceCents' placeholder='pricecents'/>
            </div>
            <button type='submit' className="add-btn">add</button>
      </form>
    </div>
  )
}

export default Add;
