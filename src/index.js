document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form');
form.addEventListener('submit',(e)=>{
e.preventDefault();
const inputItem =document.querySelector('form > input#new-task-description').value;
 
const task = document.querySelector('#tasks');
 const li = document.createElement('li');
 li.innerText=inputItem
 task.appendChild(li);

});

});
