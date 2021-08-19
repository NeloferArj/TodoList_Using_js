//selectors
//13. create selectors
const todoInput = document.querySelector(".todo-input"); //hold shift + alt + down button to copy on the next line
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//31. add filter slectors
const filterOption = document.querySelector(".filter-todo");


//Event Listerners
//14. add event lsiterner for button
todoButton.addEventListener("click", addTodo);

//20. add deleteEvent listener
todoList.addEventListener("click", deleteTodo);

//32. add event listenser
filterOption.addEventListener("click",filterTodo);

//Functions
//21. delete fuction
function deleteTodo(e)
{
    //grab the item
    const item = e.target;

    //delete todo
    console.log(item.classList[0]);
    if(item.classList[0] === "trash-btn")
    {
      const todo = item.parentElement;
     // todo.remove(); //commented in till step 26.


      // 26. do fall animation
      todo.classList.add("fall");
      //27. go to css and impletement fall

      //28.atucally delete item once animation is done
      todo.addEventListener('transitionend',function(){
        todo.remove();
      });

      //29.go to html to implement filter for the list
    }
    
    //22. fix button in css

    //23. check box
    if(item.classList[0] === "complete-btn")
    {
      const todo = item.parentElement;
      todo.classList.toggle("completed"); //toggle means to go this class
    }
    // 24.go to css to implement completed class
}

//33. implement filter todo fuction
function filterTodo(event)
{
  const todos = todoList.childNodes;
  todos.forEach(function(todo){
    switch(event.target.value){
      case "all":
        todo.style.display = "flex"
        break;
      case "completed":
        if(todo.classList.contains("completed"))
        {
          todo.style.display = "flex";
        }
        else{
          todo.style.display= "none";
        }
        break;
      case "uncompleted":
        if(!todo.classList.contains("completed"))
        {
          todo.style.display = "flex";
        }
        else{
          todo.style.display= "none";
        }
        break;
    }
  });

  //34. implement local storage, I didnt for now but the video at 57mins shows how to do it
  //https://www.youtube.com/watch?v=Ttf3CEsEwMQ&ab_channel=DevEd
}




//15. add event handler
function  addTodo(event)
{
    event.preventDefault(); //stops page from refersing everytime the button is clicked

    //create a div that has todo item, delete button and checked button
    //create div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //create LI
    const newTodo = document.createElement("li");
    // 18. replace 'Hey' with todoInput.value
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //create check button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class = "fas fa-check"></i>'; //add a checked icon when the button is pressed
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

      //create trash button
      const trashButton = document.createElement('button');
      trashButton.innerHTML = '<i class = "fas fa-trash""></i>'; //add a checked icon when the button is pressed
      trashButton.classList.add('trash-btn');
      todoDiv.appendChild(trashButton);
    
    //16. now attach this div to do the atucal list from the selector
    todoList.appendChild(todoDiv);

    //17. style button is css

    //19. clear box after adding input value
    todoInput.value = '';
}

