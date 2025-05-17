import { Router } from "express";
import { admin_controller } from "./admin.controller";

const router = Router();

router.get("/", admin_controller.getAdmin);

export const admin_routes = router;
