import { prisma } from "../../../database/prismaClient";

export class ValidationDeliverymanUseCase {
  async execute(username: any) {
    const deliverymanExists = await prisma.deliveryman.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive",
        },
      },
    });

    return deliverymanExists;
  }
}
