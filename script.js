
let scr=document.getElementById("screen")
let btn=document.querySelectorAll("button");
let screenValue=""
for(let item of btn){
  item.addEventListener("click",(e)=>{
  text=e.target.innerText;
  console.log(text)
 
  if(text=="X"){
   text="*"
   screenValue +=text
   scr.value=screenValue;
  }
   else if(text=="c"){
   screenValue=""
   scr.value=screenValue 
  }
  else if(text=="="){
   scr.value= eval(screenValue);
  }
  else{
   screenValue +=text;
   scr.value=screenValue;
  }
  
 })
}

