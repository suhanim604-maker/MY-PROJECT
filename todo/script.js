const input = document.getElementById("input")
const list = document.getElementById("list");

document.getElementById('addBtn').onclick=()=>{
    const li = document.createElement('li')
    li.innerHTML=`${input.value}`

    const deleteBtn = document.createElement('button')
    deleteBtn.innerText="X"
    
    deleteBtn.onclick=()=>{
        li.remove();
    }

    const update = document.createElement('button')
    update.innerText="edit"

    update.onclick=()=>{
        
        li.firstChild.textContent= prompt("edit task",li.firstChild.textContent.trim())
    }

    
    list.appendChild(li)
    li.appendChild(deleteBtn);
    li.appendChild(update);

    input.value=""
};

