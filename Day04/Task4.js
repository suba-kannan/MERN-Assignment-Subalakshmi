const checkBoolean = (data)=>{
    const value = Boolean(data);
    if (value){                       
        console.log("Truthy:", data);
        
    }else{
        console.log("Falsy:", data);
        
    }
}
checkBoolean(7.89);
// when it is  a boolean value js always checks the value whether it is truthy or falsy(in conditions)