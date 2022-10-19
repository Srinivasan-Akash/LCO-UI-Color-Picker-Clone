let color_box = document.querySelectorAll("div")
color_box.forEach(item => {
    item.style.backgroundColor = item.id
    item.addEventListener("click", () => getColorCode(item))
})

function getColorCode(element){
    console.log(element.id)
    navigator.clipboard.writeText(element.id);
    displayCopied(element)
}

function displayCopied(element){
    element.innerText = "Copied ✅"
    setTimeout(() => {
        element.innerText = ""
    }, 1500)
}