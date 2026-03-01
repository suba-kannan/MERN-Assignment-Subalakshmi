const countCharacters = (str) =>{
  let count = {};
  for(let char of str){
    if(count[char]) {
      count[char]++; //if already seen the char then char++
    }else {
      count[char] = 1; //if char comes first count=1
    }
  }
  return count;
};

console.log(countCharacters("countcharacter"));
