let bgContainerEl = document.createElement("div");
bgContainerEl.classList.add("bg-container");
document.body.appendChild(bgContainerEl);

let headingEL = document.createElement("h1");
headingEL.classList.add("heading");
headingEL.textContent = "grocery List";
bgContainerEl.appendChild(headingEL);

let listContainerEl = document.createElement("ul");
listContainerEl.classList.add("list-container");
bgContainerEl.appendChild(listContainerEl);

/*for every single item we dont need to write the code 
so we are going to this method under given below
let listItemEl = document.createElement("li");
listItemEl.textContent = "Milk";
listContainerEl.appendChild(listItemEl);&*/

let groceryItems = ["Milk", "Peanut butter", "Choco Chips", "Tomato Sauce", "Cup Cakes", "Noodles", "Ice creams", "Maggie",]
for (let groceryItem of groceryItems){
    let listItemEl = document.createElement("li");
    listItemEl.textContent = groceryItem;
    listContainerEl.appendChild(listItemEl);

}

let checkBoxEl = document.createElement("input");
checkBoxEl.type = "checkbox";
checkBoxEl.id = "deliveryMode";
bgContainerEl.appendChild(checkBoxEl);

let labelEl = document.createElement("label");
labelEl.setAttribute("for", "deliveryMode");
labelEl.classList.add("delivery-text");
labelEl.textContent = "Need Home Delivery";
bgContainerEl.appendChild(labelEl);

let breakEl = document.createElement("br");
bgContainerEl.appendChild(breakEl);

let btnEl = document.createElement("button");
btnEl.classList.add("btn", "btn-primary");
btnEl.textContent = "proceed to pay";
bgContainerEl.appendChild(btnEl);
