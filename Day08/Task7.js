const invertedPyramid = (n) =>{
  for(let i=n; i>=1; i--){
    let row = "";
    for(let s=1; s<=n-i; s++){
      row += " ";
    }

    for(let j=1; j<=i; j++){
      row += "* ";
    }

    console.log(row);
  }
};
invertedPyramid(5);
