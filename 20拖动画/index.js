const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')


for (const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('drop', dragDrop)
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
}


function dragDrop() {
    this.append(fill)
}


console.log();