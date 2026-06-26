// Selecting the Element

const redBtn= document.querySelector(".redBtn");
const blueBtn= document.querySelector(".blueBtn");
const greenBtn= document.querySelector(".greenBtn");
const resetBtn= document.querySelector(".resetBtn");
const body=document.querySelector("Body");

body.style.backgroundColor="blue";
body.style.backgroundColor="green";
body.style.backgroundColor="white";

redBtn.addEventListener("click",function()
{
    
body.style.backgroundColor="rgb(231, 114, 114)";
})

blueBtn.addEventListener("click",function()
{
    body.style.backgroundColor="rgb(125, 175, 228)";
})

greenBtn.addEventListener("click",function(){

    body.style.backgroundColor="rgb(125, 255, 134)";
})

resetBtn.addEventListener("click",function()
{
    body.style.backgroundColor="rgb(255, 255, 255)";
})


// Creating Custom Button


const buttonCollector=document.querySelector(".buttonCollection");
const inputField= document.querySelector("#inputField");
const addButton= document.querySelector("#createButton");


addButton.addEventListener("click",function(){

    const inputValue=inputField.value.trim();

    if(inputValue==="")
    {
        alert("Please Enter the Button Name");
        return;
    }

    const newBtn=document.createElement("button");
    newBtn.textContent=inputValue;
    newBtn.style.background=inputValue;
    
    newBtn.classList.add("customBtn");
    buttonCollector.appendChild(newBtn);
    inputField.value="";


})

//-------------- Event Delgation -----------

    buttonCollector.addEventListener("click",function(event)
{
    if(event.target.classList.contains("customBtn"))
    {
        const colorName=event.target.textContent.trim();
        body.style.backgroundColor=colorName;

        
    }
   
})

// -------------  Two features to add in this : after revise and make again

// 1. add color only if it is valid otherwise alert message check perplexity ai CharacterData
// 2. add color also by click enter key .
