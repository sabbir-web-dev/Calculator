


const display = document.querySelector(".input");
const number = document.querySelectorAll("#number");
const backeBtn = document.querySelector("#backeBtn")

const iValue = '';

for(let i=0; i<number.length; i++){
    number[i].addEventListener("click",(e)=>{
        

        if(e.target.value == 'AC'){
           display.value= "";
           
        }
        else if(e.target.value == "DE"){
            let num = display.value;
            let DE = num.slice(0,-1);
            display.value = DE;
        }
        else if(e.target.value == "="){
            let scren = display.value;
            
            let out = eval(display.value);
            display.value = out;
            console.log(out)
            
        }
        else{
            display.value += e.target.value;
        }
       
    })
}

