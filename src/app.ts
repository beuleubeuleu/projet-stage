import express from 'express';
import * as dotenv from "dotenv"
import { main }    from "./config/dbConfig";

import categoryRouter from "./Routes/categoryRoute";
import productsRouter from "./Routes/productsRoute";
import usersRouter from "./Routes/usersRoute";

dotenv.config()
const app = express()

//start database
main().catch(err => console.log(err));

//everything app
app.use(express.json());
app.use("/api/v1/category", categoryRouter)
app.use("/api/v1/products", productsRouter)
app.use("/api/v1/users", usersRouter)

export default app