let heart_btn=document.getElementsByClassName("heart_btn")
console.log(heart_btn)
let Quant=document.getElementsByClassName("Quant")
let plus_btn=document.getElementsByClassName("plus_btn")
let minus_btn=document.getElementsByClassName("minus_btn")
let deletee=document.getElementsByClassName("delete")

for (let i= 0; i < heart_btn.length; i++) {
    heart_btn[i].addEventListener("click",function()
    {
        if(heart_btn[i].style.color=="red")
        heart_btn[i].style.color="black"
    else{
     heart_btn[i].style.color="red"
    }
    })
    // plus_btn
    plus_btn[i].addEventListener("click",function()
    {
     Quant[i].value=Number(Quant[i].value)+1
    })
    // minus_btn
    minus_btn[i].addEventListener("click",function(){
        if(Number(Quant[i].value)>0){
            Quant[i].value=Number(Quant[i].value)-1
        }
    }
    
        )


    


}
    

