const app = document.getElementById("app");

const listData = ["l1", "l2"];

const listWrapper = document.createElement("div");
const orderList = document.createElement("ol");

const printData = () => {
  for (let i = 0; i < listData.length; i++) {
    addData(listData[i]);
  }
};

const addData = (listText) => {
  const list = document.createElement("li");
  list.appendChild(document.createTextNode(listText));
  listWrapper.append(list);
};

printData();

app.append(listWrapper);

// const app = document.getElementById("app");

// const listData = ["l1", "l2"];

// const orderList = document.createElement("ol");

// const listWrapper = document.createElement("div");

// for (let i = 0; i < listData.length; i++) {
//   if (listData[i] !== undefined) {
//     const list1 = document.createElement("li");
//     list1.appendChild(document.createTextNode(listData[i]));
//     listWrapper.append(list1);
//   }
// }
// app.append(listWrapper);
