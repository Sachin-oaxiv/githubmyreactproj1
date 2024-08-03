import React from 'react'
import {FaPlus} from'react-icons/fa'

const Additem = () => {
  return (
   <form className='addForm'>
   <label htmlFor="addItems">Add Items</label>
    <input
     autoFocus
     id = 'addItems'
     type="text"
     placeholder='Add item'
     />
     <button
     type='submit'
     aria-label='Add Item'>
        <FaPlus/>
        
     </button>
   </form>
  )
}

export default Additem