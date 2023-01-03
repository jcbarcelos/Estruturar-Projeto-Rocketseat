import { prisma } from "../../../../database/prismaClient";
import { hash } from "bcrypt";
import { IClient } from "../../../../interfaces/client";
import { ValidationUserUseCase } from "../../../account/validations/ValidationUserUseCase";
import { Response } from "express";

export class CreateClientUseCase {
  async execute({ password, username }: IClient, response?: Response) {
    const validationUserUseCase = new ValidationUserUseCase();

    var validdationName = await validationUserUseCase
      .execute(username)
      .then((res) => res);

    if (validdationName) {
      throw new Error(`Error client ${username} exists`);
    }

    const hashPassword = await hash(password, 10);

    const client = await prisma.clients.create({
      data: {
        username,
        password: hashPassword,
      },
    });

    return { status: 200, client: client?.username };
  }
}
