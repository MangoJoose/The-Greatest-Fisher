import { Router } from "express";
import { game_data } from "../config_loader";
import { go_fish } from "../controller";


const router = Router();

router.get("/fish", go_fish);

export default router;