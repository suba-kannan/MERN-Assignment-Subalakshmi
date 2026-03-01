const secondLargest = (array) =>{
    let large = -Infinity; // to assign largest num is > any num
    let secondLarge = -Infinity;

    for(let num of array){
        if(num > large){ //check if num is > large nuim
            secondLarge = large;
            large = num;
        }else if(num!==large && num>secondLarge){
            secondLarge = num;
        }
    }
    console.log(secondLarge);
    
}
secondLargest([653,22,9,32,836,3]);