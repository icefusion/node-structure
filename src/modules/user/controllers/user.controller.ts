import { Request, Response } from "express";
import { UserService } from "../services/user.service";

class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public async view(request: Request, response: Response) {
    const { id } = request.params;

    return this.userService.view(Number(id), response);
  }

  public async list(request: Request, response: Response) {
    return this.userService.list(response);
  }

  public async listAdults(request: Request, response: Response) {
    return this.userService.listAdults(response);
  }

  public async listChildrens(request: Request, response: Response) {
    return this.userService.listChildrens(response);
  }
}

export { UserController };
