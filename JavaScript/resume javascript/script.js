function ShowImg() {
    let img = document.getElementById("img_logo")
    img.style.display = (img.style.display === "block") ? "none" : "block";
    let btn_text = document.getElementById("img_btn")
    btn_text.innerText = (btn_text.innerText === "Hide img") ? "show Img" : "Hide img"
}

function Show_Exp(id) {
    let exp = document.getElementById(id)
    exp.style.display = (exp.style.display === "block") ? "none" : "block";
    let btn_text = document.getElementById("exp_btn")
    btn_text.innerText = (btn_text.innerText === "Hide Experience") ? "Show Experience" : "Hide Experience";
}


function Show_lang(id) {
    let exp = document.getElementById(id)
    exp.style.display = (exp.style.display === "block") ? "none" : "block";
    let lang_btn = document.getElementById("lang_btn")
    lang_btn.innerText = (lang_btn.innerText === "Hide Language") ? "Show Language" : "Hide Language";
}

function Show_Edu(id) {
    let exp = document.getElementById(id)
    exp.style.display = (exp.style.display === "block") ? "none" : "block";
    let lang_btn = document.getElementById("lang_btn")
    lang_btn.innerText = (lang_btn.innerText === "Hide Language") ? "Show Language" : "Hide Language";
}


function Submit(event) {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let check_email = email.includes("@") && email.includes(".")

    let name_err = document.getElementById("name_err");
    let email_err = document.getElementById("email_err");
    let msg_err = document.getElementById("msg_err");

    if (name === "" && email === "" && message === "") {
        msg_err.innerText = "Please fill all the fields";
        msg_err.style.color = "red";
    }
    else if (!name) {
       name_err.innerText = "Please fill Name fields";
       name_err.style.color = "red";
    }
    else if (!email) {
        email_err.innerText = "Please fill Email the fields";
        email_err.style.color = "red";
    }
    else if (!message) {
        msg_err.innerText = "Please fill Message fields";
        msg_err.style.color = "red";
    }
    else if (!check_email) {
        msg_err.innerText = "please Enter valid Email with @ and ."
        msg_err.style.color = "red"
    }
    else {
        alert("Thank You ")
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        msg_err.innerText = ""
        name_err.innerText = ""
        email_err.innerText = ""
    }
}

