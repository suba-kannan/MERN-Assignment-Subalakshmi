import fs from 'fs'

export const files = ()=>{

    fs.writeFile("file.txt","Example to create a file using fs", (error)=>{

        if(error){
            console.log(error);
            return
            
        }

        console.log("New file is created and the text is written inside it");
        
    })

    fs.readFile("file.txt","utf-8",(error,data)=>{
        if(error){
            console.log(error);
            return
            
        }
        console.log("Read file:",data);
        
    })
}