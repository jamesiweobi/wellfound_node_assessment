import { Response } from "express";
import { IUserObject } from "../models/user.model";

export interface ResponseParams {
  res: Response;
  message?: string;
  data?: anyObject;
  statusCode?: number;
}

export type anyObject = Record<string, any>;


declare global {
  namespace Express {
    export interface Request {
      user: IUserObject;

    }
  }
}