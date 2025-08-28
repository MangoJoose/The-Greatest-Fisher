import { Router } from "express";
import { go_fish, sell_fish } from "../controller";


const router = Router();

router.get("/fish", go_fish);

router.get("/sell", sell_fish);

export default router;