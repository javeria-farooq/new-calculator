let buttons = document.querySelectorAll(".buttons")
let input = document.querySelector(".input")

buttons.forEach((button)=> {
    button.addEventListener("click", (evt)=> {
      if(evt.target.innerHTML == "=") {
        input.value = eval(input.value)
      }

      else if(evt.target.innerHTML == "AC") {
        input.value = ""
      }

      else if(evt.target.innerHTML == "DE") {
        input.value = input.value.slice(0, input.value.length-1)
      }
      else{
        input.value = input.value + evt.target.innerHTML;
      }
    })
})