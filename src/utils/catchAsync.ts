import { Request, RequestHandler, Response } from "express";
import { NextFunction } from "express-serve-static-core";

const catchAsync = (fn: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      return await fn(req, res, next);
    } catch (error) {
      next();
    }
  };
};

export default catchAsync;
