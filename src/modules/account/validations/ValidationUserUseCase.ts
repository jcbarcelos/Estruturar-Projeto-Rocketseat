import { prisma } from "../../../database/prismaClient";

export class ValidationUserUseCase {
  async execute(username: any) {
    const clientExists = await prisma.clients.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive",
        },
      },
    });

    return clientExists;
  }
}
