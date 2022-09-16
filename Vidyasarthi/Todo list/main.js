let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

let instructionText = document.getElementById('intsruction-text')

addToDoButton.addEventListener('click', function(){
    if(inputField.value != ""){
        // toDoContainer.removeChild(instructionText);
        var paragraph = document.createElement('p');
        paragraph.classList.add('paragraph-styling')
        paragraph.innerHTML =inputField.value;
        toDoContainer.appendChild(paragraph);    
    }

    inputField.value = "";
    if(paragraph.style.textDecoration != "line-through"){
        paragraph.addEventListener('click',function(){
            paragraph.style.textDecoration = "line-through"; 
            paragraph.style.color = '#cf3f3f';
          
        })
    }else{
            paragraph.addEventListener('click',function(){
            paragraph.style.textDecoration = "solid";
            paragraph.style.color = 'white';
        })
    }
        
    paragraph.addEventListener('dblclick',function(){
        toDoContainer.removeChild(this);
    })  
    
   
  
})
