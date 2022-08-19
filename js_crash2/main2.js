// const sectionTodo = document.querySelector(".todo-section");
// classList tells the number of properties.
// console.log(sectionTodo.classList);
// adding class to element using js
// sectionTodo.classList.add('bg-dark');
// removing class from tag
// sectionTodo.classList.remove("container");
// to check class exist or not
// const ans = sectionTodo.classList.contains("container");
// console.log(ans);
// toggle adds if not available and removes if exists
// sectionTodo.classList.toggle('bg-dark');
// const header = document.querySelector('.header');
// console.log(header.classList);
// browser reads css top-down browser will apply the last style it reads.


// creating html element and adding to the html file.


// inner Html
// const todoList = document.querySelector('.todo-list');
// console.log(todoList.innerHTML);
// todoList.innerHTML = "<li>New 1 Todo</li>";
// this changes entire html
// this one adds and keeps the old
// todoList.innerHTML += "<li>Lala</li>";
// todoList.innerHTML += "<li>Lala lala</li>";
// but this affects the performance as it renders everything again.
// it should be used only when you want add entirely new everything.

// adding new elements
// const newTodoItem = document.createElement("li");
// const newTodoItemText = document.createTextNode("Teach Me"); 
// newTodoItem.textContent = "Teach Me";
// const todoList = document.querySelector('.todo-list');
// newTodoItem.append(newTodoItemText);
// todoList.append(newTodoItem);
// todoList.prepend(newTodoItem);
// todoList.appendChild(newTodoItem);
// console.log(newTodoItem);

// const todo1 = document.querySelector('.todo-list li');
// todo1.remove();

// inserting using before and after the element
// const newTodoItem = document.createElement("li");
// const newTodoItemText = document.createTextNode("Teach Me");
// const todoList = document.querySelector('.todo-list');
// todoList.before(newTodoItem);


