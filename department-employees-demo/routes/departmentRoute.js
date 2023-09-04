import {Router} from "express";
import * as departmentController from "../controllers/departmentController.js";

const departmentRouter = Router();

departmentRouter
    .post("/department", departmentController.createDepartment)
    .delete("/department", departmentController.deleteDepartments)

export default departmentRouter;