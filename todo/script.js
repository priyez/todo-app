let formEntry,
	addButton, 
	todoList,
	 List; 
 formEntry = document.querySelector('.add-form');
 addButton = document.querySelector('.add-todo');
 todoList = document.querySelector('.todos');
 list = document.querySelectorAll('.todos li'); 
var del=document.querySelector('.delete');
var dell=document.querySelector('.dust')
 var date,
     content,
     myDate,
     datestring;
 date=document.querySelector('.date');
 content=document.querySelector('.todoList');
 myDate= new Date();
 datestring=myDate.toLocaleDateString();
date.innerHTML=datestring;
let listLength = list.length;

const splash=document.querySelector('.intro');

document.addEventListener('DOMContentLoaded', (e)=>{ 
	setTimeout(()=>{
		splash.classList.add('display-none')
	},  2000);
	})

var todosArray= localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) :[]

localStorage.setItem('todos', JSON.stringify(todosArray));


var storage=JSON.parse(localStorage.getItem('todos'));
const todoApp = (text) => {

    const html = `<li>
                    <input type="checkbox" id="todo_${listLength}" />
                    <label for="todo_${listLength}">${text}
                    </label>
                    <span class="border"></span>
                  </li>`
    todoList.innerHTML += html;

};

let addTodos=(event)=> {
    event.preventDefault();
    todosArray.push(formEntry.add.value);

  localStorage.setItem('todos', JSON.stringify(todosArray));
    const text = formEntry.add.value.trim();
    if (text.length) {
        listLength = listLength + 1; 
        todoApp(text);
        text='';
    }

}

for (var i = 0; i < storage.length; i++) {
	todoApp(storage[i]);
}
formEntry.addEventListener('submit', addTodos);
addButton.addEventListener('click', addTodos);



dell.addEventListener('click', ()=>{
	localStorage.removeItem('todos');
	while(todoList.parentElement){
		todoList.remove(todoList.parentElement);
	}
})
