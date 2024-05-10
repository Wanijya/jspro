// call, apply & bind
// ye teen tareeka hai functions ko call karne ke, kisi object ko this maan kar.

const obj = {name: "Wani"};
// call:-
// function abcd(){
//     console.log(this);
// }
// abcd.call(obj)

// apply:- jb koii function parameter maang rha ho
// function abcd(a,b,c){  
//     console.log(this, a,b,c);
// }
// abcd.apply(obj, [1,2,3])

// bind:- bind function ko chalata nhi hai balki ek new function deta hai return kr ke jis ko aap baad me chala skte ho.
function abcd(){
    console.log(this);
}
const baadmechalanekeliyefunc = abcd.bind(obj);
baadmechalanekeliyefunc();