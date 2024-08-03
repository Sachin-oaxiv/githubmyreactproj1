import React from 'react'
import { Liitems } from './Liitems'
export const ItemsList = ({items,handleCheck,deleteitem}) => {
  return (
        <ul>
        {items.map((item)=>(
          <Liitems
           item={item}
           key={item.id}
           handleCheck={handleCheck}
           deleteitem={deleteitem}
           />
        ))}
       
      </ul>
      )
    }
    
  
