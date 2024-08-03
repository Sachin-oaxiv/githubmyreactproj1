import Header from "./Header";
import Footer from "./Footer";
import Contn from "./Contn";
import './App.css'
import React,{ useState } from 'react'
import Additem from "./Additem";


function App() {
  const [items,setItems]=useState([

    {
     id:1,
     checked:true,
     item:"Practice Coading"
    },
    {
     id:2,
     checked:false,
     item:"sing music"
    },
    {
     id:3,
     checked:false,
     item:"watch Tv"

    }
 ]);
 
 
 const HandleCheck =(id)=>{
   const listitems =items.map((item) =>
   item.id===id ? {...item,checked:!item.checked} : item)
   setItems(listitems)
   localStorage.setItem("todo_list",JSON.stringify(listitems))
           
 }
 const deleteitems =(id)=>{
   const DeleteItem = setItems(items.filter(item => item.id !== id));
   localStorage.setItem("todo_list",JSON.stringify(DeleteItem))

 };

 
  return (
    <div className="App" >
      
    <Header title ="REMINDER!"/>
    <Additem/>
    <Contn      
      items={items}
      handleCheck={HandleCheck}
      deleteitem={deleteitems}
      />
    <Footer
       len={items.length}/>
      
    </div>
  );
}

export default App;
