import express from "express";
import { TareaUseCases } from "../../aplication/Tarea.UseCases";
import TareaRepositoryMongoDB from "../db/Tarea.mogo";

const router = express.Router();

const tareaUseCases: TareaUseCases = new TareaUseCases(new TareaRepositoryMongoDB());

router.post("/", async (req, res) =>{
    try{
        const newTarea = req.body;
        const createdTarea = await tareaUseCases.createTarea(newTarea);
        res.status(201).json(createdTarea);
    }catch (error){
        res.status(500).json({error: "Error de creacion"})
    }
})

export default router;