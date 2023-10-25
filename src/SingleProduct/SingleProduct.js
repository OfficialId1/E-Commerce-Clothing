import React from 'react';
import { useParams,useLocation } from 'react-router-dom';
import data from "../static.json";
import './SingleProduct.css';
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

const {shirts} = data;
const {pants} = data;   
const {tShirts} = data;

export default function SingleProduct() {
    // extracting id from url by using useParams hook
    const { id } = useParams();

    let imageObj={s1,s2,s3,s4,s5,s6,s7,s8,p1,p2,p3,p4,p5,p6,p7,p8,t1,t2,t3,t4,t5,t6,t7,t8};

    // extracting value from url
    const queryString = useLocation().search;
    const queryParams = new URLSearchParams(queryString);
    const clothes=queryParams.get("edit");

    let cloth;

    // ternary operator to check the category
    { clothes=='shirts' ? 
      cloth=shirts.find(s=>s.id==id) : 
      (clothes=='pants' ? cloth=pants.find(s=>s.id==id) : cloth=tShirts.find(s=>s.id==id))}

  return (
    <div className='single-product'>
        <h1 className='head'> Product Details </h1>

        <div className='main'>
            <div>
                <img src={imageObj[`${cloth.imageSrc}`]} alt=""/>
            </div>

            <div>
                <h3 className='brand'>{cloth.brand}</h3>
                <div className='title'>{cloth.title}</div>
                <h4 className='price'>Rs {cloth.price}</h4><br />
                <h3>Product Specification</h3>
                <div>Closure : Button</div>
                <div>Fit : Regular</div>
                <div>Material : Cotton</div>
            </div> 
        </div>
    </div>
  )
}
