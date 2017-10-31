window.onload=function() {
    var inp=document.getElementById("newtodo");
    var btn=document.getElementById("btn");
    btn.onclick=function () {
        add(inp.value);
        display();
        document.getElementById("newtodo").value ="";
    }
    //display();
}

function display() {
    var parent=document.getElementById("todolist");
    parent.innerHTML="";
    var complete=document.getElementById("completelist");
    complete.innerHTML="";
    var dellist=document.getElementById("deletelist");
    dellist.innerHTML="";
    Object.keys(list.todoList).forEach(function(key){
        var todoitem=list.todoList[key];
        console.log(todoitem);
        addElement(todoitem,key);

    })

}
function addElement(todoitem,key) {

    if(list.todoList[key].status==TodoType.active)
    {
        console.log("wqi");
        var todo_element=document.createElement("div");
        var todo_node=document.createTextNode(todoitem.name);
        var check=document.createElement("input");
        check.setAttribute("type","checkbox");
        check.setAttribute("onchange","markComplete("+key+")")
        var update_button= document.createElement("Button");
        update_button.innerText="Update";

        var delete_button= document.createElement("Button");

        delete_button.innerText="Delete";
        delete_button.setAttribute("onclick", "deletetodo("+key+")");
        //delete_button.setAttribute("onclick", "deleteTodo("+id+")");
        todo_element.appendChild(check);
        todo_element.appendChild(todo_node);
        console.log("hey");
        todo_element.appendChild(update_button);
        todo_element.appendChild(delete_button);
        document.getElementById("todolist").appendChild(todo_element);
    }
    if(list.todoList[key].status==TodoType.complete)
    {
        var todo_element=document.createElement("div");
        var todo_node=document.createTextNode(list.todoList[key].name);
        var update_button= document.createElement("Button");
        update_button.innerText="Update";

        var delete_button= document.createElement("Button");

        delete_button.innerText="Delete";
        delete_button.setAttribute("onclick", "deletetodo("+key+")");
        todo_element.appendChild(todo_node);
        todo_element.appendChild(update_button);
        todo_element.appendChild(delete_button);
        document.getElementById("completelist").appendChild(todo_element);
    }
    if(list.todoList[key].status==TodoType.delete)
    {
        var todo_element=document.createElement("div");
        var todo_node=document.createTextNode(list.todoList[key].name);
        todo_element.appendChild(todo_node);
        document.getElementById("deletelist").appendChild(todo_element);
    }

}
function markComplete(id)
{
    console.log(id);
    //var todo_element=document.getElementById(list.todoList[id].name);
    list.todoList[id].status=TodoType.complete;
    display();
}
function deletetodo(id) {
    console.log("delee");
    list.todoList[id].status=TodoType.delete;
    display();
}