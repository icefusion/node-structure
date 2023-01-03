import { NextFunction, Request, Response, Router } from "express";

const methods = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete',
  OPTIONS: 'options',
  PATCH: 'patch'
} as const

type ValueOf<T> = T[keyof T];
type valitMethodsCapital = keyof typeof methods;
type validMethods = ValueOf<typeof methods>;

export abstract class BaseController {
  public abstract _getRoutes(): Record<string, Function>;

  public initialize(parentRouter: Router, path: string) {
    const router = Router();

    parentRouter.use(path, router);

    const routes = this._getRoutes();

    Object.keys(routes).forEach((key) => {
      const fn = routes[key];
      const match = key.match(/^([A-Z]+):(.*)/);

      if (!match) {
        throw new Error('Invalid route props: ' + key);
      }

      const [, method, path] = match

      if (!methods[method as valitMethodsCapital]) {
        throw new Error('Invalid method props: ' + method);
      }

      const methodFn = methods[method as valitMethodsCapital] as validMethods;

      router[methodFn](path, async (req: Request, res: Response, next: NextFunction) => {
        try {
          const data = await fn.bind(this)(req, res);
          res.status(200).json({ success: true, data})
        } catch (err) {
          next(err)
        }
      })
    })


  }
}
