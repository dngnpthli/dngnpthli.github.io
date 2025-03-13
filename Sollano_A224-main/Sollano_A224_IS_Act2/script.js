const txtTodoItem = document.getElementById("txtTodoItem")
const btnAddTask = document.getElementById("btnAddTask")

let todos ={}

function display()
{
    for(let i=0;i<todos.length;i++)
    {
        console.log(todos[i])
    }
}

btnAddTask.addEventListener("click", ()=>{
    console.log(txtTodoItem.value)
    todos.push(txtTodoItem.value)
    console.log(todos)
})
todos.push("Task 1")
todos.push("Task 2")
todos.push("Task 3")

//console.log(todos)
//console.log(todos.length)
//console.log(todos)
//console.log(todos.length-1)
//let index = 2
//console.log(todos[index])

for(let i=0;i<todos.length;i++)
{
    console.log(todos[i])
}