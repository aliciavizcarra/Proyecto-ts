import Tarea from "../domain/Tarea";
import TareaRepository from "../domain/TareaRepository";

export class TareaUseCases{

    private tareaRepository: TareaRepository;

    constructor(tareaRepository: TareaRepository){
        this.tareaRepository = tareaRepository;
    }

    async createTarea(tarea: Tarea){
        return await this.tareaRepository.createTarea(tarea);
    }




}