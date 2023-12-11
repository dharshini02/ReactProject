export const Footer=({length})=>{
       

    return(
       <div className="footer">
       <footer>
            <h2>
                {length} list {(length===1)?"item" :"items"}
            </h2>
       </footer>
           
       </div>
    )
}