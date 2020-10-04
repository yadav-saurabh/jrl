const app = document.getElementById("app");

/**
 * {
 *  id:
 *  title: ''
 *  desc: ''
 * }
 */
const todoListData = [];

/**
 * =========================
 *       MODAL
 * =========================
 */
const modal = document.createElement("div");
modal.classList = "modal";
modal.onclick = () => app.removeChild(modal);

const modalConatiner = document.createElement("div");
modalConatiner.classList = "modal-content";
modal.appendChild(modalConatiner);
modalConatiner.onclick = (e) => e.stopPropagation();

const form = document.createElement("form");
modalConatiner.appendChild(form);

const title = document.createElement("input");
form.appendChild(title);
title.name = "title";

const desc = document.createElement("input");
form.appendChild(desc);
desc.name = "desc";

const formBtn = document.createElement("button");
formBtn.innerHTML = "submit";
form.appendChild(formBtn);
form.onsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  formData.append("id", +todoListData[todoListData.length - 1]?.id + 1 || 0);

  const formObjData = Object.fromEntries(formData);
  todoListData.push(formObjData);
  addData(formObjData);

  console.log(todoListData);
  app.removeChild(modal);
  form.reset();
};

/**
 * =========================
 *       LIST
 * =========================
 */
//

const listWrapper = document.createElement("div");
const addBtn = document.createElement("button");
addBtn.innerHTML = "add new todo";
const orderList = document.createElement("ol");

const printData = () => {
  for (let i = 0; i < todoListData.length; i++) {
    addData(todoListData[i]);
  }
};

const onDelete = (list, id) => {
  todoListData.splice(
    todoListData.findIndex((e) => e.id === id),
    1
  );
  orderList.removeChild(list);
  console.log(todoListData);
};

const addData = ({ id, title, desc }) => {
  const list = document.createElement("li");
  const listTxt = document.createElement("p");

  const delBtn = document.createElement("button");
  delBtn.innerHTML = "delete";
  list.appendChild(delBtn);

  listTxt.innerHTML = `title: ${title} desc: ${desc}`;
  list.appendChild(listTxt);
  orderList.appendChild(list);

  delBtn.onclick = () => onDelete(list, id);
};

addBtn.onclick = () => {
  console.log("modal");
  app.appendChild(modal);
};

printData();

listWrapper.append(orderList);
app.append(listWrapper);
app.append(addBtn);
