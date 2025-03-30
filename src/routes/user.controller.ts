import { Router, Request, Response, NextFunction } from "express";
import * as userService from "../services/user.service";

const router = Router();

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