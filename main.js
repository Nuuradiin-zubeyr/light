// let h1Element =  document.getElementById("title")

// let buttonElement = document.getElementsByTagName("button")[0]
// let pElement = document.getElementsByClassName("Describtion")[0]
// let form = document.querySelector("form")
// console.log(buttonElement)
// console.log(pElement)
// console.log(form)
// console.log(h1Element)

// let title =document.querySelector("#title")
// let Describtion=document.querySelector("#Describtion")
// let Down = document.querySelector("#Down")
// Down.innerHTML="View All"
// title.innerHTML ="This is Js..."
// Describtion.innerHTML="Hello world"
// Describtion.style.color= "red"
// Down.style.background="red"
// let button = document.querySelector("#Btn")

// button.addEventListener("click", function (){
//     document.body.style.backgroundColor = "red"
// })

let light =document.querySelector("#light")
let OnBtn =document.querySelector("#OnBtn")
let OffBtn =document.querySelector("#OffBtn")

OnBtn.addEventListener("click", function(){
    light. style.backgroundColor = "yellow"
    OnBtn.style.backgroundColor ="black"
    OffBtn.style.backgroundColor = ""
    
})
OffBtn.addEventListener("click", function(){
    light.style.backgroundColor = "white"
    OffBtn.style.backgroundColor = "black"
    OnBtn.style.backgroundColor =""
})
