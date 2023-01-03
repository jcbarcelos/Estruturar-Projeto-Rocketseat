import { IClient } from "../../../interfaces/client";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { ValidationDeliverymanUseCase } from "../validations/ValidationDeliverymanUseCase";


export class AuthenticateDeliverymanUseCase {
  async execute({ password, username }: IClient) {
    const validationUserUseCase = new ValidationDeliverymanUseCase();

    var validdationDeliveryman = await validationUserUseCase
      .execute(username)
      .then((res) => res);

    if (!validdationDeliveryman) {
      throw new Error(`Error client ${username} not exists`);
    }

    const passwordMatch = await compare(
      password,
      validdationDeliveryman?.password
    );

    if (!passwordMatch) {
      return { status: 400, message: "Username or password invalid" };
    }
    const token = sign(
      { username },
      "2da9dd589cd55676e3eb75b6bae761e3b148eb151",
      {
        subject: validdationDeliveryman?.id,
        expiresIn: "1d",
      }
    );
    return { status: 200, token: token };
  }
}
