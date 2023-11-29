import express from "express";
import { ProyectoUseCases } from "../../application/Proyecto.usercases";
import ProyectoRepositoryMongoDB from "../db/Proyecto.mongo";



const router = express.Router();
const proyectoUseCases: ProyectoUseCases= new ProyectoUseCases(new ProyectoRepositoryMongoDB());

router.get("/",async (req, res) =>{

    try{
        const proyects = await proyectoUseCases.getAllProyects();
        res.json(proyects);
    }catch(error){
        console.log(error);
        
        res.status(500).json({ error: "Internal Server Error" });
    }
})

router.get("/:id", async (req, res)=>{
    try{
        const proyectoID= req.params.id;
        const proyecto = await proyectoUseCases.getProyectById(proyectoID);
        if(proyecto){
            res.json(proyecto)
        }else{
            res.status(404).json({ error: "User not found" });
        }
    }catch (error){
        res.status(500).json({ error: "Internal Server Error" });
    }
})

router.post("/", async (req, res)=>{
    try{
        const newProyect = req.body;
        const createdProyect = await proyectoUseCases.createProyect(newProyect);
        res.status(201).json(createdProyect);
    }catch (error){
        res.status(500).json({ error: "Internal Server Error" });
    }
})

export default router;