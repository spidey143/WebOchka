alert("Привет друг");
const buttonOK = document.querySelector("#buttonOk");
const buttonClose = document.querySelector("#buttonClose");
buttonOK.addEventListener("click", ()=>{
    alert("ОК")
})

buttonClose.addEventListener("click", ()=>{
    alert("Закрываю....")
})