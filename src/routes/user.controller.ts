import { Router, Request, Response, NextFunction } from "express";
import * as userService from "../services/user.service";

const router = Router();

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
      await userService.create(req.body);
      res.json({ message: "User created" });
    } catch (err) {
      next(err);
    }
  });

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await userService.getAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await userService.getById(parseInt(req.params.id));
    res.json(user);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        await userService._delete(parseInt(req.params.id));
        res.json({ message: 'User deleted' });
    } catch (err) {
        next(err);
    }
});

export const userRouter = router;
