let string = "";
let button = document.querySelectorAll(".button");
Array.from(button).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    }
    else if (e.target.innerHTML == "C") {
      string = "";
      document.querySelector("input").value = string;
    }
    else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  })
})

  //or however you are calling your method
function handlebackspace(event)
{
  alert("hiiii");
  console.log(event);
   var KeyID = event.keyCode;
   switch(KeyID)
   {
      case 8:
      alert("backspace");
      break; 
      case 46:
      alert("delete");
      break;
      default:
      break;
   }
}

