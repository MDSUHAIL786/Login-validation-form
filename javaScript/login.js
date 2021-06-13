const form =document.querySelector("form");
efield=form.querySelector(".e");
eInput=efield.querySelector("input");
pfield=form.querySelector(".p");
pInput=pfield.querySelector("input");
form.onsubmit=(k)=>{
     k.preventDefault();
     if(eInput.value==""){
          efield.classList.add("effect","error");
     }else{
          msg();

     }
     if(pInput.value==""){
          pfield.classList.add("effect","error");
     }
     eInput.onkeyup=()=>{
          msg();
     }
     function msg(){
          let pattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
          if(!eInput.value.match(pattern)){
               efield.classList.add("error");
               let txt=form.querySelector(".error-txt");
               (eInput.value!="")? txt.innerText="Enter valid email":txt.innerText="Email cannot be empty";
               
          }else{
               efield.classList.remove("error");
               efield.classList.add("blue");
          }
         
     
     }
     setTimeout(()=>{
          efield.classList.remove("effect");
          pfield.classList.remove("effect");
     },500);
     pInput.onkeyup=()=>{
          
          if(pInput.value!=""){
               pfield.classList.remove("error");
          }else{
               pfield.classList.add("error");
          }
     }
     if(!efield.classList.contains("error") && !pfield.classList.contains("error")){
          // return true;
          window.location.href="";
          alert("thanks for your response.");
          
          // console.log("form submitted");
     }
}




