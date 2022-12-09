import { atom, selector } from "recoil";

import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
  key: 'todoLocal',
  storage: localStorage
})
export const toDoState = atom<ITodo[]>({
    key: "toDo",
    default: [],
    effects_UNSTABLE: [persistAtom],
  });

export enum Categories {
  'TO_DO' = 'TO_DO',
  'DOING' = 'DOING',
  'DONE' = 'DONE'
}
export interface ITodo {
    text: string;
    category: Categories;
    id: number;
  }

  export const categoryState = atom<Categories>({
    key:'category',
    default: Categories.TO_DO,
  })

  export const toDoSelector = selector({
    key: 'toDoSelector',
    get: ({get})=>{
      const toDos = get(toDoState)
      const category = get(categoryState);
      return toDos.filter(todo=> todo.category === category)
    }
  })
  