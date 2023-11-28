import { collections } from "../../../context/MongoConnection";
import Proyecto from "../../domain/Proyecto";
import ProyectoRepository from "../../domain/Proyecto.repository";


export default class ProyectoRepositoryMongoDB implements ProyectoRepository{


    async getAllProyects(): Promise<Proyecto[] | undefined> {
        const proyectsFromDB = await collections.proyects.find().toArray();
        if(!proyectsFromDB) return undefined;
        const proyectos : Proyecto[] = proyectsFromDB.map
    }



    getProyectById(id: string): Promise<Proyecto | undefined> {
        throw new Error("Method not implemented.");
    }


}