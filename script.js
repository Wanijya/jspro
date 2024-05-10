// event delegation:-

document.querySelector("#parent");
parent.addEventListener("click", function(details) {
    if(details.target.id == "play"){
        console.log("play song")
    }
    else if(details.target.id == "pause"){
        console.log("pause song")
    }
})
