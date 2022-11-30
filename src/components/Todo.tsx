import React from "react";
import { useSetRecoilState } from "recoil";
import { ITodo, toDoState } from "./atoms";

function Todo({text, category, id}:ITodo){
    const setTodos = useSetRecoilState(toDoState)
    const onClick = (event:React.MouseEvent<HTMLButtonElement>)=>{
        const {currentTarget:{name}}= event
    }
    return (
      <li>
        <span>{text}</span>
        {category !== "TO_DO" && (
          <button name='todo' onClick={onClick}>To do</button >
        )}
        {category !== "DOING" && (
          <button name='doing' onClick={onClick}>Doing</button>
        )}
        {category !== "DONE" && (
          <button name='done' onClick={onClick}>Done</button>
        )}
      </li>
    );
    
}

export default Todo;