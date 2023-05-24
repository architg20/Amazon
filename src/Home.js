import React from 'react';
import "./Home.css"
import Product from './Product';
function Home  ()  {
  return <div className="home">
       <div className="home_container">
         <img className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>
              
         <div className="home__row">
               <Product 
               id="19086"
               title='The Alchemist' price={140}
               image=    
      "https://m.media-amazon.com/images/I/410llGwMZGL._SX328_BO1,204,203,200_.jpg" 
                rating={3}
      /> 
               <Product
               id="20000"
               title='Pigeon by Stovekraft Amaze Plus Electric Kettle (14289) with Stainless Steel Body, 1.5 litre, used for boiling Water, making tea and coffee, instant noodles, soup etc. 1500 Watt (Silver)' price={549}
               image=    
      "https://m.media-amazon.com/images/I/51DGcy8eBCL._SX679_.jpg" 
                rating={4}
               />

               
         </div>

         <div className="home__row"> 
              <Product  
               id="20001"
               title='Apple iPhone 14(128 GB)' price={139900}
               image=    
               "https://m.media-amazon.com/images/I/31GmCJTD0GL._SY445_SX342_QL70_FMwebp_.jpg"
                rating={4}
              />
              <Product 
               id="20002"
               title='Apple Watch SE (2nd Gen) GPS 40mm Midnight Aluminium Case with Midnight Sport Band - Regular' price={28800}
               image=    
               "https://m.media-amazon.com/images/I/31IhYwtLhPL._SY445_SX342_QL70_FMwebp_.jpg"
                rating={4}

              /> 
              <Product 
              id="20005"
              title='Apple 2020 MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Grey' price={84900}
              image=    
              "https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg"
               rating={5}

              
              
              />
         </div>
         <div className="home__row">
               <Product
               id="20005"
               title='Xbox Series S' price={29990}
               image=    
                "https://m.media-amazon.com/images/I/71NBQ2a52CL._SX679_.jpg"
                rating={5}
/>
</div>
       </div>
  </div>
}

export default Home;