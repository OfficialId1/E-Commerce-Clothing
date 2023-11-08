import React, { useState } from 'react';
import { useEffect } from 'react';
import './Cart.css';
import imageObj from '../Assets/AllProducts'; 
import { FaMinus, FaPlus } from 'react-icons/fa';

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

    // function to update product quantiy
    function updateQuantity(quantity,productId,change){
      {change == 'plus' ? quantity+=1 : quantity-=1}

      {quantity == 0 ? remove(productId) : 
       fetch(`http://localhost:3000/products/${productId}`,{
            method:"PATCH",
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({quantity})
        }).then(res=>setCount(++count))
      }
    }
    
  return (
    <div className='cart'>
      <div className='cart-left-section'>
        {products==0 && <h1>No Products!!!</h1> }

        {products.map(product=>(
          <div key={product.id} className='card'>
            <div>
              <img src={imageObj[`${product.imageSrc}`]} alt="" />
            </div>

            <div style={{position:'relative'}}>
              <div className='brand'>{product.brand}</div>
              <div>{product.title}</div>
              <div style={{color:'#777'}}>Rs {product.price}</div>
              
              <div id='buttons-box'>
                <span onClick={()=>remove(product.id)} id='remove-cart-item'>Remove</span>
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <span onClick={()=>updateQuantity(product.quantity,product.id,'minus')}>
                  <FaMinus/>
                </span>
                <span style={{border:'none',cursor:'text'}}>{product.quantity}</span>
                <span onClick={()=>updateQuantity(product.quantity,product.id,'plus')}>
                  <FaPlus/>
                </span>
              </div>
            </div>  

            <div>
              <strong>Total Price</strong>
              <div style={{color:'crimson'}}>Rs {product.price*product.quantity}</div>
            </div>

            <div hidden>{totalAmount = totalAmount + product.price*product.quantity}</div>
          </div>
        ))}
      </div>

      <div className='cart-right-section'>
        <h4 style={{borderBottom:'2px solid #777',padding:'10px'}}>Total Amount</h4>
        <h4 style={{marginTop:'20px',color:'red'}}>Rs {totalAmount}</h4>
      </div>
    </div>
  )
}
