

list = document.getElementById("data_item");

function todo(){


    // Add input
    var input = document.getElementById("data");
    var li = document.createElement("li");
    var text = document.createTextNode(input.value);
    li.appendChild(text)
    list.appendChild(li)
    li.style.listStyle = "none"
    
    // Create Delte TODO Item

    var btn_dlt = document.createElement("button")
    btn_dlt.setAttribute("class","btn")
    btn_dlt.setAttribute("onclick","dlt_todo(this)")
    var btn_txt = document.createTextNode("x")
    btn_dlt.appendChild(btn_txt)
    li.appendChild(btn_dlt)

    // Create Edit Button

    var btn_edit = document.createElement("button")
    var btn_etext = document.createTextNode("Edit")
    btn_edit.setAttribute("onclick","edit(this)")
    btn_edit.appendChild(btn_etext)
    li.appendChild(btn_edit)
    
    input.value = ""

    console.log(li)
}

function dlt_todo(e){
   e.parentNode.remove();
}

function dlt_all(){

    // First Logic
    // var dltall = document.getElementById("data_item");
    // dltall.remove();

    // Second Logic
    list.innerHTML = ""

    console.log(list)
}

function edit(e){
    
    var edit = prompt("Enter updated value",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = edit

    
}