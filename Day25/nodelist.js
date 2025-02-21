const itemList = document.querySelector("#itemlist")
const nodeForm = document.querySelector("#node_form")
const inputText = document.querySelector("#input_text")
const heading = document.querySelector("h1")


nodeForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    const element =  document.createElement("li")
    element.classList.add("list-group")
    element.append(document.createTextNode(inputText.value)) 
    itemList.insertBefore(element, itemList.childNodes[0])
    inputText.value = ""
})

itemList.addEventListener("click",(e)=>{
    if( e.target.tagName === "Li"){
        e.target.remove()
    }
})
