import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreateClientUseCase";

export class CreateClienController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;
    
    const createClientUseCase = new CreateClientUseCase();

    const result = await createClientUseCase.execute({
      username,
      password,
    });
    return response.json(result);
  }
}
