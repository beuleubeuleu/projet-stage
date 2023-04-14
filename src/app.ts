import express from 'express';
import * as dotenv from "dotenv"
import { main }    from "./config/dbConfig";
import categoryRouter from "./Routes/categoryRoute";
import productsRouter from "./Routes/productsRoute";

dotenv.config()
const app = express()

main().catch(err => console.log(err));
app.use(express.json());
app.use("/api/v1/category", categoryRouter)
app.use("/api/v1/products", productsRouter)

export default app