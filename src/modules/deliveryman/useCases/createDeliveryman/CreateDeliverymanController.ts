import { Request, Response } from "express";
import { CreateDevilerymanUseCase } from "./CreateDeliverymanUseCase";

export class CreateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const createDevilerymanUseCase = new CreateDevilerymanUseCase();

    const result = await createDevilerymanUseCase.execute({
      username,
      password,
    });

    return response.json(result);
  }
}
