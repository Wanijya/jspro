// Closure
function Closure() {
  function OutSide() {
    var a = 1;
    console.log("This is Function 1: " + a);
    function Inside() {
      var a = 2;
      console.log("This is Function 2: " + a);
    }
    Inside();
  }
  OutSide();
}
Closure();


//Error handling
//try catch and throw
function ErrorHandler() {
  function d(a, b) {
    try {
      if (b == 0) {
        throw new Error("Can't divide by zero");
      } else {
        return a / b;
      }
    } catch (err) {
      console.log(err.message);
    }
  }
  console.log(d(10, 0));
}
ErrorHandler();