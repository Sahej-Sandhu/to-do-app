function onReady(){
  var toDos = [];
  var addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo(){
    var newToDoText = document.getElementById('newToDoText');
    toDos.push({
      title: newToDoText.value,
      complete: false
    });

    newToDoText.value = '';

    renderTheUI(toDos);
  }

  function renderTheUI(toDos){
    var toDoList = document.getElementById('toDoList');

    toDoList.innerHTML = '';

    toDos.forEach(function(toDo){
      var newLi = document.createElement('li');
      var checkbox = document.createElement('input');
      var deleteButton = document.createElement("button");

      checkbox.type = "checkbox";
      deleteButton.innerText = "Delete";

      newLi.innerHTML = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);

      deleteButton.onclick = deleteTask;
    });

  }

  var deleteTask = function(){
    console.log("Delete task...");
    //remove parent list item from the ul
    var newLi = this.parentNode;
    var ul = newLi.parentNode;
    ul.removeChild(newLi);
  }

  addToDoForm.addEventListener('submit', function(event){
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI(toDos);

}

window.onload = function() {
  alert("The window has loaded!");
  onReady();
};
