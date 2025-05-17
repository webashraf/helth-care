/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import httpStatus from "http-status";

import { admin_service } from "./admin.service";

const getAdmin = async (req: Request, res: Response) => {
  const result = await admin_service.getAdmin(req.query);
  res.send({
    statusCode: httpStatus.OK,
    success: true,
    message: "Admin data retrieved successfully",
    data: result,
  });
};

export const admin_controller = {
  getAdmin,
};
