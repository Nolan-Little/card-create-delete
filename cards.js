let textArea = document.querySelector("#cardEntry")
let printDiv = document.querySelector(".article--container")
let create = document.querySelector("#entryButton")

createCard = (num) => {
  let container = document.createElement("article")
  container.classList.add("card")
  container.id = `card--${num}`
  
  let text = document.createElement("p")
  
  let deleteButton = document.createElement("button")
  deleteButton.innerText = "Delete"
  deleteButton.classList.add("delete--button")
  deleteButton.id = `delete--${num}`
  
  text.innerText = textArea.value
  
  container.appendChild(text)
  container.appendChild(deleteButton)
  printDiv.appendChild(container)
}

deleteParent = (event) => {
  if(event.target.className === "delete--button"){
    printDiv.removeChild(event.target.parentNode)
  }
}




create.addEventListener("click", () => {
  let counter = printDiv.childNodes.length + 1
  createCard(counter)
  textArea.value = ""
  let article = document.getElementById(`card--${counter}`)

  article.addEventListener("click", (event) => {
    deleteParent(event)
  })
})