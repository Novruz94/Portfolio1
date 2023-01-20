import React from 'react'
 import {MenuList} from '../helper/MenuList'
// import Banner1 from '../images/1beef.jpg'
// import Banner2 from '../images/2blackbean.jpg'
// import Banner3 from '../images/3chicken.jpg'
// import Banner4 from '../images/4turkey.jpeg'
// import Banner5 from '../images/5veggie.jpg'


function Menu() {
  return (
    // <div className='slider'>
    //    <div className='sliderContent'>

    //      <div className='sliderItem'>
    //       <img src={Banner1} alt=""/>
    //      </div>

    //      <div className='sliderItem'>
    //       <img src={Banner2} alt=""/>
    //      </div>

    //      <div className='sliderItem'>
    //       <img src={Banner3} alt=""/>
    //      </div>

    //      <div className='sliderItem'>
    //       <img src={Banner4} alt=""/>
    //      </div>

    //      <div className='sliderItem'>
    //       <img src={Banner5} alt=""/>
    //      </div>

    //    </div>
    // </div>
     <div className='menu'>
        <h1 className='menuTitle'>Our Menu</h1>
        <div className='menuList'>
            {MenuList.map((menuItem,key)=>{
                 return <div className='menuItem'>
                    <div> <img src={menuItem.image}  /></div>
                   <h3>{menuItem.name}</h3>
                   <p>{menuItem.price} TL</p>
                       </div>
            })}
        </div>
      
     </div>
  )
}

export default Menu
