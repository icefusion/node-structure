import { Response } from "express";
import { UserRepository } from "../repositories/user.repository";

class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  public async view(userId: number, response: Response): Promise<Response> {
    try {
      const user = await this.userRepository.getUser(userId);

      if (!user) {
        return response.status(400).send({ error: "Problems to find user" });
      }

      return response.status(200).send({ status: true, data: user });
    } catch (err: any) {
      return response.status(400).send({ error: err.messages });
    }
  }

  public async list(response: Response): Promise<Response> {
    try {
      const users = await this.userRepository.getData();

      if (!users) {
        return response.status(400).send({ error: "Problems to list user" });
      }

      return response.status(200).send({ status: true, data: users });
    } catch (err: any) {
      return response.status(400).send({ error: err.messages });
    }
  }

  public async listAdults(response: Response): Promise<Response> {
    try {
      const user = await this.userRepository.getAdults();

      if (!user) {
        return response.status(400).send({ error: "Problems to list adult users" });
      }

      return response.status(200).send({ status: true, data: user });
    } catch (err: any) {
      return response.status(400).send({ error: err.messages });
    }
  }

  public async listChildrens(response: Response): Promise<Response> {
    try {
      const user = await this.userRepository.getChildrens();

      if (!user) {
        return response.status(400).send({ error: "Problems to list children users" });
      }

      return response.status(200).send({ status: true, data: user });
    } catch (err: any) {
      return response.status(400).send({ error: err.messages });
    }
  }
}

export { UserService };
