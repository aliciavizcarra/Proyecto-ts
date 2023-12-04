import Tarea from "../../tareas/domain/Tarea";

export default interface Proyecto {
    id?:string;
    name: string;
    tareas?: Array<Tarea>
}