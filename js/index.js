const app = document.getElementById("app");

const listData = [];

const listWrapper = document.createElement("div");
const addBtn = document.createElement("button");
addBtn.innerHTML = "add new todo";
const orderList = document.createElement("ol");

const printData = () => {
    for (let i = 0; i < listData.length; i++) {
        addData(listData[i]);
    }
};

const addData = (listText) => {
    const list = document.createElement("li");
    list.appendChild(document.createTextNode(listText));
    orderList.appendChild(list);
};

addBtn.onclick = () => {
    const userData = "data by user";
    listData.push(userData);
    addData(userData);
};

printData();

listWrapper.append(orderList);
app.append(listWrapper);
app.append(addBtn);