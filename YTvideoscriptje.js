let list = document.getElementById("myList");
let data = ["hina1Pk3rMw","IUyOQAW9jKs","hcKNvIFnpls","t4S4MbP3H6w","VOIB9x9WNq0"];
data.forEach((item)=>{
    let li = document.createElement("li")
    li.innerText = item;
    list.appendChild(li);
})
