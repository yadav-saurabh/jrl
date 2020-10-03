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


// Get the modal
const modal = document.getElementById("myModal");


// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
addBtn.onclick = function() {
modal.style.display = "none";
clearUI();
listData.push(userData);
printData();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
printData();

listWrapper.append(orderList);
app.append(listWrapper);
app.append(addBtn);
