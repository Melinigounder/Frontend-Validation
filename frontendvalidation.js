function addTheInput() {
    let myInputBox = document.getElementById("myInput");
    let myInputBoxValue = myInputBox.value;
    
    const emptyListTag = document.createElement("li");
    
    const textNode =document.createTextNode(myInputBoxValue);
    
    let x =emptyListTag.appendChild(textNode);
    let y = document.getElementById("MyTaskList").appendChild(emptyListTag);
    
    }