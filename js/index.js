const app = document.getElementById("app");

const listData = [];

const orderList = document.createElement("ol");

const listWrapper = document.createElement("div");

const list1 = document.createElement("li");
list1.appendChild(document.createTextNode("test1"));

const list2 = document.createElement("li");
list2.appendChild(document.createTextNode("test2"));

const list3 = document.createElement("li");
list3.appendChild(document.createTextNode("test3"));

listWrapper.append(list1);
listWrapper.append(list2);
listWrapper.append(list3);

app.append(listWrapper);
