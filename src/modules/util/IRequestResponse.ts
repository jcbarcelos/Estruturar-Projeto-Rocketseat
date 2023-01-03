import { Request, Response } from "express";

export interface IRequestResponse {
  request: Request;
  response: Response;
}

