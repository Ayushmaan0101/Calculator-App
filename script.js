document.addEventListener("DOMContentLoaded", function (){
    const display = document.getElementById("display");
    const grid = document.querySelector(".grid")

    grid.addEventListener("click", function(e){
        const target = e.target;

        if (target.tagName === "BUTTON"){
            const buttontext = target.textContent;

            if(buttontext === "C"){
                display.value = "";
            
            }else if (buttontext === "."){
                display.value += buttontext;
            }else if (buttontext === "="){

                try{
                    display.value = eval(display.value)
                }catch (error){
                    display.value = "Error"
                }
            }else {
                display.value += buttontext;
            }
        }
    })
})