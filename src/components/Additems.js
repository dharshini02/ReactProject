import {FaPlus} from 'react-icons/fa'
import { useRef } from 'react'
export const Additems=({newItem,setNewItem,handleSubmit})=>{
    const inputRef=useRef()
    return(
        <form onSubmit={handleSubmit} className="addinputform">
           <label className="additems">Add Items</label>
            <input type="text"
             ref={inputRef}
            value={newItem}
            className="inputbox"
            onChange={(e)=>{setNewItem(e.target.value)
                      }
            }
             />
             <button type="submit" className="additembtn" onClick={()=>inputRef.current.focus()}><FaPlus/></button>
        </form>
    )
}