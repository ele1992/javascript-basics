function updateCounters(){
    const total = document.getElementById("total-count");
    const done = document.getElementById("done-count");
    const todo = document.getElementById("todo-count");

    const donelist = document.querySelectorAll("input:checked");
    const donenumber = donelist.length;
    done.innerText = donenumber;

    const totallist = document.querySelectorAll("input[type=checkbox]");
    const totalnumber = totallist.length;
    total.innerText = totalnumber;

    const todonumber = totalnumber - donenumber;
    todo.innerText = todonumber;
    
    console.log(todonumber);
    console.log(donenumber);
    console.log(totalnumber);
}
document.addEventListener("click", function(){
    updateCounters();
})

function toggleDone(event){

    if(checkbox.checked){
        
    }
    else{

    }
    updateCounters();
}
