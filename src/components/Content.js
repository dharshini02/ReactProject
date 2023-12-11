import  {Itemlist } from "./Itemlist"

export const Content=({items,handleChange,handleDelete})=>{
    
    
    return( 
        <>
        {(items.length)? 
            (
             <Itemlist items={items}
                    handleChange={handleChange}
                    handleDelete={handleDelete} />
             )
         :
             (<p>list is empty</p>)
          } 
        </>
            
    
    )
}