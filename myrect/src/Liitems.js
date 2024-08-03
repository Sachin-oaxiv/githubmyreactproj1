import React from 'react'
import { IoTrash } from "react-icons/io5";
export const Liitems= ({item,handleCheck,deleteitem}) => {
  return (
    <li className='item'>
    <input
    type="checkbox"
    onChange={() => handleCheck(item.id)}
    checked={item.checked}
    />
    <label style = {(item.checked)? {textDecoration: 'line-through'}:null}
     onDoubleClick={()=> handleCheck(item.id)}>{item.item}</label>
    <button onClick={() => deleteitem(item.id)}><IoTrash aria-label={`Delete ${item.item}`}/></button>
    
  </li>
    
  )
}
