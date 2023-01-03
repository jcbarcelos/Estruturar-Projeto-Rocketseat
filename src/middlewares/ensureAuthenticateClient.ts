import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticateClient(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({
      status: "error",
      message: "Token missing",
    });
  }
  const token = authHeader.split("Bearer ")[1];

  try {
    const { sub } = verify(
      token,
      "2da9dd589cd55676e3eb75b6bae761e3b148eb15"
    ) as IPayload;
    request.id_client = sub;

    return next();
  } catch (error) {
    return response.status(401).json({
      status: "error",
      message: "Invalid token!",
    });
  }
}
