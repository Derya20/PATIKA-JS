
let valueArray = localStorage.getItem('value') ? JSON.parse(localStorage.getItem('value')) : [];

let isEmpty = text => text.trim().length > 0;

function newElement() {

    let TASK_DOM = document.querySelector("#task");
    let LIST_DOM = document.querySelector("#list");

    if (!isEmpty(TASK_DOM.value)) {
        $('.error').toast('show')
    } else {
      if (TASK_DOM.value === valueArray) {
        throw new Error("cannot be add the same contents") ;
      }

        addItem(LIST_DOM, TASK_DOM)

        TASK_DOM.value = ""

        $('.success').toast('show');
    }


}

function addItem(listDOM, taskDOM) {

    const li = document.createElement("li");
    li.innerHTML = taskDOM.value
    listDOM.append(li)

    const btn = document.createElement("BUTTON");
    const t = document.createTextNode("X");
    btn.classList.add('bi', 'bi-trash3-fill', 'float-right', 'mr-4')
    btn.style.width = "30px"; btn.style.border = "none"; btn.style.height = "30px"; btn.style.backgroundColor = "#f78501";
   
    btn.onmouseover = () => btn.style.backgroundColor = "#d9d9d9";
    btn.onclick =  () => {
        li.remove() ;
        localStorage.removeItem("value") ;
    }

    btn.appendChild(t);

    li.append(btn)

    localStorage.setItem("value" , taskDOM.value) ;
    


}