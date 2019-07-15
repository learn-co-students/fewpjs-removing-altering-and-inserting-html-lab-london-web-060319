// Write your code here!
let main = document.getElementById("main")
main.remove()

const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.innerHTML = "Flatiron School is the champion!";
newHeader.className = "victory";