
function addTodo() {
    console.log("jwid");
    //list.todoList[0].name
    var todo_element=document.createElement("div");
    var todo_value=document.getElementById("newtodo").value;
    var id=add(todo_value);
    var todo_node=document.createTextNode(todo_value);
    //console.log(todo_element);
    var check=document.createElement("input");
    check.setAttribute("type","checkbox");
    var update_button= document.createElement("Button");
    update_button.innerText="Update";
    //update_button.setAttribute("button",type);
    var delete_button= document.createElement("Button");
    delete_button.className="deleteBut";
    delete_button.innerText="Delete";
    //delete_button.setIdAttribute(id);

    //delete_button.setAttribute("data-id",key)
    console.log(id);
    delete_button.setAttribute("onclick", "deleteTodo("+id+")");
    todo_element.appendChild(check);
    todo_element.appendChild(todo_node);
    console.log("hey");
    todo_element.appendChild(update_button);
    todo_element.appendChild(delete_button);
    document.getElementById("todolist").appendChild(todo_element);
    for(var i=0;i<deleteBut.length;i++)
    {
        deleteBut[i].onclick=function () {
            var div=this.parentElement();
            div.style.display=none;
        }
    }

}
function deleteTodo(id) {
 delet(id);
 var del=document.getElementsByClassName("deleteBut");
 var i=0;
 for(i=0;i<del.length;i++)
 {
     del[i].onclick=function () {
         var div=this.parentElement();
         div.style.display=none;
     }
 }
}