/**
 * same as sumit branch
 * please refer branch sumit for the review 
 */
const addTodoModal = document.getElementById('myModal');
const userInputs = addTodoModal.querySelectorAll('input');
const toDoListItems = [];

let modal = document.getElementById('myModal');
let btn = document.getElementById('myBtn');
let span = document.getElementsByClassName('close')[0];

btn.onclick = function () {
  modal.style.display = 'block';
};

span.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

const renderNewModalEl = (id, title, desc) => {
  const ol = document.getElementById('todo-list');
  const newModalEl = document.createElement('li');
  newModalEl.textContent = ` Title : ${title}    Desc : ${desc}`;
  ol.append(newModalEl);

  const button = document.createElement('button');
  button.innerHTML = 'Delete ToDo';
  button.setAttribute('class', 'delBtn--danger');
  ol.append(button);

  /* action to perform when clicked on delete todo */
  button.addEventListener(
    'click',
    (deleteListHandle = () => {
      let arrayId;
      toDoListItems.map(function (el) {
        arrayId = el.id;
        if (id === arrayId) {
          removeByAttr(toDoListItems, 'id', id);
        }
      });
      ol.removeChild(newModalEl);
      ol.removeChild(button);
      // console.log(toDoListItems);
    })
  );
  /* function to remove elements from array object */
  let removeByAttr = function (toDoListItems, attr, value) {
    let i = toDoListItems.length;
    while (i--) {
      if (toDoListItems[i]
        && toDoListItems[i].hasOwnProperty(attr)
        && (arguments.length > 2 && toDoListItems[i][attr] === value)) {
        toDoListItems.splice(i, 1);
      }
    }
    return toDoListItems;
  }
};

/* To clear inputs of title and description after add todo is clicked*/
const clearTodoInput = () => {
  for (const usrInput of userInputs) {
    usrInput.value = '';
  }
};
/*
const closeTodoModal = () => {
  addTodoModal.classList.remove('visible');
}; */

/* to add items to array */
const addListHandler = () => {
  const title = userInputs[0].value;
  const desc = userInputs[1].value;
  if (title === '' || desc === '') {
    alert('please enter a valid title and desc');
  } else {
    const newTodo = {
      id: Math.random().toString(),
      title: title,
      desc: desc,
    };
    toDoListItems.push(newTodo);
    clearTodoInput();
    // closeTodoModal();
    /* to pass array elements to list */
    renderNewModalEl(newTodo.id, newTodo.title, newTodo.desc);
  }
};
const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', addListHandler);
