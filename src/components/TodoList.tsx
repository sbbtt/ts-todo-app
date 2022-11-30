import {  useRecoilValue } from 'recoil';
import { toDoState } from './atoms';
import CreateTodo from './CreateTodo';
import Todo from './Todo';



function TodoList(){
  const todos = useRecoilValue(toDoState)
    return (
      <div>
        <h1>TODO</h1>
        <hr />
        <CreateTodo />
        <ul>
          {todos.map((x) => (
            <Todo key={x.id} {...x} />
          ))}
        </ul>
      </div>
    );
}
export default TodoList;