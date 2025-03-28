import one from "../assets/images/11.jpeg"
import two from "../assets/images/12.jpeg"
import three from "../assets/images/13.jpeg"
import four from "../assets/images/10.jpeg"
import five from "../assets/images/15.jpeg"
import six from "../assets/images/6.jpeg"
import seven from "../assets/images/14.jpeg"
import eight from "../assets/images/8.jpeg"
// import nine from "../assets/images/9.jpeg"
// import ten from "../assets/images/10.jpeg"
import React, { useEffect } from 'react';


function Product()
{
    useEffect(() => {
        document.title = "Image Gallery"; // Title Change
      }, []);
    
  return(
    <div class = "body">
    <div class = "head">
    <h1>Image-gallery</h1>
    <hr ></hr>
    </div>
       
    <div class="products">
    
        <div class = "box">
        <img src={one} alt ="one"></img>
        </div>
    
        <div class = "box">
        <img src={two} alt ="two"></img>
        </div>

        <div class = "box">
        <img src={three} alt ="three"></img>
        </div>

        <div class = "box">
        <img src={four} alt ="four"></img>
        </div>

        <div class = "box">
        <img src={five} alt ="five"></img>
        </div>

        <div class = "box">
        <img src={six} alt ="six"></img>
        </div>

        <div class = "box">
        <img src={seven} alt ="seven"></img>
        </div>

        <div class = "box">
        <img src={eight} alt ="eight"></img>
        </div>
        {/* <div class = "box">
        <img src={nine} alt ="nine"></img>
        </div>
        <div class = "box">
        <img src={ten} alt ="ten"></img>
        </div> */}
    </div>
    </div>
    )
  }

 export default Product 
