import {FaTrashAlt} from "react-icons/fa"
function Lists({item,handleChange,handleDelete}){
    return(
        <div>
               <li className="item" key={item.id}>
                  <input type="checkbox"
                        checked={item.checked}
                        onChange={()=>handleChange(item.id)}/>
                    <label className="listname" onDoubleClick={()=>handleChange(item.id)} style={(item.checked)?{textDecoration:"line-through"}:null}>{item.item}</label>
                    <FaTrashAlt className="trash" onClick={()=>handleDelete(item.id)}/>
                </li>
        </div>
    )
}
export default Lists