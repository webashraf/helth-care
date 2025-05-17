import { PrismaClient } from "@prisma/client";
import cors from "cors";
import express, { Application, Request, Response } from "express";
import { admin_routes } from "./app/modules/admin/admin.routes";
import { user_routes } from "./app/modules/user/user.routes";

export const prisma = new PrismaClient();
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1/user", user_routes);
app.use("/api/v1/admin", admin_routes);

app.get("/", (req: Request, res: Response) => {
  res.send({
    success: true,
    message: "Hello PH Health Care!",
  });
});

export default app;
