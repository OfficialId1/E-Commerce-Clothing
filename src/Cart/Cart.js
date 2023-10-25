import React, { useState } from 'react';
import { useEffect } from 'react';
import './Cart.css';

export default function Cart({setActive}) {
    setActive('btn4');

    let totalAmount=0;
    const [products,setProducts]= useState([]);
    let [count,setCount]= useState(0);

    // to fetch data from json server and then put data to products in array form
    useEffect(()=>{
       fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then(data=>setProducts(data))
      .catch((err) => console.log(err));
    },[count]);

    // function to delete product object from json server and ultimately the product is 
    // removed from cart
    function remove(id){
      fetch(`http://localhost:3000/products/${id}`,{
          method:"DELETE",
          headers:{'Content-Type':'application/json'}
      }).then(res=>setCount(++count))
    }
    
  return (
    <div className='cart'>
      <div className='cart-left-section'>
        {products==0 && <h1>No Products!!!</h1> }

        {products.map(product=>(
          <div key={product.id} className='card'>
            <div>
              <img src={product.image} alt="" />
            </div>

            <div style={{position:'relative'}}>
              <div className='brand'>{product.brand}</div>
              <div>{product.title}</div>
              
              <div id='remove-cart-item'>
                <span onClick={()=>remove(product.id)}>Remove</span>
              </div>
            </div>  

            <div>
              <strong>Price</strong>
              <div>{product.price}</div>
            </div>

            <div hidden>{totalAmount = totalAmount + product.price}</div>
          </div>
        ))}
      </div>

      <div className='cart-right-section'>
        <h4 style={{borderBottom:'2px solid #777',padding:'10px'}}>Total Amount</h4>
        <div style={{marginTop:'20px'}}>{totalAmount}</div>
      </div>
    </div>
  )
}
