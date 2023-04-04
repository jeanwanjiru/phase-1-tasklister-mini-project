 document.addEventListener("DOMContentLoaded", () => { 
 document.querySelector('form').addEventListener('submit',(e) => {
e.preventDefault()
handleToDo(e.target.new_todo.value)
 })
});
function handleToDo(todo){
    let p =document.createElement('p')
    let btn = document.createElement('button')
}