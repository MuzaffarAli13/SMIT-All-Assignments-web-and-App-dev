function Add_Book() {
    let input_value = document.getElementById("todoinput").value;
     let err_msg = document.getElementById("err_msg");
    if (input_value.trim() === "") {
         err_msg.innerText = "Please Enter valid Book"
    }
    
    else {
        err_msg.innerText = ""
        let ul = document.getElementById("todolist");
        let li = document.createElement("li");
        let text_data = document.createTextNode(input_value)
        li.appendChild(text_data)
        ul.appendChild(li)

        // add delet btn in li
        let edite_add_btn = document.createElement("button");
        let edit_btn_text = document.createTextNode("Edit")
        edite_add_btn.appendChild(edit_btn_text)
        li.appendChild(edite_add_btn)

        let delete_add_btn = document.createElement("button");
        let delete_btn_text = document.createTextNode("Delete")
        delete_add_btn.appendChild(delete_btn_text)
        li.appendChild(delete_add_btn)
        // css delete btn
        delete_add_btn.style.backgroundColor = "red"
        edite_add_btn.style.backgroundColor = "green"
        edite_add_btn.style.color = "white"
        edite_add_btn.style.border = "1px solid"

        // delete book
        delete_add_btn.onclick = function(){
            ul.removeChild(li)
        }
    }


    // clear input
    document.getElementById("todoinput").value = "";
}


