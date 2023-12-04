import Tarea from "./Tarea";

export default interface TareaRepository{
    createTarea(tarea: Tarea);
}