// let addbtn = document.getElementById('Addbtn')

// addbtn.addEventListener('click' , Addcourses)

let Addbtn = document
  .getElementById("Addbtn")
  .addEventListener("click", Addcourses);
let ul = document.getElementById("ul");

function Addcourses(e) {
  //   // alert('clicked')
  if (ul.children[0].className == "emptyMsg") {
    ul.children[0].remove();
  }
  let currentbtn = e.currentTarget;
  let currentInput = currentbtn.previousElementSibling;
  // alert(currentInput.value)
  let newaddvalue = currentInput.value;

  let NewLi = document.createElement("li");
  // NewLi.classList.add('list-group-item')
  NewLi.className = "list-group-item d-flex justify-content-between";
  NewLi.innerHTML = `<h4 class="flex-grow-1">${newaddvalue}</h4>
<button class="btn btn-outline-success mx-2"  onclick="Edit(this)">Edit</button>
<button class="btn btn-outline-warning" onclick="Remove(this)">Remove</button>`;

  // ul.appendChild(NewLi)
  ul.append(NewLi);
}

function Remove(currElement) {
  currElement.parentElement.remove();
  if (ul.children.length <= 0) {
    let newEmptyMsg = document.createElement("H3");
    newEmptyMsg.classList.add("emptyMsg");
    newEmptyMsg.textContent =
      "Nothing added till now. Please add Something here!";
    ul.append(newEmptyMsg);
  }
}




function Edit(currentElement) {
  // alert('edited')
  if(currentElement.textContent ="Edit"){
    currentElement.textContent ="Complete";
    let currChapter = currentElement.previousElementSibling.value;
    let currentheading = document.createElement("h3");
    currentheading.className = "flex-grow-1";
    currentheading.textContent = currChapter;
    currentElement.parentElement.replaceChild(currentheading,currentElement.previousElementSibling);
  }
   else {
    currentElement.textContent ="Edit";
    let currChapter = currentElement.previousElementSibling.textContent;

    let currInput = document.createElement("input");
    currInput.type = "text";
    currInput.placeholder = "Chapter Name";
    currInput.className = "form-control";
    currInput.value = currChapter;

    currentElement.parentElement.replaceChild(
      currInput,
      currentElement.previousElementSibling
    );
  }
}
