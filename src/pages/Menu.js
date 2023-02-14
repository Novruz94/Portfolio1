import React  from 'react';
 import { MenuList } from '../helper/MenuList';
 import { Link } from 'react-router-dom';



const Menu = ()=> {

    return (
      <div className='menu'>
          <h1 className='menuTitle'>Bizim Menyu</h1>
          <div className='menuList'>
            {
              MenuList?.map(( menuItem, index )=>(
                
                    <Link to={`menyuƏlavələri/${menuItem.id}`}>
                <div key={index} className='menuItem'>
                   <div> <img src={menuItem.image} alt={menuItem.name}/> </div>
                   <h3>{menuItem.name}</h3>
                   <p>{menuItem.price}</p>
                </div>  
                    </Link>
                         
                ))
            }
          </div>
      </div>
    )

}
 
export default Menu;



