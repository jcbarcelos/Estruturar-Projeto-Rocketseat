import { Request, Response } from "express";
import { prisma } from "../../../../database/prismaClient";

interface IUpdateDeliveryman {
  id_delivery: string;
  id_deliveryman: string;
}

export class UpdateEndDateUseCase {
  async execute({ id_delivery, id_deliveryman }: IUpdateDeliveryman) {
    const resultDeliveryman = await prisma.deliveries.updateMany({
      where: {
        id: id_delivery,
        id_deliveryman
        
      },
      data: {
        end_at: new Date()
      },
    });
    return resultDeliveryman;
  }
}
