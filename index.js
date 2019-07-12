// Write your code here!
const element = document.querySelector("main#main")
element.remove()

const newH1 = document.createElement("h1")
newH1.setAttribute("id", "victory")
const newContent = document.createTextNode("YOUR-NAME is the champion")

newH1.appendChild(newContent)
document.body.appendChild(newH1)


const newHeader = document.querySelector("h1#victory")