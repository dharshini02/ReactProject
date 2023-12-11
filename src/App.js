import {Header} from './components/Header'
import {Content} from './components/Content'
import {Footer} from './components/Footer'
import { useState ,useEffect} from "react";

import './App.css';
import { Additems } from './components/Additems';
import { Apprequest } from './components/Apprequest';


function App() {
  const [items,setItems]=useState([]);
  const[fetcherror,setFetcherror]=useState(null);
  const[isloading,setLoading]=useState(true);
 const API_URL='http://localhost:3500/items'
  useEffect(()=>{
   const fetchitem=async()=>{
     try{
      const response=await fetch(API_URL);
      if(!response.ok) throw Error("Data Not recieve")
      const listItems=await response.json();
      setFetcherror(null)
      setItems(listItems)
     }
     catch(err){
        console.log(err.message)
     }
     finally{
      setLoading(false)
     }
   }
   setTimeout(()=>{
    (async()=> await fetchitem()) ()
   },2000)
   
  
  },[])

   const handleChange=async(id)=>{
    const listItems=items.map((item)=>(
        item.id===id ?{ ...item,checked:! item.checked}:item 
        ))
        setItems(listItems)
        const myItem=listItems.filter((item)=>item.id===id)
        const updateOption={
          method:'PATCH',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({checked:myItem[0].checked})
        }
        const requesturl=`${API_URL}/${id}`
        const result=await Apprequest(requesturl,updateOption)
        if(result) setFetcherror(result)
    

   }
  const handleDelete=async(id)=>{
   const listItems=items.filter((item)=>
   item.id!==id
    )
    setItems(listItems)
   const deleteOption={
    method:'DELETE'
   }
   const requesturl=`${API_URL}/${id}`
   const result=await Apprequest(requesturl,deleteOption)
   if(result) setFetcherror(result)
   }

   function handleSubmit(e){
      e.preventDefault()
       if(!newItem) return;
       console.log(newItem)
      addItems(newItem)
      setNewItem(' ')
     
   }
   
   const [newItem,setNewItem]=useState(' ')
   
   
  const addItems=async (item)=>{
    const id=items.length ? items[items.length-1].id+1:1;
    const addNewItem={id,checked:false,item}
    const listItems=[...items,addNewItem]
    setItems(listItems)
    const postOption={
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(addNewItem)
    }
    const result=await Apprequest(API_URL,postOption)
    if(result) setFetcherror(result)

  }
    
  return (
    <div className="App">
    <Header />
    <Additems newItem={newItem}
              setNewItem={setNewItem}
              handleSubmit={handleSubmit}
          
    />
   <main>
   {fetcherror && <p>Error:${fetcherror}</p> }
   {isloading && <p>Data is loading</p>}
    {!isloading && !fetcherror && <Content items={items}
          handleChange={handleChange}
          handleDelete={handleDelete}   

          />}
   </main>
    
   
    
    
     <Footer length={items.length}/>
    </div>
  );
}

export default App;
