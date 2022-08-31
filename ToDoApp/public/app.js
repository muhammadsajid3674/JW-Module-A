// var input = document.getElementById('input');
// var textstore = document.getElementById('textstore')
// var remove =document.getElementById('Remove')
// function add1(){
//     var listItems = document.createElement('li')
//     listItems.innerText=input.value;
//     textstore.appendChild(listItems)
//     input.value="";
//     remove.addEventListener('click' , function (){
//         textstore.removeChild(listItems);

//     })
//     listItems.addEventListener('click' , function (){
//         textstore.removeChild(listItems);

//     })
// }
var main = []
var userInput = document.getElementById("input")
var addedValue = document.getElementById("textstore")
function add() {
  var obj = {
    value: userInput.value,
    date:
    new Date().getHours() +
    ":" +
    new Date().getMinutes() +
    ":" +
    new Date().getSeconds(),
  }
  main.push(obj)
  render()
}
function render() {
  addedValue.innerHTML = " "
  for (let i = 0; i < main.length; i++) {
    addedValue.innerHTML += `<div style="margin: 5px 0px;"><span><b>${main[i].value}</b>, ${main[i].date}</span>
                             <span><button class="btn btn-success" onclick=editBtn(${i})>Edit</button>
                             <button class="btn btn-success" onclick=deleteBtn(${i})>Delete</button></span></div>`
    userInput.value = " "
  }
  console.log(main)
}
function editBtn(i){
  var a = prompt("New text", main[i].value)
  main[i].value = a;
  render()
}
function deleteBtn(i){
  main.splice(i, 1)
  render()
}

function delet(){
  addedValue.remove()
  render()
}