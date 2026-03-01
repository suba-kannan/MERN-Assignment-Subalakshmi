const duplicates = (array) =>{
    const result = array.filter((value,index) => array.indexOf(value)===index);
    console.log(result);

}
duplicates([3,1,2,2,2,3,4,4,5]);
