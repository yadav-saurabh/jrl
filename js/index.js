const app = document.getElementById("app");

const listData = [];

const listWrapper = document.createElement("div");
const addBtn = document.createElement("button");
addBtn.innerHTML = "add new todo";
const orderList = document.createElement("ol");

const printData = () => {
  console.log(listData);
  for (let i = 0; i < listData.length; i++) {
    addData(listData[i]);
  }
};

const addData = (listText) => {
  const list = document.createElement("li");
  list.appendChild(document.createTextNode(listText));
  orderList.append(list);
};

const clearUI = () => {
  orderList.innerHTML = "";
};

addBtn.onclick = () => {
  const userData = "data by user";
  clearUI();
  listData.push(userData);
  printData();
};

printData();

listWrapper.append(orderList);
app.append(listWrapper);
app.append(addBtn);
