import { BaseController } from "@common/http/controllers/BaseController";
import { Request, Response } from "express";
import { userService } from "../services/user.service";

class UserController extends BaseController {
  public _getRoutes(): Record<string, Function> {
    return {
      "GET:/": this.list,
      "GET:/view/:id": this.view,
      "GET:/list/adults": this.listAdults,
      "GET:/list/childrens": this.listChildrens
    }
  }

  public async view(request: Request, response: Response) {
    const { id } = request.params;
    return userService.view(Number(id));
  }

  public async list() {
    return userService.list();
  }

  public async listAdults() {
    return userService.listAdults();
  }

  public async listChildrens() {
    return userService.listChildrens();
  }
}

export const userController = new UserController();
