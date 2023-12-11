import Lists from "./Lists"
 
export const Itemlist=({items,handleChange,handleDelete})=>{
    return(
        <div>
            <ul>
            {items.map((item) => (
             <Lists item={item}
                        key={item.id}
                        handleChange={handleChange}
                        handleDelete={handleDelete}
                        
             />
            )
           ) }
               
          </ul>
    
         
          </div>
             )
    
}