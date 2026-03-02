const invertedTriangle = (n) =>{
  for(let i=n; i>=1; i--){
    let row = "";
    for(let j=1; j<=i; j++){
      row += "* ";
    }
    console.log(row);
  }
};
invertedTriangle(5);
