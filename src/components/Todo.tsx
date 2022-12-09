import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories, ITodo, toDoState } from "./atoms";

function Todo({text, category, id}:ITodo){
    const setTodos = useSetRecoilState(toDoState)
    const onClick = (event:React.MouseEvent<HTMLButtonElement>)=>{
        const {currentTarget:{name}}= event;
        setTodos((oldTodos)=>{
          const targetIndex = oldTodos.findIndex(toDo => toDo.id === id)
          const newTodo = { text, id, category:name as any}
          return [
            ...oldTodos.slice(0, targetIndex),
            newTodo,
            ...oldTodos.slice(targetIndex + 1),
          ];
        })
    }
    const onClickDel = (event:React.MouseEvent<HTMLButtonElement>) => {
      setTodos((oldTodos) => {
        const targetIndex = oldTodos.findIndex((toDo) => toDo.id === id);
        return [
          ...oldTodos.slice(0, targetIndex),
          ...oldTodos.slice(targetIndex + 1),
        ];
      });
    };
    return (
      <li>
        <span>{text}</span>
        {category !== Categories.TO_DO && (
          <>
          <button name={Categories.TO_DO} onClick={onClick}>To do</button >
          </>
        )}
        {category !== Categories.DOING && (
          <>
          <button name={Categories.DOING} onClick={onClick}>Doing</button>
          </>
        )}
        {category !== Categories.DONE && (
          <>
          <button name={Categories.DONE} onClick={onClick}>Done</button>
          </>
        )}
        <button name={Categories.TO_DO} onClick={onClickDel}>DEL</button >
      </li>
    );
    
}

export default Todo;