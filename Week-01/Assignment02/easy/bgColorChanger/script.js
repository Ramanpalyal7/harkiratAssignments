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

function isValidColor(color)
{
    const test= document.createElement("div");
    test.style.color=color;

    if(test.style.color !==" ")
    {
        return true;
    }
    else
    {
        return false;
    }
    // return test.style.color !=="";


}



addButton.addEventListener("click",function(){

    const inputValue=inputField.value.trim();

    if(inputValue==="")
    {
        alert("Please Enter the Button Name");
        return;
    }

    if(isValidColor(inputValue)){
        //color is correct , continue creating button
    }
    else{
        alert("Wrong color is added !");
        return;
    }


    //another way to write check the wrong case first
    // if(!isValidColor(inputValue))
    // {
    //     alert("Wrong color is added !");
    //     return;
    // }

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


















// -----  Two features to add in this : after revise and make again

// 1. add color only if it is valid otherwise alert message check perplexity ai CharacterData
// 2. add color also by click enter key .













// Yes — className replaces the whole class string, 
// while classList.add() adds a new class without removing 
// the existing ones.

// box.classList.add("active");
// box.classList.remove("active");
// box.classList.toggle("active");

// add() adds a class.
// remove() removes a class.
// toggle() adds the class if it’s missing, otherwise removes it.

// In event delegation, you attach one listener to a parent instead 
// of many listeners to each child. When a child button is clicked,
//  the click bubbles up to the parent, and inside the function you 
// check which child was actually clicked using event.target