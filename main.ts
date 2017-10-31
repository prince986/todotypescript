var TodoType = {active:"ACTIVE", complete:"COMPLETE", delete:"DELETE"};

interface TodoProperty{
    id ?: number;
    name : string;
    status : string;
}
class Todo{
    public todoList : TodoProperty[];
    index :number
    constructor()
    {
        this.index = 1;
        this.todoList = [];
    }

    addElements(list: TodoProperty): number
    {
        list.id = this.index++;
        this.todoList.push(list);
        console.log(list);
       return list.id;
    }
    deleteElement(id : number)
    {
        this.todoList[id].status=TodoType.delete;
        console.log(this.todoList[id]);
    }
}
var list=new Todo();
function add(name : string) : number
{
    var todotype: TodoProperty = {name:name, status :TodoType.active};

    var resultId=list.addElements(todotype);
    return resultId;
}
function delet(id : number)
{
    list.deleteElement(id);
}
