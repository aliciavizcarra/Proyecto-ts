import Proyecto from "../domain/Proyecto";
import ProyectoRepository from "../domain/Proyecto.repository";


export class ProyectoUseCases {

    private proyectoRepository : ProyectoRepository;

    constructor(proyectoRepository : ProyectoRepository){
        this.proyectoRepository = proyectoRepository;
    }

    async getAllProyects(){
        return await this.proyectoRepository.getAllProyects();
    }

    async getProyectById(id: string){
        return await this.proyectoRepository.getProyectById(id)
    }

    async createProyect(proyect: Proyecto){
        return await this.proyectoRepository.createProyect(proyect)
    }

}