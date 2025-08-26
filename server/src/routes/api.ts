import { Router } from "express";
import { go_fish } from "../controller";


const router = Router();

router.get("/fish", go_fish);

export default router;