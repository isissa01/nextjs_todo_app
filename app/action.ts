import { db } from "@/db"
import { Todo, todo } from "@/db/schema"
import { asc, desc, eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"

export async function addTodoAction(formData : FormData) {
    'use server'
    let text = formData.get('todo') as string
    db.insert(todo).values({text: text}).execute()
    revalidatePath('/');
    
}

export async function getAllTodos(){
    'use server'
    const data  = await db.select().from(todo).orderBy(asc(todo.completed), desc(todo.id));
    return data;
}

export async function deleteTodoAction(id : number) {
    'use server'
    db.delete(todo).where(eq(todo.id, id)).execute()
    revalidatePath('/');
}
export async function updateTodoAction(updatedTodo : Todo) {
    'use server'
    const id = updatedTodo.id as number
    db.update(todo).set({text: updatedTodo.text}).where(eq(todo.id, id)).execute()
    revalidatePath('/');
}

export async function toggleTodoAction(oldTodo : Todo) {
    'use server'
    const id = oldTodo.id as number

    const completed = oldTodo.completed ? false : true
    db.update(todo).set({completed: completed}).where(eq(todo.id, id)).execute()
    revalidatePath('/');
}