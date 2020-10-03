const app = document.getElementById("app");
 
const taskTitles = [];
const taskDescripts = [];

const listWrapper = document.createElement("div");
listWrapper.id = "myModal";
listWrapper.className = "modal";

const divison = document.createElement("div");

const div1 = document.createElement("div");
div1.className = "modal-content";

const addBtn = document.createElement("button");
addBtn.innerHTML = "add new todo";

const addModalBtn = document.createElement("button");
addModalBtn.innerHTML = "Add New Task";

const orderList = document.createElement("ol");

const span = document.createElement("span");
span.className = "close";
span.appendChild(document.createTextNode("x"));
div1.appendChild(span);

var titleInput = document.createElement("input");
titleInput.setAttribute('type', 'text');

var taskInput = document.createElement("input");
taskInput.setAttribute('type', 'text');

// const p1 = document.createElement("p");
// p1.appendChild(document.createTextNode("Title task :"));
// p1.appendChild(titleInput);
// const p2 = document.createElement("p");
// p2.appendChild(document.createTextNode("Task description:"));
// p2.appendChild(taskInput);
// const p3 = document.createElement("p");
// p3.appendChild(addModalBtn);


const table = document.createElement("table");
const tr1 = document.createElement("tr");
const td1 = document.createElement("td");
const tr2 = document.createElement("tr");
const td2 = document.createElement("td");
const tr3 = document.createElement("tr");
//const td = document.createElement("td");
td1.appendChild(document.createTextNode("Title task :"));
td1.appendChild(titleInput);
td2.appendChild(document.createTextNode("Task description:"));
td2.appendChild(taskInput);
tr3.appendChild(addModalBtn);

// div1.appendChild(p1);
// div1.appendChild(p2);
// div1.appendChild(p3)
// listWrapper.append(div1);

tr1.appendChild(td1);
tr2.appendChild(td2);
table.appendChild(tr1);
table.appendChild(tr2);
table.appendChild(tr3);
div1.append(table);
listWrapper.append(div1); 

addBtn.onclick = () =>{
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];
  modal.style.display = "block";
}

const printData = () => {
  for (let i = 0; i < taskTitles.length; i++) {
    const list = document.createElement("li");
    list.appendChild(document.createTextNode(taskTitles[i]));
    divison.appendChild(list);
  }
};

var closing = document.getElementsByClassName("closing");
for (let i = 0; i < close.length; i++) {
  closing[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

addModalBtn.onclick = () => {
  const list = document.createElement("li");
  const taskTitle = titleInput.value;
  const taskDescript = taskInput.value;
  if(taskTitle === '' || taskDescript === ''){
    alert("You must write something!");
  }
  else{
   list.appendChild(document.createTextNode(taskTitle));
   list.appendChild(document.createTextNode(" : "))
   list.appendChild(document.createTextNode(taskDescript))
    taskTitles.push(taskTitle);
    taskDescripts.push(taskDescript);
    divison.appendChild(list);
    divison.appendChild(list);
    divison.appendChild(list); 
  }
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Delete");
  span.className = "closing";
  span.appendChild(txt);
  list.appendChild(span);

  for (let i = 0; i < closing.length; i++) {
    closing[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
};


span.onclick = () =>{
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}


//listWrapper.append(orderList);
//app.append("Enter task:", input);

divison.append(":) Title :  Description");
app.append(listWrapper);
app.append(divison);
app.append(addBtn);
