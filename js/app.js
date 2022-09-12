let burgerMenu = document.getElementById("burger");
let navMenu = document.getElementById("menu");

burgerMenu.addEventListener("click", function(){
    navMenu.classList.toggle("nav-active");
    burgerMenu.classList.toggle("list-active");
});


// todo
let item = document.querySelector("#todo");
let formElement = document.querySelector("#form_wrapper");
// let btn = document.querySelector("#add_btn");
let clear = document.querySelector("#clear_all");
let ulList = document.querySelector(".ul-list");


formElement.addEventListener("submit", function(x){
    x.preventDefault();
    let value = item.value;
    if (value == " "){
        return;
    }
    
    let li = document.createElement("li");
    li.classList.add("item-li");
    let deleteBtn = document.createElement("i");
    deleteBtn.classList.add("fa-solid", "fa-trash", "delete");
    deleteBtn.addEventListener("click", function(){
        li.remove();
    })
    li.innerText = value;
    ulList.appendChild(li);
    li.appendChild(deleteBtn);
    item.value = " ";
});

clear.addEventListener("click", function(){
    ulList.innerHTML = " ";
})

item.addEventListener("focus", function(){
    item.style.border = "2px solid lightblue";
})