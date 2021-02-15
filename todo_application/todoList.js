

//Global Variables
const toDoForm = document.toDoForm;
const todoUL = document.getElementById("todoUL")
const toDo = [];
let indexDelete = 0;

//Event Listener to load data
toDoForm.addEventListener('submit', (event)=>{
    event.preventDefault();  
    let title = toDoForm.title.value;
    let description = toDoForm.description.value; 
    
    toDo.push({
        title: title,
        description: description, 
        id: "toDo"+indexDelete      
    })
    inputToDo();
    indexDelete += 1;
    console.log(toDo)
})

//Functions
inputToDo = (toDoId) =>{
    const div = document.createElement("div");
    const toDoTitle = document.createElement("li");
    const toDoDiscript = document.createElement("li");
    
    const checkComplete = document.createElement("INPUT");
    checkComplete.setAttribute("type", "checkbox");
    checkComplete.classList.add("checkMe");
    checkComplete.value ="toDo"+indexDelete;

    const checkMeLable = document.createElement("LABEL");
    checkMeLable.classList.add("labelCheck");
    checkMeLable.textContent = "Done"; 

    div.classList.add("formResultDiv");
    toDoTitle.classList.add("toDoTitle");
    toDoDiscript.classList.add("toDoDiscript");

    toDoTitle.innerHTML = `${toDoForm.title.value}`;   
    toDoDiscript.innerHTML = `-${toDoForm.description.value}`;
    
    div.appendChild(toDoTitle);
    div.appendChild(toDoDiscript);
    div.append(checkComplete);
    div.append(checkMeLable);

    const deleteIcon = document.createElement("i");        
    deleteIcon.className="far fa-times-circle fa-2x";

    const deleteMe = document.createElement("button");
    deleteMe.value = "toDo"+indexDelete;
    deleteMe.appendChild(deleteIcon);

    div.appendChild(deleteMe);
    todoUL.appendChild(div);
    toDoForm.reset();

    //Complete event listener
    checkComplete.addEventListener('change', ()=>{                    
        if(checkComplete.checked){
            toDoTitle.style.textDecoration = "line-through";
            toDoDiscript.style.textDecoration = "line-through";
        }else{
            toDoTitle.style.textDecoration = "none";
            toDoDiscript.style.textDecoration = "none";
        }
    }, false);

    //delete event listner    
    deleteMe.addEventListener("click", ()=>{
    deleteItem(deleteMe.value); 
    })
}

deleteItem = (index)=>{
    let toDelete;    
    toDelete = toDelete =toDo.findIndex( i => i.id === index);
    todoUL.removeChild(todoUL.childNodes[toDelete]); 
    toDo.splice(toDelete, 1);
}