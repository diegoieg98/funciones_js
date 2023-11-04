document.addEventListener("keydown", function(event) {
    
    div = document.querySelector("#key")
    
    if (event.key === "a" || event.key === "A") {
        div.style.backgroundColor = "pink"
        console.log("rosado");
    }else if(event.key === "s" || event.key === "S") {
        div.style.backgroundColor = "orange"
        console.log("orange");
    }else if (event.key === "d" || event.key === "D") {
        div.style.backgroundColor = "lightblue"
        console.log("lightblue");
    }
});

document.addEventListener("keydown", function(event) {
    
    div = document.querySelector("#key2")
    
    if (event.key === "q" || event.key === "Q") {
        div.style.backgroundColor = "purple"
        console.log("purple");
    }else if(event.key === "w" || event.key === "W") {
        div.style.backgroundColor = "gray"
        console.log("gray");
    }else if (event.key === "e" || event.key === "E") {
        div.style.backgroundColor = "brown"
        console.log("brown");
    }
});