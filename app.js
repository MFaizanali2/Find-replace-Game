function findreplace() {
    let para = document.getElementById("value");
    let findword = document.getElementById("find");
    let replaceword = document.getElementById("replace");
    let update = document.getElementById("btn");
    let changed = document.getElementById("change");
    let one = document.getElementById("first");

    let replaced = para.value.replaceAll(findword.value,replaceword.value);
    update.innerText = para.value;
    one.innerText = para.value
    changed.innerText = replaced;
    
    
}   
