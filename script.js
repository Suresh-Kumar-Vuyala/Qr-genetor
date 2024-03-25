var url="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="


const input=document.querySelector("#input")
const button=document.querySelector("button")

const parent=document.querySelector(".form")


button.addEventListener("click",()=>{
    const image=document.querySelector("img")
    if(image!=undefined){
        image.remove()
    }
    if(input.value!=""){
      //  console.log("entered")
          let newElement=document.createElement("img")
          newElement.src=url+input.value;
          
        
          setTimeout(()=>{
     
            
            parent.insertBefore(newElement,button)
            newElement.scrollIntoView({behavior:"smooth"})
          },1000)
         

    }
    else{
       // console.log(input.val)
        input.style.animationPlayState="running"
        
        setTimeout(()=>{
            input.style.animationPlayState="paused" 
        },1000)
        
    }
})


