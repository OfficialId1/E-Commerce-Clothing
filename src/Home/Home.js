import React from 'react';
import { useNavigate,Link } from "react-router-dom";
import './Home.css';
import s1 from '../Assets/Shirt/1.png';
import s2 from '../Assets/Shirt/2.png';
import s3 from '../Assets/Shirt/3.png';
import s4 from '../Assets/Shirt/4.png';
import s5 from '../Assets/Shirt/5.png';
import s6 from '../Assets/Shirt/6.png';
import s7 from '../Assets/Shirt/7.png';
import s8 from '../Assets/Shirt/8.png';
import p1 from '../Assets/Pant/1.png';
import p2 from '../Assets/Pant/2.png';
import p3 from '../Assets/Pant/3.png';
import p4 from '../Assets/Pant/4.png';
import p5 from '../Assets/Pant/5.png';
import p6 from '../Assets/Pant/6.png';
import p7 from '../Assets/Pant/7.png';
import p8 from '../Assets/Pant/8.png';
import t1 from '../Assets/T-shirt/1.png';
import t2 from '../Assets/T-shirt/2.png';
import t3 from '../Assets/T-shirt/3.png';
import t4 from '../Assets/T-shirt/4.png';
import t5 from '../Assets/T-shirt/5.png';
import t6 from '../Assets/T-shirt/6.png';
import t7 from '../Assets/T-shirt/7.png';
import t8 from '../Assets/T-shirt/8.png';

// the static.json file contains product details in json format.
import data from "../static.json";

// destructuring
const {shirts} = data;
const {pants} = data;
const {tShirts} = data;

export default function Home({setActive}) {
  // 'setActive' state is passed as props from Navbar so that we can know the active link

  // to show active link (in this case it is given font color yellow)
  // the link 'Home' is treated as btn1 and passed to setActive
  setActive('btn1');

  const navigate = useNavigate();

  let imageObj={s1,s2,s3,s4,s5,s6,s7,s8,p1,p2,p3,p4,p5,p6,p7,p8,t1,t2,t3,t4,t5,t6,t7,t8};

  // function to add product to cart
  function addToCart(e) {
    e.preventDefault();

    // product contains product details as an object
    let product={
      brand:e.target.querySelector('.brand').innerText,
      title:e.target.querySelector('.title').innerText,
      price:Number((e.target.querySelector('.price').innerText).split(" ")[1]),
      image:e.target.querySelector('.image').src,
      id:Math.floor(Math.random()*1000)
    };

    // adding product to json server in products array by posting it
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(product),
    })
    .then((res) => navigate("/Cart"))   
    .catch((err) => console.log(err));
  }
    
  return (
    <div className='home'>
      <div className='category-box'>
        <h2 style={{width:'100%',height:'100px'}}>
          Shirts
        </h2>

        {
          shirts.map((shirt)=>(
            <div className='card'>
              <form  onSubmit={addToCart}>
                <div className='image-box'>
                  <img className='image' src={imageObj[`${shirt.imageSrc}`]} alt=""/>
                  <button className='add-to-cart'>Add To Cart</button>
                </div>
                <div className='brand'>{shirt.brand}</div>
                <div className='title'>{shirt.title}</div>
                <div className='price'>Rs {shirt.price}</div> 

                {/* the product card is made a link on clicking it we go to new page
                    which contains specific product detail */}
                <Link to={`/getProduct/${shirt.id}?edit=shirts`}>
                  <div id='linkDiv'></div>
                </Link>
              </form>
            </div>
          ))
        }
      </div>

      <div className='category-box'>
        <h2 style={{width:'100%',height:'100px'}}>
          Pants
        </h2>

        {
          pants.map((pant)=>(
            <div className='card'>
              <form  onSubmit={addToCart}>
                <div className='image-box'>
                  <img className='image' src={imageObj[`${pant.imageSrc}`]} alt=""/>
                  <button className='add-to-cart'>Add To Cart</button>
                </div>
                <div className='brand'>{pant.brand}</div>
                <div className='title'>{pant.title}</div>
                <div className='price'>Rs {pant.price}</div> 
                <Link to={`/getProduct/${pant.id}?edit=pants`}>
                  <div id='linkDiv'></div>
                </Link>
              </form>
            </div>
          ))
        }
      </div>

      <div className='category-box'>
        <h2 style={{width:'100%',height:'100px'}}>
          T-shirts
        </h2>

        {
          tShirts.map((tShirt)=>(
            <div className='card'>
              <form  onSubmit={addToCart}>
                <div className='image-box'>
                  <img className='image' src={imageObj[`${tShirt.imageSrc}`]} alt=""/>
                  <button className='add-to-cart'>Add To Cart</button>
                </div>
                <div className='brand'>{tShirt.brand}</div>
                <div className='title'>{tShirt.title}</div>
                <div className='price'>Rs {tShirt.price}</div> 
                <Link to={`/getProduct/${tShirt.id}?edit=tShirts`}>
                  <div id='linkDiv'></div>
                </Link>
              </form>
            </div>
          ))
        }
      </div>
    </div>
  )
}
