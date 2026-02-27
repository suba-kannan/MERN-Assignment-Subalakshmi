const array = [1, 2, 3, 4, 5];
const findNum = 7;

const index = array.indexOf(findNum);

if (index !== -1) {
  console.log("Index:", index);
} else {
  console.log("Not Found");
}
