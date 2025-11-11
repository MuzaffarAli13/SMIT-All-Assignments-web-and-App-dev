const { createElement } = require("react");

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
        // var text_data = document.createTextNode(input_value)
        li.innerHTML = input_value;
        ul.appendChild(li)

        // add delet btn in li
         // edite
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


        // delete book
        delete_add_btn.onclick = function () {
            ul.removeChild(li)
        }

       

    //    edite functionalty
        edite_add_btn.onclick = function(){

            

            let update_data = prompt("Update Task",li.childNodes[0].nodeValue) 
            
            li.childNodes[0].nodeValue = update_data
            console.log(li.childNodes[0].nodeValue);
            
        }
          
        // css
        edite_add_btn.style.backgroundColor = "green"
        edite_add_btn.style.color = "white"
        edite_add_btn.style.border = "1px solid"
    }

    // clear input
    document.getElementById("todoinput").value = "";
}


