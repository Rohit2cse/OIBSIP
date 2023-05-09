let result=document.getElementById('input');
let buttons=document.querySelectorAll('button');

let string="";
let ar=Array.from(buttons);
ar.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            try{
                string=eval(string);
                result.value=string;
            }
            catch(error){
                alert("invalid")
            }
        }
        else if(e.target.innerHTML == 'AC'){
            string="";
            result.value=string;
        }
        else if(e.target.innerHTML == 'CL'){
            string = string.slice(0,-1);
            result.value=string;
        }
        else if(e.target.innerHTML == '√'){
            string= Math.sqrt(string);
            result.value=string;
        }
        else{
            string +=e.target.innerHTML;
            result.value= string;
        }
    })
})
