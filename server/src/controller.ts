import { Request, Response } from "express";
import { game_data } from "./config_loader";
import { Fish } from "./config_loader";
import config from "../game_data/config.json";

export async function go_fish(req: Request, res: Response) {
    try {
        
        console.log("Controller Contacted");
        const rand: number = Math.random();
        let fish_table: Fish[] = [];
        if (rand < 0.9) { // Common
            fish_table = game_data.fish.filter(f => f.rarity == config.COMMON);
            console.log("Common fished");
        } else {
            fish_table = game_data.fish.filter(f => f.rarity == config.UNCOMMON);
            console.log("Uncommon Fished");
        }

        const fish_rand: number = Math.random();
        const amount_of_fish: number = fish_table.length;
        let chance: number = 1 / amount_of_fish;
        let fished_fish = 0;

        for (let i=0; i<amount_of_fish; i++) {
            if (fish_rand < chance) {
                fished_fish = i;
                break;
            }
            chance += chance;
        }

        console.log(fish_table[fished_fish]);
        res.json(fish_table[fished_fish]);

    } catch (err) {
        console.error(err);
        res.status(500).send("Error Fishing");
    }
}