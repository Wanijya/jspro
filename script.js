//How to loop an arrya
howToLoop = function () {
  var arr = [1, 2, 3, 4, 5];
  arr.forEach(function (val) {
    console.log(val);
  });
};
// howToLoop();

//How to loop an arrya and do something with each element

howToLoopAndDoSomething = function () {
  var arr = [1, 2, 3, 4, 5];
  arr.forEach(function (val) {
    console.log(val * 2);
  });
};
// howToLoopAndDoSomething();