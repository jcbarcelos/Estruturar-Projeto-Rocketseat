import { Request, Response } from "express";
import { FindAllAvalalableUseCase } from "./findAllAvalalableUseCase";

export class FindAllAvalalableController {
  async handle(request: Request, response: Response) {
    const findAllAvalalableUseCase = new FindAllAvalalableUseCase();
    const deliveries = await findAllAvalalableUseCase.execute();
    return response.json(deliveries);
  }
}
