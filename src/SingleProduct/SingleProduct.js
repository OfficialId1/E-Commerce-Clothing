import React from 'react';
import { useParams,useLocation,useNavigate } from 'react-router-dom';
import data from "../Assets/AllProducts.json";
import './SingleProduct.css';
import imageObj from '../Assets/AllProducts';
import {FaStar,FaStarHalf} from 'react-icons/fa';
import { useState,useEffect } from 'react';

const {shirts} = data;
const {pants} = data;   
const {tShirts} = data;

export default function SingleProduct() {
    // extracting id from url by using useParams hook
    const { id } = useParams();

    // extracting value from url
    const queryString = useLocation().search;
    const queryParams = new URLSearchParams(queryString);
    const clothes=queryParams.get("edit");

    const navigate = useNavigate();

   const [cartProducts,setCartProducts]= useState([]);
    // let [count,setCount]= useState(0);

     // to fetch data from json server and then put data to products in array form
    useEffect(()=>{
       fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then(data=>setCartProducts(data))
      .catch((err) => console.log(err));
    });

    // function to add product to cart
    
    function addToCart(e) {
      e.preventDefault();

      console.log('product id',e.target.querySelector('.product-id').id);

      const productId=e.target.querySelector('.product-id').id;   
      const cartProduct=cartProducts.find(cP=>cP.id == productId);

      let product;

      if(cartProduct){
        fetch(`http://localhost:3000/products/${productId}`,{
            method:"PATCH",
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({quantity : cartProduct.quantity+1})
        }).then(res=>navigate("/Cart"))
      }

      else{
        if(productId.includes('s')){
          console.log('s shirt');
          product=shirts.find(s=>s.id == productId);
        }
        else if(productId.includes('p')){
          console.log('p pant');
          product=pants.find(p=>p.id == productId)
        }
        else{
          console.log('t t-shirt');
          product=tShirts.find(t=>t.id == productId); 
        }

        product.quantity=1;
    
        console.log('product1',product);

        // adding product to json server in products array by posting it
        fetch("http://localhost:3000/products", {
          method: "POST",
          headers: { "Content-Type": "Application/json" },
          body: JSON.stringify(product),
        })
        .then((res) => navigate("/Cart"))   
        .catch((err) => console.log(err));
      }
    }
      // ternary operator to check the category
      let cloth;

      { 
        clothes=='shirts' ? 
        cloth=shirts.find(s=>s.id==id) : 
        (clothes=='pants' ? cloth=pants.find(s=>s.id==id) : cloth=tShirts.find(s=>s.id==id))
      }
    

  return (
    <div className='single-product'>
        <div className='main'>
            <div className='photo'>
                <div>
                    <img src={imageObj[`${cloth.imageSrc}`]} alt=""/>
                    <img src={imageObj[`${cloth.imageSrc}`]} alt=""/>
                    <img src={imageObj[`${cloth.imageSrc}`]} alt=""/>
                    <img src={imageObj[`${cloth.imageSrc}`]} alt=""/>
                </div>
                <img src={imageObj[`${cloth.imageSrc}`]} alt="" style={{width:'300px'}}/>
            </div>

            <div className='details'>
                <div className='title'>{cloth.title}</div>
               
                <h3 className='brand'>{cloth.brand}</h3>

                <div style={{color:'gold',fontSize:'14px'}}>
                  <FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStarHalf></FaStarHalf>
                </div><br />

                <h4 className='price'>Rs {cloth.price}</h4><br />

                <div style={{fontSize:'15px',color:'#333'}}>
                    Up your look with this handsome shirt. This is the perfect fall
                    when you put it with a pair of jeans and a lightweight jacket 
                    to enjoy the crisper weather.
                </div><br />

                <form onSubmit={addToCart}>
                    <button className='add-to-cart'>Add To Cart</button>
                    <div className='product-id' id={cloth.id} hidden></div>
                </form><br />

                <div className='specifications'>   
                    <h3>Product Specification</h3>
                    <div>Closure : Button</div>
                    <div>Fit : Regular</div>
                    <div>Material : Cotton</div>
                </div>
            </div> 
        </div>
    </div>
  )
}
