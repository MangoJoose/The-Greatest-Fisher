import { Router } from "express";
import { go_fish, sell_fish, get_fish } from "../controller";


const router = Router();

router.get("/fish", go_fish);

router.get("/sell", sell_fish);

router.get("/getfish", get_fish);

export default router;