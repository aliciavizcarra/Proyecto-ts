import { ObjectId } from "mongodb";
import { collections } from "../../../context/MongoConnection";
import Proyecto from "../../domain/Proyecto";
import ProyectoRepository from "../../domain/Proyecto.repository";


export default class ProyectoRepositoryMongoDB implements ProyectoRepository{


    async createProyect(proyect: Proyecto): Promise<Proyecto | undefined> {

        const result = await collections.proyects.insertOne(proyect);
        const id = String(result.insertedId);
        return await this.getProyectById(id);
    }


    async getAllProyects(): Promise<Proyecto[] | undefined> {
        const proyectsFromDB = await collections.proyects.find().toArray();
        if(!proyectsFromDB) return undefined;
        const proyects : Proyecto[] = proyectsFromDB.map((proyectFromBD)=>{
            const proyect : Proyecto = {
                id: String(proyectFromBD._id),
                name: proyectFromBD.name,
            };
            return proyect;
        });
        return proyects;
    }



    async getProyectById(id: string): Promise<Proyecto | undefined> {
        const proyectoID = new ObjectId(id);
        const proyectFromBD = await collections.proyects.findOne({_id: proyectoID});
        if (!proyectFromBD) return undefined;
        const proyect : Proyecto = {
            id: String(proyectFromBD._id),
            name: proyectFromBD.name
        };
        return proyect;
    }


}