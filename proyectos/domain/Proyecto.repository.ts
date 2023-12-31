import Proyecto from "./Proyecto";


export default interface ProyectoRepository{
    getAllProyects(): Promise<Proyecto[] | undefined>;
    getProyectById(id: string): Promise<Proyecto| undefined>;
    createProyect(proyect: Proyecto): Promise <Proyecto | undefined>
}