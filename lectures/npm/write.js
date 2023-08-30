const fs = require("fs");
const { v4: uuid } = require("uuid");

class Todo {
    constructor(task) {
        this.task = task;
        this.status = "Doing";
        this.id = uuid();
    }
}
class Todos {
    readAll() {
        const content = fs.readFileSync("data.json", "utf-8");
        return JSON.parse(content);
    }
    addTodo(todo) {
        const todos = this.readAll();
        todos.push(todo);
        this.updateAll(todos);
    }

    updateAll(todos) {
        fs.writeFileSync("data.json", JSON.stringify(todos));
    }

    compelete(id) {
        const content = this.readAll();

        for (const todo of content) {
            if (todo.id === id) {
                todo.status = "Done";
                break;
            }
        }

        this.updateAll(content);
    }

    delete(id) {
        const content = this.readAll();
        const filteredContent = content.filter((todo) => todo.id !== id);
        this.updateAll(filteredContent);
    }

    updateTask(id, text) {
        const todos = this.readAll();

        for (const todo of todos) {
            if (todo.id === id) {
                todo.task = text;
                break;
            }
        }
        this.updateAll(todos);
    }

    summarize() {
        const todos = this.readAll();
        let todoStatus = 0;
        let doneStatus = 0;

        for (const todo of todos) {
            if (todo.status === "Doing") {
                todoStatus++;
            } else if (todo.status === "Done") {
                doneStatus++;
            }
        }
        return {
            Done: doneStatus,
            Todo: todoStatus,
        };
    }
}

const todo = new Todo("Cleaning");
const todos = new Todos();
todos.addTodo(todo);
