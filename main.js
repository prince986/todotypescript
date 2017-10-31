var TodoType = { active: "ACTIVE", complete: "COMPLETE", delete: "DELETE" };

var Todo = (function () {
    function Todo() {
        this.index = 1;
        this.todoList = [];
    }
    Todo.prototype.addElements = function (list) {
        list.id = this.index++;
        this.todoList.push(list);
        console.log(list);
        return list.id;
    };
    Todo.prototype.deleteElement = function (id) {
        this.todoList[id].status = TodoType.delete;
        console.log(this.todoList[id]);
    };
    return Todo;
})();
var list = new Todo();
function add(name) {
    var todotype = { name: name, status: TodoType.active };

    var resultId = list.addElements(todotype);
    return resultId;
}
function delet(id) {
    list.deleteElement(id);
}
