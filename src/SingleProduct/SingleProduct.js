import React from 'react';
import { useParams,useLocation,useNavigate } from 'react-router-dom';
import data from "../Assets/AllProducts.json";
import './SingleProduct.css';
import imageObj from '../Assets/AllProducts';
import {FaStar,FaStarHalf} from 'react-icons/fa';

const {shirts} = data;
const {pants} = data;   
const {tShirts} = data;

export default function SingleProduct() {
    // extracting id from url by using useParams hook
    const { id } = useParams();

    // let imageObj={s1,s2,s3,s4,s5,s6,s7,s8,p1,p2,p3,p4,p5,p6,p7,p8,t1,t2,t3,t4,t5,t6,t7,t8};

    // extracting value from url
    const queryString = useLocation().search;
    const queryParams = new URLSearchParams(queryString);
    const clothes=queryParams.get("edit");

    const navigate = useNavigate();

  // let imageObj={s1,s2,s3,s4,s5,s6,s7,s8,p1,p2,p3,p4,p5,p6,p7,p8,t1,t2,t3,t4,t5,t6,t7,t8};

  // function to add product to cart
  

    function addToCart(e) {
    e.preventDefault();

    // product contains product details as an object
    // let product={
    //   brand:e.target.querySelector('.brand').innerText,
    //   title:e.target.querySelector('.title').innerText,
    //   price:Number((e.target.querySelector('.price').innerText).split(" ")[1]),
    //   image:e.target.querySelector('.image').src,
    //   id:Math.floor(Math.random()*1000)
    // };

    
    console.log('product id',e.target.querySelector('.product-id').id);

    const productId=e.target.querySelector('.product-id').id;

    let product;;

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

    let cloth;

    // ternary operator to check the category
    { clothes=='shirts' ? 
      cloth=shirts.find(s=>s.id==id) : 
      (clothes=='pants' ? cloth=pants.find(s=>s.id==id) : cloth=tShirts.find(s=>s.id==id))}

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
                    <span style={{color:'#333',position:'relative',top:'-2px'}}>({Math.floor(Math.random()*500)} reviews)</span> 
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
