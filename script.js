//HOF- Higher Order Functions
//map
function Map() {
  let num = [10, 20, 30, 40, 50, 60];
  let a = num.map((val) => {
    return val + 10;
  });
  console.log(num);
  console.log(a);
}
Map();

//filter
function Filter() {
  let num = [10, 20, 30, 40, 50, 60];
  let a = num.filter((val) => {
    if (val >= 10 && val <= 40) {
      return val;
    }
  });
  console.log(a);
  console.log(num);
}
Filter();

//reduce
function Reduce(){
    let num = [10,20,30,40,50,60]
    let sum = num.reduce((acc,num)=>{
        return acc + num;
    }, 0);
    console.log(sum);
}
Reduce();


