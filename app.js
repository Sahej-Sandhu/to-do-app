function onReady(){
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input for the checkbox
    let checkbox = document.createElement('input');

    // create delete button
    var deleteButton = document.createElement("button");

    // delete button needs to be modified a bit
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach it to the ul
    toDoList.appendChild(newLi);

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach a delete button to the li
    newLi.appendChild(deleteButton);

    //bind deltask to del button
    deleteButton.onclick = deleteTask;

    // empty the input
    newToDoText.value = '';

  });

  // Delete the existing task
  var deleteTask = function(){
    console.log("Delete task...");
    // remove parent list item from the ul
    var newLi = this.parentNode;
    var ul = newLi.parentNode;
    ul.removeChild(newLi);
  }

}

window.onload = function() {
  alert("The window has loaded!");
  onReady();
};
