import { collections } from "../../../context/MongoConnection";
import Tarea from "../../domain/Tarea";
import TareaRepository from "../../domain/TareaRepository";

export default class TareaRepositoryMongoDB implements TareaRepository{

    async createTarea(tarea: Tarea){
        const result = await collections.tareas.insertOne(tarea); //aqui ya insertamos todo
    }

}