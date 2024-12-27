const king = document.querySelector(".chess-piece")
const squares = document.querySelectorAll(".square")
const infoDisplay = document.querySelector("#info")

king.addEventListener("drag", dragging)
king.addEventListener("dragstart", dragStart)

squares.forEach(squares => {
    squares.addEventListener("dragover", dragOver)
    squares.addEventListener("dragenter", dragEnter)
    squares.addEventListener("dragleave", dragLeave)
    squares.addEventListener("drop", dragDrop)
    squares.addEventListener("dragend", dragEnd)

})


let beingDragged 

function dragStart (e) {
    beingDragged = e.target
    console.log("dragging has started on " + beingDragged.id)
}
function dragging (e) {
    console.log("You are dragging a " + beingDragged.id)
    infoDisplay.textContent = "You are dragging a " + beingDragged.id 
}

function dragOver (e) {
    e.preventDefault()
    console.log("You are dragging something over " + e.target.classList)
}

function dragEnter (e) {
    e.target.classList.add("highlight")
    console.log("You are entering the space of " + e.target.classList)
}

function dragLeave (e) {
    console.log("You are leaving the space of " + e.target.classList)
    e.target.classList.remove("highlight")
}

function dragDrop (e) {
    e.target.append(beingDragged)
    e.target.classList.remove("highlight")
    console.log("You have dropped something into " + e.target.classList)
}

function dragEnd (e) {
    e.target.classList.add("target")
    setTimeout(() => e.target.classList.remove("target"), 100)
    console.log("The drag has ended in " + e.target.classList)
    infoDisplay.textContent = ""
}  