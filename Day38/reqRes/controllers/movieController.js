export const movieCreate = (req,res)=>{

   const {id,movieName,movieCat,hero,heroin} = req.body

   try {
    const movie = {id,movieName,movieCat,hero,heroin}
   
    res.status(200).json({msg:"Successfully Added",data:movie})
   } catch (error) {
    res.status(500).json({msg:"Error in body"})
    
   }
}

export const moviegetbyParams = (req,res)=>{

    try{
        const id = req.params
        if(id==100){
          res.status(200).json({ msg: "Id received", id: id });
          return
        }

    }catch(error){
        res.status(500).json({msg:"Error in params"})
    }
}


export const movieFilter = (req,res)=>{

    try {
        const {movieName,movieCat}= req.query
        const movie = {movieName,movieCat}
        res.status(200).json({msg:"Query passed", data:movie})
    } catch (error) {
        res.status(500).json({msg:"Error in query"})
        
    }


}

export const movieToken = (req,res)=>{

    try {
        const token = req.headers.authorization;
        res.status(200).json({msg:"Token passed"})
    } catch (error) {

        res.status(500).json({msg:"Error in header"})
        
    }
}