// // Example 1: Image change on mouseover & mouseout

// function showImg(event) {

//   if (event.type === "mouseover") {
//     event.target.src = "https://quickinsure.s3.ap-south-1.amazonaws.com/uploads/static_page/a83d207a-a933-41ac-a446-db9d23682693/Ktm%20Upcoming%20Bikes%20In%20India%202023%20New%20Launches%20And%20Bike%20Insurance.png";
//   } else {
//     event.target.src = "https://deinfa.com/wp-content/uploads/2024/06/A-Guide-to-Electric-Cars-in-Pakistan-Featured-Image.png";
//   }
// }

// Example 2: Link color change
// function Colorchange(){
//  document.getElementById("link").style.backgroundColor = "red"
//  }


// Example 3: Paragraph click event


function Semore(){
    var detail = "Pakistan is a large country with many details..."
    document.getElementById("para").innerText = detail
}


//  Example 4: Input focus & blur
function TextFocus(){
    document.getElementById("textfield").style.background = "red"
    
}


function Submit(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    
    if(name == "" && email == ""){
        alert("Please fill both input filed")
    }

    if(!email.includes(".")){
        alert("please add (.)")
    }

    if(!email.includes("@")){
        alert("please add (@)")
    }

}


function ShowImg(){
  let car = document.getElementById("car")
  car.style.cssText = "width:200px; height:350px; border:2px solid ; border-radius:5px ; margin:10px; padding:10px"
}
