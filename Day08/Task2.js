const rectangle = (rows,cols) =>{
  for(let i=1; i<=rows; i++){
    let row = "";
    for(let j=1; j<=cols; j++){
      row += "* ";
    }
    console.log(row);
  }
};
rectangle(3,6);
