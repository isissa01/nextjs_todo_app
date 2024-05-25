import { addTodoAction, deleteTodoAction, getAllTodos, toggleTodoAction, updateTodoAction } from "./action";
import { unstable_noStore } from "next/cache";
import Editbutton from "./components/editbutton";
import TodoItem from "./components/TodoItem";
import { Todo } from "@/db/schema";
export default async function Home() {
  unstable_noStore()
  const todos = await getAllTodos();
  

  return (
    <div className="flex min-h-screen flex-col items-center  p-24">
      <h1 className="text-3xl font-bold">ToDo App</h1>
      <p className="text-2xl mb-2">Todo app with Next.js</p>
      <form action={ addTodoAction} className="flex gap-5">

        <input type="text" placeholder="Enter Todo" name="todo" className="text-black outline-none px-5 py-2"/>
        <button className="bg-blue-500 text-white px-5 py-2 hover:bg-blue-700 cursor-pointer">Add Todo</button>
      </form>

      <ul className="flex  flex-col border-2 p-5 w-full mt-10">
        {todos.map(todo => 
          <TodoItem key={todo.id} todo={todo} updateTodo={updateTodoAction} deleteTodo={deleteTodoAction} toggleTodo={toggleTodoAction}/>)} 
        </ul>

      
    </div>
  );
}
  