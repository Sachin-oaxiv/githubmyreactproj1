import './App.css' 
import { ItemsList } from './ItemsList';

const Contn = ({items,handleCheck,deleteitem}) => {
  
  return(   
    <main>
       {(items.length)?(
       <ItemsList
        items={items}
        handleCheck={handleCheck}
        deleteitem={deleteitem}
        />
      
    ):(
      <p>Your list is empty</p>
    )
    }
    </main>
      )
    
}



export default Contn







// click function
/*const handleclick = (e) =>{
  console.log(e.target.innerText)
}
return (
<main>
<p>let's {namechange()} money</p>
<button onClick={(e) =>handleclick(e)}>Next page</button>*/

// USESTATE:
/*const [count,setcount]=useState(0);

function increamentfun() {
        setcount(()=>count +1)
}
function decrementfun(){
          setcount(()=>count -1)
}
   
  return (
    <main>
    <p>let's {namechange()} money</p>
    <button>Next page</button>
    <button onClick={decrementfun}>-</button>
    <span>{count}</span>
    <button onClick={increamentfun}>+</button>
    </main>
  )
}

USESTATE using name:
  const ram =["subscribe"];

const [name, setName]=useState(ram);

function increamentfun() {
        setName("Subscribed")
}
   
  return (
    <main>
    <p>let's {namechange()} money</p>
    <button>Next page</button>
    <button onClick={increamentfun}>{name}</button>
    </main>
  )
}

export default Contn*/


/*
usestate name change:
const Contn = () => {
  function namechange(){
    const names=["grow","earn","gain",];
    const int = Math.floor(Math.random()*3);
    setName(names[int])
}
const [name,setName]=useState("grow")
   
   
  return (
    <main>
    <p>let's {name} money</p>
    <button onClick={()=>namechange()}>Next page</button>
    </main>
  )
}*/

/*to do list
const [items,setItems]=useState([

  {
   id:1,
   checked:true,
   item:"Practice Coading"
  },
  {
   id:2,
   checked:true,
   item:"sing music"
  },
  {
   id:3,
   checked:true,
   item:"watch Tv"

  }
]);

const handleCheck =(id)=>{
 const listitems =items.map((item) =>
 item.id===id ? {...item,checked:!item.checked} : item)
 setItems(listitems)
 localStorage.setItem("todo_list",JSON.stringify(listitems))
            
         
}
const deleteItem = (id) => {
 setItems(items.filter(item => item.id !== id));
};

return(
 <main>
   <ul>
     {items.map((item)=>(
       <li className='item' Key={item.id}>
         <input
         type="checkbox"
         onChange={() => handleCheck(item.id)}
         checked={item.checked}
         />
         <label>{item.item}</label>
         <button onClick={() => deleteItem(item.id)}><IoTrash/></button>
         
       </li>

     ))}
    
   </ul>

 </main>
)
}*/


/*
select and keys:
import React, { useState } from 'react'
import { IoTrash } from "react-icons/io5";
import './App.css'

const Contn = () => {
  

  const [items,setItems]=useState([

     {
      id:1,
      checked:true,
      item:"Practice Coading"
     },
     {
      id:2,
      checked:true,
      item:"sing music"
     },
     {
      id:3,
      checked:true,
      item:"watch Tv"

     }
  ]);
  
  const handleCheck =(id)=>{
    const listitems =items.map((item) =>
    item.id===id ? {...item,checked:!item.checked} : item)
    setItems(listitems)
    localStorage.setItem("todo_list",JSON.stringify(listitems))
            
  }
  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
    localStorage.setItem("todo_list",JSON.stringify(deleteItem))

  };

  return(
    <main>
      <ul>
        {items.map((item)=>(
          <li className='item' Key={item.id}>
            <input
            type="checkbox"
            onChange={() => handleCheck(item.id)}
            checked={item.checked}
            />
            <label style = {(item.checked)? {textDecoration: 'line-through'}:null}
             onDoubleClick={()=> handleCheck(item.id)}>{item.item}</label>
            <button onClick={() => deleteItem(item.id)}><IoTrash/></button>
            
          </li>

        ))}
       
      </ul>

    </main>
  )
}


export default Contn

*/