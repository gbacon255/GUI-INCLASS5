// ADD NEW ITEM TO END OF LIST
const List = document.querySelector("#page ul");
const cream = document.createElement("li");
cream.textContent = "cream";
List.appendChild(cream);


// ADD NEW ITEM START OF LIST
const kale = document.createElement("li")
kale.textContent = "kale";
List.insertBefore(kale, List.firstChild);


// ADD A CLASS OF COOL TO ALL LIST ITEMS
const items = List.querySelectorAll("li");
var numItems = 0;
items.forEach(item=>{
    item.classList.add("cool");
    numItems+=1;
});
// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING

const heading = document.querySelector("#page h2");
heading.innerHTML = `Buy groceries <span class='h2 span'>${numItems}</span>`;