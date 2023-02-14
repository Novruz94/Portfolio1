import React, { useState, useEffect } from 'react';
import {MenuList} from '../helper/MenuList';
import { useParams } from 'react-router-dom';


const MenuDetails = ()=> {
   const { id } = useParams();
   const [ menuItem, setMenuItem] = useState(null);
   
   useEffect(() => {
        // eslint-disable-next-line eqeqeq
        const filtered = MenuList.filter(menuitem => menuitem.id == id);
        if (filtered.length) {
            setMenuItem(filtered[0]);
        }
    },[id]);
        
       return(
            <div className='details'>
                {
              menuItem !== null && 
             
              <div  className='informations'>
                  <img src={menuItem.image} alt={menuItem.name}/>
                  <h3>{menuItem.name}</h3>
                  <span> {menuItem.price} m </span> 
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ex delectus placeat repudiandae, magni adipisci. Beatae non atque dolores soluta, culpa architecto eveniet quod facilis, sapiente aspernatur vero dolore fugit.</p>  
                      
              </div>
    
                } 
                 
             </div>
   );
}

export default MenuDetails;




































  
    
        
            

        

  
