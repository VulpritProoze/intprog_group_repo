import { Router, Request, Response, NextFunction } from "express";
import * as userServices from "../services/user.service";

const router = Router();
router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        await userServices._delete(parseInt(req.params.id));
        res.json({ message: 'User deleted' });
    } catch (err) {
        next(err);
    }
});

export const userRouter = router;