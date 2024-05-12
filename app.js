function findreplace() {
    let para = document.getElementById("value");
    let findword = document.getElementById("find");
    let replaceword = document.getElementById("replace");
    let update = document.getElementById("btn");
    let changed = document.getElementById("change");

    let replaced = para.value.replaceAll(findword.value,replaceword.value);
    changed.innerText = para.value;
    update.innerText = replacedvalue;
    
    
}   
