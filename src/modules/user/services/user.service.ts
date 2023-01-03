import AppError from "@common/http/errors/app.errors";
import { Response } from "express";
import { userRepository } from "../repositories/user.repository";

class UserService {
  public async view(userId: number) {
    const user = await userRepository.getUser(userId);

    if (!user) {
      throw new AppError("Problems to find user", 400);
    }

    return user;
  }

  public async list() {
    const users = await userRepository.getData();

    if (!users) {
      throw new AppError("Problems to list user", 400);
    }

    return users;
  }

  public async listAdults() {
    const user = await userRepository.getAdults();

    if (!user) {
      throw new AppError("Problems to list adult users", 400);
    }

    return user;
  }

  public async listChildrens() {
    const user = await userRepository.getChildrens();

    if (!user) {
      throw new AppError("Problems to list children users", 400);
    }

    return user;
  }
}

export const userService = new UserService();
