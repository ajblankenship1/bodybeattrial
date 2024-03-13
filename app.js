console.log("loaded");

document.querySelector("#symbols").addEventListener("click",(event) => {
   
    let element = document.querySelector(".definitions");

    if (element.style.maxHeight){
        element.style.maxHeight = "";
        document.querySelector(".expander").style.transform = "rotate(180deg)";
    }
    else{
        element.style.maxHeight= "2000px";
        document.querySelector(".expander").style.transform = "rotate(0deg)";
    }
})

//Circuit-Lineup Popboxes

let overPopbox = document.querySelector(".over-pop");
    let overButton = document.querySelector("#overview-tile");
    let warmPopbox = document.querySelector(".warm-pop");
    let warmButton = document.querySelector("#warmup-tile");
    let cOnePopbox = document.querySelector(".c1-pop");
    let cOneButton = document.querySelector("#c1-tile");
    let cTwoPopbox = document.querySelector(".c2-pop");
    let cTwoButton = document.querySelector("#c2-tile");
    let cThreePopbox = document.querySelector(".c3-pop");
    let cThreeButton = document.querySelector("#c3-tile");
    let coolPopbox = document.querySelector(".cool-pop");
    let coolButton = document.querySelector("#cooldown-tile");
    

document.querySelector("#overview-tile").addEventListener("click",() => {
  
   if (overPopbox.checkVisibility()){
        overPopbox.style.display = "none";
        overButton.style.backgroundColor = "#d6476b";
    }
    else{
        overPopbox.style.display = "flex";
        overButton.style.backgroundColor = "#1f8aa2";
        overButton.style.width = "100%";

      
        warmPopbox.style.display = "none";
        warmButton.style.backgroundColor = "#d6476b";
        warmButton.style.width = "80%"
        cOnePopbox.style.display = "none";
        cOneButton.style.backgroundColor = "#d6476b";
        cOneButton.style.width = "80%"
        cTwoPopbox.style.display = "none";
        cTwoButton.style.backgroundColor = "#d6476b";
        cTwoButton.style.width = "80%"
        cThreePopbox.style.display = "none";
        cThreeButton.style.backgroundColor = "#d6476b";
        cThreeButton.style.width = "80%"
        coolPopbox.style.display = "none";
        coolButton.style.backgroundColor = "#d6476b";
        coolButton.style.width = "80%";
    }
})

document.querySelector("#warmup-tile").addEventListener("click", () =>{
    
    if(warmPopbox.checkVisibility()){
        warmPopbox.style.display = "none";
        warmButton.style.backgroundColor = "#d6476b";
    }
    else{
        warmPopbox.style.display = "flex";
        warmButton.style.backgroundColor = "#1f8aa2";
        warmButton.style.width = "100%";

        overPopbox.style.display = "none";
        overButton.style.backgroundColor = "#d6476b";
        overButton.style.width = "80%"
        cOnePopbox.style.display = "none";
        cOneButton.style.backgroundColor = "#d6476b";
        cOneButton.style.width = "80%"
        cTwoPopbox.style.display = "none";
        cTwoButton.style.backgroundColor = "#d6476b";
        cTwoButton.style.width = "80%"
        cThreePopbox.style.display = "none";
        cThreeButton.style.backgroundColor = "#d6476b";
        cThreeButton.style.width = "80%"
        coolPopbox.style.display = "none";
        coolButton.style.backgroundColor = "#d6476b";
        coolButton.style.width = "80%";
    }
})

document.querySelector("#c1-tile").addEventListener("click", () =>{
    
    if(cOnePopbox.checkVisibility()){
        cOnePopbox.style.display = "none";
        cOneButton.style.backgroundColor = "#d6476b";
    }
    else{
        cOnePopbox.style.display = "flex";
        cOneButton.style.backgroundColor = "#1f8aa2";
        cOneButton.style.width = "100%";

        overPopbox.style.display = "none";
        overButton.style.backgroundColor = "#d6476b";
        overButton.style.width = "80%"
        warmPopbox.style.display = "none";
        warmButton.style.backgroundColor = "#d6476b";
        warmButton.style.width = "80%"
        cTwoPopbox.style.display = "none";
        cTwoButton.style.backgroundColor = "#d6476b";
        cTwoButton.style.width = "80%"
        cThreePopbox.style.display = "none";
        cThreeButton.style.backgroundColor = "#d6476b";
        cThreeButton.style.width = "80%"
        coolPopbox.style.display = "none";
        coolButton.style.backgroundColor = "#d6476b";
        coolButton.style.width = "80%";
    }
})

document.querySelector("#c2-tile").addEventListener("click", ()=>{
    
    if(cTwoPopbox.checkVisibility()){
        cTwoPopbox.style.display = "none";
        cTwoButton.style.backgroundColor = "#d6476b";
    }
    else{
        cTwoPopbox.style.display = "flex";
        cTwoButton.style.backgroundColor = "#1f8aa2";
        cTwoButton.style.width = "100%";


        overPopbox.style.display = "none";
        overButton.style.backgroundColor = "#d6476b";
        overButton.style.width = "80%"
        warmPopbox.style.display = "none";
        warmButton.style.backgroundColor = "#d6476b";
        warmButton.style.width = "80%"
        cOnePopbox.style.display = "none";
        cOneButton.style.backgroundColor = "#d6476b";
        cOneButton.style.width = "80%"
        cThreePopbox.style.display = "none";
        cThreeButton.style.backgroundColor = "#d6476b";
        cThreeButton.style.width = "80%"
        coolPopbox.style.display = "none";
        coolButton.style.backgroundColor = "#d6476b";
        coolButton.style.width = "80%";
    }
})

document.querySelector("#c3-tile").addEventListener("click", ()=>{
  
    if(cThreePopbox.checkVisibility()){
        cThreePopbox.style.display = "none";
        cThreeButton.style.backgroundColor = "#d6476b";
    }
    else{
        cThreePopbox.style.display = "flex";
        cThreeButton.style.backgroundColor = "#1f8aa2";
        cThreeButton.style.width = "100%";
       

        overPopbox.style.display = "none";
        overButton.style.backgroundColor = "#d6476b";
        overButton.style.width = "80%"
        warmPopbox.style.display = "none";
        warmButton.style.backgroundColor = "#d6476b";
        warmButton.style.width = "80%"
        cOnePopbox.style.display = "none";
        cOneButton.style.backgroundColor = "#d6476b";
        cOneButton.style.width = "80%"
        cTwoPopbox.style.display = "none";
        cTwoButton.style.backgroundColor = "#d6476b";
        cTwoButton.style.width = "80%"
        coolPopbox.style.display = "none";
        coolButton.style.backgroundColor = "#d6476b";
        coolButton.style.width = "80%";
    }
    })

document.querySelector("#cooldown-tile").addEventListener("click", () =>{

    if(coolPopbox.checkVisibility()){
        coolPopbox.style.display = "none";
        coolButton.style.backgroundColor = "#d6476b";
    }
    else{
        coolPopbox.style.display = "flex";
        coolButton.style.backgroundColor = "#1f8aa2";
        coolButton.style.width = "100%";

        overPopbox.style.display = "none";
        overButton.style.backgroundColor = "#d6476b";
        overButton.style.width = "80%"
        warmPopbox.style.display = "none";
        warmButton.style.backgroundColor = "#d6476b";
        warmButton.style.width = "80%"
        cOnePopbox.style.display = "none";
        cOneButton.style.backgroundColor = "#d6476b";
        cOneButton.style.width = "80%"
        cTwoPopbox.style.display = "none";
        cTwoButton.style.backgroundColor = "#d6476b";
        cTwoButton.style.width = "80%"
        cThreePopbox.style.display = "none";
        cThreeButton.style.backgroundColor = "#d6476b";
        cThreeButton.style.width = "80%";
    }
    })