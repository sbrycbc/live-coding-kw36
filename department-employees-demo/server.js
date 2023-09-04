import express from "express";
import departmentRouter from "./routes/departmentRoute.js";
import employeeRouter from "./routes/employeeRoute.js";
import "./lib/connect_db.js";
import dotenv from "dotenv";
dotenv.config();
// import "dotenv/config.js"

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.use("/api", departmentRouter);
app.use("/api", employeeRouter);

app.use((req, res)=>{
    res.status(404).json({msg:"Page not found"});
});

// app.use((err, req, res, next)=>{
//     console.log({err});
//     const statusCode = err.statusCode || 500;
//     res.status(statusCode).send(err.message);
// })



app.listen(port, () => console.log("Server is running on port: " + port));
