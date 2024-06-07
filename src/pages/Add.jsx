import React from 'react'
import { IoIosCloudUpload } from "react-icons/io";
import '../style/add.css'
const Add = () => {
  return (
    <div className='add'>
      <form  className="flex-col">
        <div className="add-img-upload flex-col">
            <p>upload image</p>
            <label htmlFor='image'>
                <span><IoIosCloudUpload /></span>
            </label>
            <input type="file" id="image" hidden required />
        </div>
        <div className="add-product-name flex-col">
            <p>product name</p>
            <input type="text" name='name' placeholder='product name'/>
        </div>
        <div className="add-product-name flex-col">
            <p>product rating</p>
            <div className="flex-col">
                <input type="number" name='rating.stars' placeholder='rating stars'/>
                <input type="number" name='rating.count' placeholder='rating count'/>
            </div>
            
        </div>
        <div className="add-product-name flex-col">
            <p>product price</p>
           <input type="number" name='price' placeholder='pricecents'/>
            </div>
            <button type='submit' className="add-btn">add</button>
      </form>
    </div>
  )
}

export default Add;
