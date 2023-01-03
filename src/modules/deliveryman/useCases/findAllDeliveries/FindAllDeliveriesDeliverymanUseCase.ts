import { prisma } from "../../../../database/prismaClient";

export class FindAllDeliveriesDeliverymanUseCase {
  async execute(id_deliveryman: string) {
    const findDeliveryman = await prisma.deliveryman.findMany({
      where: {
        id: id_deliveryman,
      },
      select: {
        deliveries: true,
        id: true,
        username: true,
      },
    });
    return findDeliveryman;
  }
}
