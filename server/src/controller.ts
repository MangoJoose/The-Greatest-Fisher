import { Request, Response } from "express";
import { game_data } from "./config_loader";
import { Fish, FishInstance, getFishById } from "./config_loader";
import config from "../game_data/config.json";
import { addFishToInventory, sellInventory, addMoney, getMoney, getFishventory } from "./db";

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function go_fish(req: Request, res: Response) {
    try {
        console.log("Before delay");
        await delay(2000);
        console.log("After delay");

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

        addFishToInventory(1, fish_table[fished_fish].id, 0, fish_table[fished_fish].price); // TODO: Assign fish to correct inventory, and set up modifiers later

    } catch (err) {
        console.error(err);
        res.status(500).send("Error Fishing");
    }
}

export async function sell_fish(req: Request, res: Response) {
    try {
        const gold_gained = await sellInventory(1); // TODO: Hardcoded account id 1
        await addMoney(1, gold_gained);
        const new_money = await getMoney(1); // Hardcoded account id 1
        console.log("New Money: ", new_money);
        console.log("Sold inventory success");
        res.json({goldGained: gold_gained, newTotal: new_money});
    } catch (err) {
        console.error(err);
        res.status(500).send("Error selling");
    }
}

export async function get_fish(req: Request, res: Response) {
    try {
        const fish_list: FishInstance[] = await getFishventory(1); // TODO: Hardcoded account id 1
        let fishventory_list: Fish[] = [];

        for (let i=0; i<fish_list.length; i++) {
            fishventory_list[i] = getFishById(fish_list[i].id)!;
        }

        console.log(fishventory_list);
        res.json(fishventory_list);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error getting fish.");
    }
}
/*
export async function updateMoney(req: Request, res: Response) {
    try {
        res.setHeader("Content-Type", "text/event-stream");
        res.setHeader("Cache-Control", "no-cache");
        res.setHeader("Connection", "keep-alive");


    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating money");
    }
}
    */