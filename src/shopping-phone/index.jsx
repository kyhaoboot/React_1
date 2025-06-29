import React, { useState } from 'react'
import Phone from './phone'
import Techdetail from './tech-detail'
import data from "./data.json"
export default function index() {
    const [listProduct, setListProduct] = useState(data);
    const [productDetail, setProductDetail] = useState(null);
    const renderListProduct = ()=>{
       return listProduct.map((product) =>{
            return <Phone key={product.maSP} product={product} getProduct={handleGetProduct}/>
        })
    }
    const handleGetProduct = (product)=>{
        console.log(product)
        return <Techdetail />
    }
  return (
    <div>
        <h1 className='text-5xl text-center'>Shopping Phone</h1>
        <div className='grid grid-cols-3 gap-5'>
            {renderListProduct()}
        </div>
        <Techdetail/>
    </div>
  )
}
