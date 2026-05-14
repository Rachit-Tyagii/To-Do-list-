
let ctr = 1;

function deleteTODO(index) {
    const element = document.getElementById(index);
    element.parentNode.removeChild(element);
}


function add() {

    const newEl = document.querySelector ("input");
    const value = newEl.value;

    const newDivEl = document.createElement ("div");
    newDivEl.setAttribute("id", ctr);
    newDivEl.style="font-size: 20px; font-weight: 600; display: flex; justify-content: space-between; margin-bottom: 10px; margin-top: 10px;"

    newDivEl.innerHTML = "<div>" + value + '</div><button class="deleting" onclick="deleteTODO(' + ctr + ')">Delete';

    
    document.querySelector("body").appendChild(newDivEl);
    ctr = ctr +1;
}

