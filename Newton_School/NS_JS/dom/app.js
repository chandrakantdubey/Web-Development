// adding interaction using event listeners.
// adding callbacks to perform interaction

var itemList = document.getElementById('items');

// filter
var filter =document.getElementById('filter');
filter.addEventListener('keyup', filterItem);

function filterItem(e) {
    // conveting in lowerCase
    var text = e.target.value.toLowerCase();

    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(item => {
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!= -1){
            // item found
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
} 

// adding item
var form = document.getElementById('addForm');

form.addEventListener('submit', addItem);
function addItem(e){
    e.preventDefault(); // prevents reloading

    var newItem = document.getElementById('item').value;
    document.getElementById('item').value = "";
    // use the text to creat list element and push into the unorder list
    var liItem = document.createElement('li');
    liItem.className = "list-group-item";
    liItem.appendChild(document.createTextNode(newItem));

    // add delete button 
    var deleteButton = document.createElement('button');
    deleteButton.className = "btn btn-danger btn-sm float-right delete";
    deleteButton.appendChild(document.createTextNode('X'));

    liItem.appendChild(deleteButton);
    itemList.appendChild(liItem);
}


// deleting items
itemList.addEventListener('click', removeItem);

function removeItem(e){
    if(e.target.classList.contains("delete")){
        if(confirm("You are about to shit up?")){
            var li_item = e.target.parentElement;
            itemList.removeChild(li_item);
        }
    }
}