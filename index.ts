import express from "express";
import createMongoConnection from "./context/MongoConnection";
createMongoConnection();

import proyectoRouter from "./proyectos/infrastructure/rest/Proyecto.route";
import tareasRouter from "./tareas/infrastructure/rest/tarea.route";

const app = express();
const port = 8080;

app.use(express.json());
app.use("/proyectos", proyectoRouter);
app.use("/tareas",tareasRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
