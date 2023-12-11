

export const Apprequest = async(url='',optionObj=null,errmsg=null) => {
    try{
        const response= await fetch(url,optionObj)
        if(!response.ok) throw Error("please reload page")
    }
    catch(err){
        errmsg=err.Message
    }
    finally{
        return errmsg
    }
}
