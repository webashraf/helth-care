import { Router } from "express";
import { user_controller } from "./user.controller";

const router = Router();

router.post(
  "/create-admin",
  (req, res, next) => {
    console.log("Hello");
    next();
  },
  user_controller.createAdmin
);

export const user_routes = router;
