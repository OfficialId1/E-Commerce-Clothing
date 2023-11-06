import React from 'react';
import {Link } from "react-router-dom";
import './Home.css';
import imageObj from '../Assets/AllProducts';

// the static.json file contains product details in json format.
import data from "../Assets/AllProducts.json";

// destructuring
const {shirts} = data;
const {pants} = data;
const {tShirts} = data;

export default function Home({setActive}) {
  // 'setActive' state is passed as props from Navbar so that we can know the active link

  // to show active link (in this case it is given font color yellow)
  // the link 'Home' is treated as btn1 and passed to setActive
  setActive('btn1');

  
    
  return (
    <div className='home'>
      <div className='category-box'>
        <h2 style={{width:'100%',height:'100px'}}>
          Shirts
        </h2>

        {
          shirts.map((shirt)=>(
            <div className='card'>
              <form>
                <div className='image-box'>
                  <img className='image' src={imageObj[`${shirt.imageSrc}`]} alt=""/>
                  {/* <button className='add-to-cart'>Add To Cart</button> */}
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
              <form >
                <div className='image-box'>
                  <img className='image' src={imageObj[`${pant.imageSrc}`]} alt=""/>
                </div>
                <div className='brand'>{pant.brand}</div>
                <div className='title'>{pant.title}</div>
                <div className='price'>Rs {pant.price}</div> 
                <div className='product-id' id={pant.id} hidden></div>
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
              <form>
                <div className='image-box'>
                  <img className='image' src={imageObj[`${tShirt.imageSrc}`]} alt=""/>
                </div>
                <div className='brand'>{tShirt.brand}</div>
                <div className='title'>{tShirt.title}</div>
                <div className='price'>Rs {tShirt.price}</div> 
                <div className='product-id' id={tShirt.id} hidden></div>
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
