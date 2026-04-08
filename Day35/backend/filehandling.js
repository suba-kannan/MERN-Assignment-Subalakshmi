import fs from 'fs'
import path from 'path'
  

export const filehandling= ()=>{

    const createPath = path.join("path")
    fs.mkdir(createPath,{recursive:true},(error)=>{
        if(error){

            console.log(error);
            return
            
        }
        console.log('Folder is created');
        
    })

    fs.writeFile(`${createPath}/sample.txt`, 'new file using path is created',(error)=>{
        if(error){
            console.log(error);
            return
            
        }
        console.log("File created");
        
    })

    fs.readFile(`${createPath}/sample.txt`,"utf-8",(error,data)=>{
        console.log('Read file:',data);
        
    })
}