/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import httpStatus from "http-status";
import { user_service } from "./user.service";

const createAdmin = async (req: Request, res: Response) => {
  try {
    const result = await user_service.createAdmin(req.body);
    res.send({
      statusCode: httpStatus.OK,
      success: true,
      message: "",
      data: result,
    });
  } catch (error: any) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
      message: error.name || "Something went wrong!",
      err: error,
    });
  }
};

export const user_controller = {
  createAdmin,
};
