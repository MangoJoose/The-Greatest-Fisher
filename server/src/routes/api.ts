import { Router } from "express";
import { game_data } from "../config_loader";


const router = Router();

router.get("/fish", (req, res) => {
    res.send("Request Received");
});

export default router;