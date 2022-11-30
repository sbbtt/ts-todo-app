import { useForm } from "react-hook-form"
import { useSetRecoilState } from "recoil";
import { toDoState } from "./atoms";


type IForm ={
    toDo: string
    
  }
  

function CreateTodo(){
    const setTodos = useSetRecoilState(toDoState)
    const {
      register,
      handleSubmit,
      setValue,
      formState: { errors },
    } = useForm<IForm>();
    const handleValid = ({toDo}:IForm) => {
        console.log(toDo);
        setTodos((prev)=>[{text:toDo, category:'TO_DO', id:Date.now()}, ...prev])
        setValue('toDo', '')
      };
    return (
        <form onSubmit={handleSubmit(handleValid)}>
          <input
            {...register("toDo", {
              required: "please wirte a to do",
            })}
            placeholder="wirte a todo"
          />
          <button>add</button>
          <br></br>
          <span>{errors?.toDo?.message}</span>
        </form>
    )
}
export default CreateTodo