document.addEventListener('DOMContentLoaded', () => {
  
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    buildToDo(e.target.new_todo.value)
    form.reset()
    // console.log(e)
    // console.log(e.target); 
      // TGT - thing event is being acted on
    // console.log(e.target.value);
    // console.log(e.target.new_todo); 
      // id #new_todo
    // console.log(e.target.new_todo.value); 
  })
})

function buildToDo (todo) {
  // console.log(todo);
  let p = document.createElement('p')
  // console.log(p)
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  p.textContent = `${todo} `
  p.appendChild(btn)
  // console.log(p)
  document.querySelector('#todo_container').appendChild(p)
}

// event handler
function handleDelete(e){
  e.target.parentNode.remove
}