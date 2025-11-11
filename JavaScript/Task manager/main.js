function AddTask(){
    let task = document.getElementById("task");
    let errmsg = document.getElementById("err");
    let ul = document.getElementById("ul");
    let li = document.createElement("li")
   if(task.value.trim() == ""){
       errmsg.innerText = "please Enter Valid Task"
   }else{
    
    li.innerText = task.value
    ul.appendChild(li)
    
   }
}

