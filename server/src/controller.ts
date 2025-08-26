import { Request, Response } from "express";
import { game_data } from "./config_loader";
import { Fish } from "./config_loader";

export async function go_fish(req: Request, res: Response) {
    try {
        console.log("Controller Contacted");
        const rand: number = Math.random();
        let fish_table: Fish[] = [];
        if (rand < 0.9) { // Common
            fish_table = game_data.fish.filter(f => f.rarity == 1);
            console.log("Common fished");
        } else {
            fish_table = game_data.fish.filter(f => f.rarity == 2);
            console.log("Uncommon Fished");
        }
        const fish_rand: number = Math.random();
        res.json({string: "Response"});
    } catch (err) {
        console.error(err);
        res.status(500).send("Error Fishing");
    }
}