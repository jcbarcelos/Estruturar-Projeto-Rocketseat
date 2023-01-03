import { IClient } from "../../../interfaces/client";
import { ValidationUserUseCase } from "../validations/ValidationUserUseCase";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

export class AuthenticateClientUseCase {
  async execute({ password, username }: IClient) {
    const validationUserUseCase = new ValidationUserUseCase();

    var validdationName = await validationUserUseCase
      .execute(username)
      .then((res) => res);

    if (!validdationName) {
      throw new Error(`Error client ${username} not exists`);
    }

    const passwordMatch = await compare(password, validdationName?.password);

    if (!passwordMatch) {
      return { status: 400, message: "Username or password invalid" };
    }
    const token = sign(
      { username },
      "2da9dd589cd55676e3eb75b6bae761e3b148eb15",
      {
        subject: validdationName?.id,
        expiresIn: "1d",
      }
    );
    return { status: 200, token: token };
  }
}
