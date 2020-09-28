const app = document.getElementById("app");
 
const listData = [];

const listWrapper = document.createElement("div");

const addBtn = document.createElement("button");
addBtn.innerHTML = "add new todo";

const orderList = document.createElement("ol");

var input = document.createElement("input");
input.setAttribute('type', 'text');

const printData = () => {
  for (let i = 0; i < listData.length; i++) {
    const list = document.createElement("li");
    list.appendChild(document.createTextNode(listData[i]));
    listWrapper.appendChild(list);
  }
};

var close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

addBtn.onclick = () => {
  const list = document.createElement("li");
  const userData = input.value;
  if(userData === ''){
    alert("You must write something!");
  }
  else{
    list.appendChild(document.createTextNode(userData));
    listData.push(userData);
    listWrapper.appendChild(list); 
  }
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Delete");
  span.className = "close";
  span.appendChild(txt);
  list.appendChild(span);

  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
};

printData();

//listWrapper.append(orderList);
app.append("Enter task:", input);
app.append(listWrapper);
app.append(addBtn);