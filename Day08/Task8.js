const diamond = (n) =>{
  // upper part
  for(let i=1; i<=n; i++){
    let row = "";
    for(let s=1; s<=n-i; s++){
      row += " ";
    }
    for(let j=1; j<=i; j++){
      row += "* ";
    }

    console.log(row);
  }

  // lower part
  for(let i=n-1; i>=1; i--){
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
diamond(5);
