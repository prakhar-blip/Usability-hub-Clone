var signin=document.getElementsByClassName("signin")
console.log(signin)
btn.onclick=function () {
    if(ext==0)
    {
        id.style.border = "1px solid"
        id.style.height="300px"
        
        id.style.width="300px"
        id.style.transition = "all 2s"
        ext =1
        
    }
    else{
        id.style.height="0px"
        id.style.width="0px"
        setTimeout(function(){
        id.style.border = "none"
            
        },2000)
        ext=0
    }
   

}