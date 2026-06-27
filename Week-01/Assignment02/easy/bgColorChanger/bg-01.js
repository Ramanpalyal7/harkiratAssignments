
// Dom
const redBtn= document.querySelector("#redBtn");
const blueBtn=document.getElementById("blueBtn");
const resetBtn=document.getElementById("resetBtn");
const body=document.querySelector("body");

redBtn.addEventListener("click", function()
{
    body.style.backgroundColor="red";
})

blueBtn.addEventListener("click",function(){
    body.style.backgroundColor="blue";
})

resetBtn.addEventListener("click",function(){
    body.style.backgroundColor="White";
})


//Custom button added .

const btnCollector=document.querySelector(".color-Collector");
const inputField=document.querySelector("#inputField");
const addBtn=document.querySelector(".addBtn");

    function isValidColor(color)
    {
        const newEle=document.createElement("div");
        newEle.style.color=color;
       
        if(newEle.style.color !=="")
        {
            return true;
        }
        else{
            return false;
        }

    }

    addBtn.addEventListener("click", function()
{
    const newBtn =inputField.value.trim();

    if(newBtn ==="")
    {
        alert("Please Enter the Button Name!!")
        return ;
    }

    if(isValidColor(newBtn))
    {
        //color is true continue.
    }
    else{
        alert("Enter the correct color ");
        return;
    }


    const addBtn=document.createElement("button");
    addBtn.textContent=newBtn;
    addBtn.style.backgroundColor=newBtn;


    addBtn.classList.add("customBtn");
    btnCollector.appendChild(addBtn);
    inputField.value="";

})

//event delegation

// btnCollector.addEventListener("click",event(
//    const colors= event.target.textContent;
//     body.style.backgroundColor=colors;


// ))

btnCollector.addEventListener("click",function(event){

if(event.target.classList.contains("customBtn"))
{
    const newColor=event.target.textContent.trim();
    body.style.backgroundColor=newColor;
}

})