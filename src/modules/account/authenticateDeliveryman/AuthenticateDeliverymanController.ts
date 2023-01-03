import { Request, Response } from "express";
import { AuthenticateDeliverymanUseCase } from "./AuthenticateDeliverymanUseCase";

export class AuthenticateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const authenticateDeliverymanUseCase = new AuthenticateDeliverymanUseCase();
    const result = await authenticateDeliverymanUseCase.execute({
      username,
      password,
    });

    return response
      .status(result?.status ? result?.status : 200)
      .json({ result: result?.token ? result?.token : result?.message });
  }
}
