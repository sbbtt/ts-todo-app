import React from 'react';
import {  useRecoilState, useRecoilValue } from 'recoil';
import { Categories, categoryState, toDoSelector, toDoState } from './atoms';
import CreateTodo from './CreateTodo';
import Todo from './Todo';



function TodoList(){
  const todos = useRecoilValue(toDoSelector)
  const [category, setCategory] = useRecoilState(categoryState)
  //onchange event 
  const onInput = (event:React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any)
  }
  console.log(todos)
    return (
      <div>
        <h1>TODO</h1>
        <hr />
        <select value={category} onInput={onInput}>
          <option value={Categories.TO_DO}>To do</option>
          <option value={Categories.DOING}>Doing</option>
          <option value={Categories.DONE}>Done</option>
        </select>
        <CreateTodo />
        {todos?.map((v)=>(
          <Todo key={v.id} {...v} />
        ))}
      </div>
    );
}
export default TodoList;