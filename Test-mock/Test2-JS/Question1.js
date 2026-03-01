const reverseString = (str)=>{
    let reverse = "";
    for (let i = str.length-1; i>=0; i--){ //i=3, i>=0
        reverse += str[i]; //3-> "" = ""+a => reverse = a
    
    }
    console.log(reverse);
}
reverseString("suba");
