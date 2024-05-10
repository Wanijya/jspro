// Closures :- 

//ek function jo return kare ek or function.

function abcd(){
    var a = 12;
    return function(){
        console.log(a); 
    }
}
var ans = abcd();
ans();