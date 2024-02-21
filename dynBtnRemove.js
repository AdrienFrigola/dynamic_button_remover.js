let buttons = document.querySelectorAll(".myBtns");

buttons.forEach(button =>{
    button.addEventListener("click", event =>{
        event.target.remove();
        buttons = document.querySelectorAll(".myBtns");
        console.log(buttons);
    })
})